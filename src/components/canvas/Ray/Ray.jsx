/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { OrbitControls, PerspectiveCamera, Preload } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import PropTypes from 'prop-types';

import { Spinner } from 'src/components/ui';
import { RayModelingService } from 'src/core/services';

const Camera = () => {
    const { maxDistance } = useSelector(state => state.calc.calculations);
    const cameraPosition = [maxDistance || 3, 0, maxDistance || 3];
    return (
        <PerspectiveCamera
            makeDefault
            fov={75}
            aspect={window.innerWidth / window.innerHeight}
            near={0.1}
            far={1000}
            position={cameraPosition}
        />
    );
};

const Ray = ({ wireframe }) => {
    const calcs = useSelector(state => state.calc.calculations);
    const [mesh, setMesh] = useState(null);

    useEffect(() => {
        setMesh(RayModelingService.createIntersectionMesh(calcs, 'rectangle'));
    }, [calcs]);

    return (
        <>
            {mesh ? (
                <mesh
                    geometry={mesh.geometry}
                    position={mesh.position}
                    rotation={mesh.rotation}
                    scale={mesh.scale}
                >
                    {wireframe ? (
                        <meshBasicMaterial wireframe color="#7CA4E9" />
                    ) : (
                        <meshMatcapMaterial color="#7CA4E9" />
                    )}
                </mesh>
            ) : null}
        </>
    );
};

const RayCanvas = () => {
    return (
        <Canvas>
            <Suspense fallback={<Spinner />}>
                <OrbitControls />
                <Camera />
                <Ray />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

Ray.propTypes = {
    wireframe: PropTypes.bool,
};

export default RayCanvas;
