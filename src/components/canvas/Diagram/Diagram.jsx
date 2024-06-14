/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
    Bounds,
    OrbitControls,
    PerspectiveCamera,
    Preload,
    useBounds,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import PropTypes from 'prop-types';

import { createDiagram } from 'src/core/services';

const Diagram = ({ sensitivity, discrette, power, type }) => {
    const [geometry, setGeometry] = useState(null);
    const bounds = useBounds();
    const diagram = useSelector(state => state.diagram?.data);

    useEffect(() => {
        if (!diagram) return;
        setGeometry(createDiagram(diagram.data, type, discrette, sensitivity, power));
    }, [diagram, sensitivity, power, discrette, type]);

    useEffect(() => {
        if (type === 'log') {
            bounds.moveTo([50, 0, 50]);
        } else {
            bounds.moveTo([1, 0, 1]);
        }
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

const DiagramCanvas = ({ ...props }) => {
    return (
        <Canvas>
            <Suspense>
                <OrbitControls />
                <PerspectiveCamera />
                <Bounds>
                    <Diagram {...props} />
                </Bounds>
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

Diagram.propTypes = {
    sensitivity: PropTypes.number.isRequired,
    discrette: PropTypes.number.isRequired,
    power: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['log', 'absolute', 'scale']).isRequired,
};

export default DiagramCanvas;
