import { RayCanvas } from '../canvas';
import { Header } from '../interface';
import { ErrorBoundary } from '../ui';

const RayPage = () => {
    return (
        <>
            <Header />
            <ErrorBoundary>
                <RayCanvas />
            </ErrorBoundary>
        </>
    );
};

export default RayPage;
