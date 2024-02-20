import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';

import { Header } from '../interface';
import { Spinner } from '../ui';

const MainPage = lazy(() => import('components/pages/MainPage'));
const CalculatorPage = lazy(() => import('components/pages/CalculatorPage'));
const RayPage = lazy(() => import('components/pages/RayPage'));
const NotFoundPage = lazy(() => import('components/pages/NotFoundPage'));

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <Container maxWidth="xl" component="main">
                    <Suspense fallback={<Spinner />}>
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/calculator" element={<CalculatorPage />} />
                            <Route path="/ray" element={<RayPage />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </Suspense>
                </Container>
            </div>
        </BrowserRouter>
    );
};

export default App;
