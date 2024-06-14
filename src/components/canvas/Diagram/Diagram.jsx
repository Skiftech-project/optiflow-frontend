/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from 'react';

import {
    Bounds,
    OrbitControls,
    PerspectiveCamera,
    Preload,
    useBounds,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { createDiagram } from 'src/core/services';

const data = [
    [
        0, -0.3, -0.4, -1.5, -1.7, -2, -2.5, -2.6, -3.4, -5, -6, -8, -9, -10.8, -12.6,
        -14.5, -16.7, -20, -24.5, -30, -33, -25, -28, -24.5, -22.5, -24.5, -23.3, -25,
        -26.3, -29, -33.4, -23, -23, -22.3, -25, -32, -33,
    ],
    [
        0, -0.05, -0.8, -2.5, -5, -7.6, -11.3, -17, -26, -23, -22, -22, -21.5, -22.5, -22,
        -25, -24.5, -23.5, -24, -22.5, -23, -22, -24, -26, -22, -25, -29, -34, -28.4,
        -28.4, -27.5, -31, -26, -24, -20, -22, -26,
    ],
    [
        0, -0.05, -0.2, -0.7, -1.7, -2.5, -3.3, -3.5, -5, -5.4, -5.5, -6, -7.5, -8.33,
        -9.5, -11, -11.7, -12, -15, -16.7, -16.7, -20, -19, -16.7, -18.3, -23.3, -30,
        -23.8, -20, -24, -23.3, -32.5, -27.5, -28.5, -33.5, -31, -33,
    ],
    [
        0, -0.8, -2, -4, -6.7, -10, -14.5, -20, -21.6, -24, -24, -23.3, -24, -23, -23.5,
        -23.6, -30, -30.8, -34.5, -32.5, -27.5, -28.3, -31.3, -33, -30, -26, -25, -22.5,
        -21.6, -25, -28, -27, -31, -29, -26.7, -26, -34.5,
    ],
];

const Diagram = () => {
    const [geometry, setGeometry] = useState(null);
    const bounds = useBounds();

    useEffect(() => {
        setGeometry(createDiagram(data, 'log'));
    }, []);

    useEffect(() => {
        bounds.moveTo([50, 0, 50]);
    }, [geometry]);

    return (
        <>
            {geometry ? (
                <mesh geometry={geometry}>
                    <meshMatcapMaterial flatShading vertexColors />
                </mesh>
            ) : null}
        </>
    );
};

const DiagramCanvas = () => {
    return (
        <Canvas>
            <Suspense>
                <OrbitControls />
                <PerspectiveCamera />
                <Bounds>
                    <Diagram />
                </Bounds>
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default DiagramCanvas;
