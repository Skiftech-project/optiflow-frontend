import { Html, useProgress } from '@react-three/drei';

import './CanvasLoader.css';

const styles = {
    fontSize: 14,
    color: '#1e55b3',
    fontWeight: 800,
    marginTop: 40,
};

const CanvasLoader = () => {
    const { progress } = useProgress();
    return (
        <Html>
            <span className="canvas-load"></span>
            <p style={styles}>{progress.toFixed(2)}%</p>
        </Html>
    );
};

export default CanvasLoader;
