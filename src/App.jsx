import { Suspense, lazy } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';

import { Header } from './components/interface';
import { Spinner } from './components/ui';
import { lightTheme } from './core/themes';

const MainPage = lazy(() => import('components/pages/MainPage'));
const CalculatorPage = lazy(() => import('components/pages/CalculatorPage'));
const RayPage = lazy(() => import('components/pages/RayPage'));
const NotFoundPage = lazy(() => import('components/pages/NotFoundPage'));

const App = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Router>
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
            </Router>
        </ThemeProvider>
    );
};

export default App;
