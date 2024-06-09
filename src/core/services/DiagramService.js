import * as math from 'mathjs';
import * as THREE from 'three';

const evaluateFlag = 'cosine-sine';

const changePointPosition = (points, wSegments, segment, meridianIndex, delta) => {
    delta.applyAxisAngle(
        new THREE.Vector3(0, 1, 0),
        (meridianIndex * 2 * Math.PI) / wSegments,
    );

    if (meridianIndex == 0) {
        points[(segment * (wSegments + 1) + wSegments) * 3] += delta.x;
        points[(segment * (wSegments + 1) + wSegments) * 3 + 1] += delta.y;
        points[(segment * (wSegments + 1) + wSegments) * 3 + 2] += delta.z;
    }

    points[(segment * (wSegments + 1) + meridianIndex) * 3] += delta.x;
    points[(segment * (wSegments + 1) + meridianIndex) * 3 + 1] += delta.y;
    points[(segment * (wSegments + 1) + meridianIndex) * 3 + 2] += delta.z;
};

const polarToCartesian = (radius, angleDegrees) => {
    let angleRadians = (angleDegrees * Math.PI) / 180;
    let x = radius * Math.cos(angleRadians);
    let y = radius * Math.sin(angleRadians);
    return [x, y];
};

function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
        : null;
}

const paintGradient = (geometry, gradient = undefined, gradientSpan = undefined) => {
    const positions = geometry.attributes.position;
    // Setting color attribute to the sphere
    geometry.setAttribute(
        'color',
        new THREE.BufferAttribute(new Float32Array(positions.count * 3), 3),
    );

    const colors = geometry.attributes.color;

    if (gradient === undefined || gradient.length <= 0) {
        for (let i = 0; i < positions.count; i++) {
            colors.setXYZ(i, 1, 1, 1);
        }

        return;
    }

    if (gradient.length === 1) {
        const c = hexToRgb(gradient[0]);
        for (let i = 0; i < positions.count; i++) {
            colors.setXYZ(i, c[0] / 256, c[1] / 256, c[2] / 256);
        }
        return;
    }

    let YMin;
    let YMax;
    const Y = Array.from({ length: positions.count }, (_, i) => positions.getY(i));
    if (gradientSpan === undefined) {
        YMin = Math.min(...Y);
        YMax = Math.max(...Y);
    } else {
        YMin = gradientSpan[0] !== undefined ? gradientSpan[0] : Math.min(...Y);
        YMax = gradientSpan[1] !== undefined ? gradientSpan[1] : Math.max(...Y);
    }

    const gradientRGB = gradient.map(x => hexToRgb(x));
    const gn = gradientRGB.length - 1;
    for (let i = 0; i < positions.count; i++) {
        const t = (positions.getY(i) - YMin) / (YMax - YMin);
        const gt = Math.max(Math.min(t * gn, gn - 0.000001), 0);
        const gi = Math.floor(gt);

        const ct = gt - gi;

        const cs = math.multiply(math.matrix(gradientRGB[gi]), 1 - ct);
        const ce = math.multiply(math.matrix(gradientRGB[gi + 1]), ct);
        const c = math.multiply(math.add(cs, ce), 1 / 256).toArray();
        colors.setXYZ(i, c[0], c[1], c[2]);
    }
};

