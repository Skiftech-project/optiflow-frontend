import { Suspense, lazy } from 'react';
import { Preloader } from 'src/components/ui';

const App = lazy(() => import('src/App'));

const AppLoader = () => {
    return (
        <Suspense fallback={<Preloader />}>
            <App />
        </Suspense>
    );
};

export default AppLoader;
