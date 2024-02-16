import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header, Footer } from '../interface';
import { Spinner } from '../ui';

const CalculatorPage = lazy(() => import('components/pages/CalculatorPage'));
const RayPage = lazy(() => import('components/pages/RayPage'));
const NotFoundPage = lazy(() => import('components/pages/NotFoundPage'));

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <main>
                    <Suspense fallback={<Spinner />}>
                        <Routes>
                            <Route path="/" element={<CalculatorPage />} />
                            <Route path="/ray" element={<RayPage />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </Suspense>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