function getBezierCoef(points) {
    // Since the formulas work given that we have n+1 points,
    // then n must be this:
    const n = points.length - 1;
    points = points.map(point => math.matrix(point));

    // Build coefficients matrix
    const C = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        C[i][i] = 4;
        if (i > 0) C[i][i - 1] = 1;
        if (i < n - 1) C[i][i + 1] = 1;
    }
    C[0][0] = 2;
    C[n - 1][n - 1] = 7;
    C[n - 1][n - 2] = 2;

    // Build points vector
    const P = [];
    for (let i = 0; i < n; i++) {
        P.push(math.multiply(math.add(math.multiply(points[i], 2), points[i + 1]), 2));
    }
    P[0] = math.add(points[0], math.multiply(points[1], 2));
    P[n - 1] = math.add(math.multiply(points[n - 1], 8), points[n]);

    // Solve system, find a & b
    // solve linalg equations
    const A = math.multiply(math.inv(math.matrix(C)), math.matrix(P)).toArray();
    const B = [];
    for (let i = 0; i < n - 1; i++) {
        // 2 * points[i + 1] - A[i + 1]
        B.push(
            math
                .add(
                    math.multiply(points[i + 1], 2),
                    math.multiply(math.matrix(A[i + 1]), -1),
                )
                .toArray(),
        );
    }
    // (A[n - 1] + points[n]) / 2
    B.push(
        math
            .multiply(math.add(math.matrix(A[n - 1]), math.matrix(points[n])), 0.5)
            .toArray(),
    );

    return [A, B];
}

// Returns the general Bezier cubic formula given 4 control points
function getCubic(a, b, c, d) {
    return t =>
        math.add(
            math.multiply(a, Math.pow(1 - t, 3)),
            math.add(
                math.multiply(b, 3 * Math.pow(1 - t, 2) * t),
                math.add(
                    math.multiply(c, 3 * (1 - t) * Math.pow(t, 2)),
                    math.multiply(d, Math.pow(t, 3)),
                ),
            ),
        );
}

// Return one cubic curve for each consecutive points
function getBezierCubic(points) {
    const [A, B] = getBezierCoef(points);
    return Array.from({ length: points.length - 1 }, (_, i) =>
        getCubic(points[i], A[i], B[i], points[i + 1]),
    );
}

// Evaluate each cubic curve on the range [0, 1] sliced in n points
function evaluateBezier(points, n) {
    const curves = getBezierCubic(points);
    const cn = curves.length;
    const result = [];
    for (let i = 0; i < n - 1; i++) {
        const t = i / (n - 1); //Перевод индекса в размерность [0,1]
        const ct = Math.max(Math.min(t * cn, cn - 0.000001), 0); //Ограничение коэффициента от 0 до cn
        const ci = Math.floor(ct);

        result.push(curves[ci](ct - ci));
    }
    result.push(points[points.length - 1]);

    return result;
}

function evaluateCosineSine(points, n) {
    const result = [];
    const numPoints = points.length - 1;

    for (let i = 0; i < n - 1; i++) {
        const t = i / (n - 1); //Перевод индекса в размерность [0,1]
        const pt = Math.max(Math.min(t * numPoints, numPoints - 0.000001), 0); //Ограничение коэффициента от 0 до cn
        const pi = Math.floor(pt);

        const point1 = points[pi];
        const point2 = points[pi + 1];

        const phi = ((pt - pi) * Math.PI) / 2;
        const cosSquared = Math.cos(phi) ** 2;
        const sinSquared = Math.sin(phi) ** 2;

        const x = point1[0] * cosSquared + point2[0] * sinSquared;
        const y = point1[1] * cosSquared + point2[1] * sinSquared;
        result.push([x, y]);
    }
    result.push(points[points.length - 1]);

    return result;
}

const evaluate = (data, segments) => {
    if (evaluateFlag === 'cosine-sine') {
        return evaluateCosineSine(data, segments);
    } else if (evaluateFlag === 'bezier') {
        return evaluateBezier(data, segments);
    }
};

const transposeMatrix = matrix => {
    const result = [];

    for (let j = 0; j < matrix[0].length; j++) {
        const temp = [];
        for (let i = 0; i < matrix.length; i++) {
            temp.push(matrix[i][j]);
        }
        result.push(temp);
    }
    return result;
};

