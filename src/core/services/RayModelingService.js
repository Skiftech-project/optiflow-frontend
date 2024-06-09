import * as THREE from 'three';
import { CSG } from 'three-csg-ts';

export default class RayModelingService {
    static createCone = (xRadius, yRadius, maxDistance) => {
        const coneRadius = Math.max(xRadius, yRadius);
        let coneGeometry = new THREE.ConeGeometry(coneRadius, maxDistance, 32);

        let cone = new THREE.Mesh(coneGeometry);

        const smallerRadius = Math.min(xRadius, yRadius);
        if (smallerRadius == yRadius) {
            cone.scale.z = smallerRadius / coneRadius;
        } else if (smallerRadius == xRadius) {
            cone.scale.x = smallerRadius / coneRadius;
        }

        cone.position.set(0, maxDistance / 2, 0);

        return cone;
    };

    static createSphere = (radius, maxDistance) => {
        let sphereGeometry = new THREE.SphereGeometry(radius, 32, 32);

        const sphere = new THREE.Mesh(sphereGeometry);
        sphere.position.set(0, maxDistance, 0);

        return sphere;
    };

    static createPyramid = (rectWidth, rectHeight, maxDistance) => {
        // Create the vertices of the triangle
        const height = maxDistance;
        const vertices = new Float32Array([
            0,
            height,
            0, // Vertex A
            -rectWidth / 2,
            0,
            -rectHeight / 2, // Vertex B
            -rectWidth / 2,
            0,
            rectHeight / 2, // Vertex C
            rectWidth / 2,
            0,
            rectHeight / 2, // Vertex D
            rectWidth / 2,
            0,
            -rectHeight / 2, // Vertex D
        ]);

        // Create indexes to define the faces of the pyramid
        const indices = new Uint32Array([
            0, 1, 2, 0, 2, 3, 0, 3, 4, 0, 4, 1, 3, 2, 1, 4, 3, 1,
        ]);

        // Create a buffer geometry
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        geometry.setIndex(new THREE.BufferAttribute(indices, 1));
        geometry.scale(1, 1, 1);
        geometry.computeVertexNormals();

        const pyramid = new THREE.Mesh(geometry);

        return pyramid;
    };

    static createIntersection = (cone, sphere, choice) => {
        let interRes;

        if (choice == 'intersect') {
            interRes = CSG.intersect(cone, sphere);
        } else if (choice == 'subtract') {
            interRes = CSG.subtract(cone, sphere);
        }

        return interRes;
    };

    static createIntersectionMesh = (data = {}, shapeType = 'ellipse') => {
        const { max_distance, min_distance, plume_height, plume_width } = data;
        let baseShape = undefined;

        if (shapeType === 'ellipse') {
            baseShape = RayModelingService.createCone(
                plume_width,
                plume_height,
                max_distance,
            );
        } else if (shapeType === 'rectangle') {
            baseShape = RayModelingService.createPyramid(
                plume_width,
                plume_height,
                max_distance,
            );
        } else {
            return baseShape;
        }

        const maxSphere = RayModelingService.createSphere(max_distance, max_distance);

        maxSphere.updateMatrix();
        baseShape.updateMatrix();

        let interModel1 = RayModelingService.createIntersection(
            baseShape,
            maxSphere,
            'intersect',
        );
        let minSphere = RayModelingService.createSphere(min_distance, max_distance);

        interModel1.updateMatrix();
        minSphere.updateMatrix();

        let model = RayModelingService.createIntersection(
            interModel1,
            minSphere,
            'subtract',
        );
        model.rotation.x = Math.PI / 2;
        model.rotation.z = Math.PI / 2;

        if (shapeType === 'ellipse') {
            model.position.y = 0;
            model.position.x = 0;
        } else if (shapeType === 'rectangle') {
            model.position.y = 0;
            model.position.x = max_distance / 2;
        }

        return model;
    };
}