const interpolateMatrixRows = (data, widthSegments) => {
    /*
  Проходим по количеству строк
  собираем точки столбца для i-той строки
  интерполируем строку, получаем больше точек
  таким образом получаем массив интерполированных строк
  */

    const interpolatedMeridians = [];
    for (let i = 0; i < data.length; i++) {
        let tempData = [];
        for (let j = 0; j < data[i].length; j++) {
            tempData.push([data[i][j], 0]);
        }

        const interpolatedPoints = evaluate(tempData, widthSegments);
        tempData = [];
        for (let index = 0; index < interpolatedPoints.length; index++) {
            tempData.push(interpolatedPoints[index][0]);
        }
        interpolatedMeridians.push(tempData);
    }
    return interpolatedMeridians;
};

const offsetsToPoints = (data, heightSegments) => {
    /*
  Проходим по количеству меридиан
  Переводим каждую меридиану в полярные координаты
  после чего переводим в декартовые
  */

    const decData = [];

    for (let meridianIndex = 0; meridianIndex < data.length; meridianIndex++) {
        let polarPoints = Array.from({ length: data[0].length }, (_, i) => {
            return [data[meridianIndex][i], (180 / heightSegments) * i + 90];
        });
        decData.push(
            polarPoints.map(value => {
                return polarToCartesian(value[0], value[1]);
            }),
        );
    }
    return decData;
};

const transformGeometry = (decData, positionsOffset, widthSegments) => {
    /*
  Записываем декартовые координаты в delta
  смещаем точки относительно этих координат
  */
    // apply data offset
    for (let meridianIndex = 0; meridianIndex < widthSegments; meridianIndex++) {
        for (let index = 0; index < decData[meridianIndex].length; index++) {
            const delta = new THREE.Vector3(
                decData[meridianIndex][index][0],
                decData[meridianIndex][index][1],
                0,
            );

            changePointPosition(
                positionsOffset,
                widthSegments,
                index,
                meridianIndex,
                delta,
            );
        }
    }
};

const squareData = table => {
    const squaredTable = table.map(value => {
        return Math.pow(value, 2);
    });
    return squaredTable;
};

const normalizeData = (table, maxValue, minValue) => {
    const range = maxValue - minValue;

    const normalizedTable = table.map(value => {
        return (value - minValue) / range;
    });
    return normalizedTable;
};

function createShapeFromData(
    data,
    subdivisions = 1,
    discreteCoefficient = 10,
    isAbsolute = false,
) {
    const widthSegments = data.length * Math.pow(2, subdivisions);
    const heightSegments = Math.floor(180 / discreteCoefficient) + 1;

    const geometry = new THREE.SphereGeometry(0, widthSegments, heightSegments - 1);

    const positionsOffset = geometry.getAttribute('position').array;

    let inlineTable = [];

    for (let table in data) {
        inlineTable.push(...data[table]);
    }

    // Находим радиус как минимальное значение из всех списков или 0
    // Опциональное поле baseSphereRadius, пользователь может задать
    const baseSphereRadius = Math.abs(Math.min(0, ...inlineTable));
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            data[i][j] += baseSphereRadius;
        }
    }

    // Добавляем первую меридиану в конец, чтобы конец интерполировался с началом
    data.push(data[0]);

    data = interpolateMatrixRows(data, heightSegments);

    const interpolatedData = transposeMatrix(
        interpolateMatrixRows(transposeMatrix(data), widthSegments),
    );

    // Перевод из логарифмической в абсолютную
    if (isAbsolute) {
        let maxValue = 0;
        let minValue;
        for (let i = 0; i < interpolatedData.length; i++) {
            for (let j = 0; j < interpolatedData[i].length; j++) {
                interpolatedData[i][j] -= baseSphereRadius;
            }

            // console.log(interpolatedData[i]);
            interpolatedData[i] = logPolarToPolar(interpolatedData[i]);
            maxValue = Math.max(...interpolatedData[i], maxValue);
            minValue = Math.min(...interpolatedData[i]);
        }

        // нормализируем данные
        for (let i = 0; i < interpolatedData.length; i++) {
            interpolatedData[i] = normalizeData(interpolatedData[i], maxValue, minValue);
        }

        //  возводим в квадрат те значения, которые получили при переводе в абсолютную шкалу после нормализации
        for (let i = 0; i < interpolatedData.length; i++) {
            interpolatedData[i] = squareData(interpolatedData[i]);
        }
    }

    const decData = offsetsToPoints(interpolatedData, heightSegments);

    transformGeometry(decData, positionsOffset, widthSegments);

    return geometry;
}

const logPolarToPolar = table => {
    const polarList = [];
    for (let i = 0; i < table.length; i++) {
        polarList.push(Math.exp(table[i]));
    }
    return polarList;
};

const calculateTriangleArea = (p1, p2, p3) => {
    const a = new THREE.Vector3().subVectors(p2, p1);
    const b = new THREE.Vector3().subVectors(p3, p1);
    const c = new THREE.Vector3().crossVectors(a, b);
    return c.length() / 2;
};

const calculateGeometryArea = geometry => {
    const index = geometry.index;
    const positions = geometry.getAttribute('position');
    let area = 0;

    for (let i = 0; i < index.count; i += 3) {
        const index1 = index.getX(i);
        const index2 = index.getY(i);
        const index3 = index.getZ(i);
        const p1 = new THREE.Vector3(
            positions.getX(index1),
            positions.getY(index1),
            positions.getZ(index1),
        );
        const p2 = new THREE.Vector3(
            positions.getX(index2),
            positions.getY(index2),
            positions.getZ(index2),
        );
        const p3 = new THREE.Vector3(
            positions.getX(index3),
            positions.getY(index3),
            positions.getZ(index3),
        );
        const triangleArea = calculateTriangleArea(p1, p2, p3);
        area += triangleArea;
    }
    return area;
};

const calculateScaleFactor = (sensitivity, power, area) => {
    const maxArea = power / sensitivity;

    return Math.sqrt(maxArea / area);
};

const scaleGeometry = (geometry, scaleFactor) => {
    const positions = geometry.getAttribute('position').array;

    for (let i = 0; i < positions.length; i += 3) {
        positions[i] *= scaleFactor;
        positions[i + 1] *= scaleFactor;
        positions[i + 2] *= scaleFactor;
    }
};

const initTables = tables => {
    let length = 0;
    let minNumber = 0;

    let inlineTable = [];

    for (let table in tables) {
        inlineTable.push(...tables[table]);
    }

    minNumber = Math.min(0, ...inlineTable);

    for (let i = 0; i < tables.length; i++) {
        if (length < tables[i].length) {
            length = tables[i].length;
        }
    }

    let resultTables = [];
    for (let i = 0; i < tables.length; i++) {
        resultTables[i] = new Float32Array(length);
        for (let j = 0; j < length; j++) {
            resultTables[i][j] = j < tables[i].length ? tables[i][j] : minNumber;
        }
    }

    return resultTables;
};

export const createDiagram = (data, type = 'log') => {
    const discreteCoefficient = 4;
    let geometry;

    data = initTables(data);

    // Входные данные - not required
    const sensitivity = 0.015;
    const power = 1;

    const subdivisions = 4;
    const gradient = ['#ff0000', '#00ff00', '#0000ff'];

    switch (type) {
        case 'log':
            geometry = createShapeFromData(
                data,
                subdivisions,
                discreteCoefficient,
                false,
            );
            paintGradient(geometry, gradient);

            break;
        case 'absolute':
            geometry = createShapeFromData(data, subdivisions, discreteCoefficient, true);
            paintGradient(geometry, gradient);

            break;
        case 'scale':
            if (sensitivity > 0 && power > 0) {
                geometry = createShapeFromData(
                    data,
                    subdivisions,
                    discreteCoefficient,
                    true,
                );
                let area = calculateGeometryArea(geometry);

                const scaleFactor = calculateScaleFactor(sensitivity, power, area);
                scaleGeometry(geometry, scaleFactor);
                area = calculateGeometryArea(geometry);

                paintGradient(geometry, gradient);
            }
            break;
        default:
            break;
    }

    return geometry;
};
