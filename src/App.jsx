import { Suspense } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import AppRoutes from './routes';
import { Preloader } from './components/ui';
import { lightTheme } from './core/themes';
import { AuthProvider } from './core/context/authContext';

const App = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <AuthProvider>
                <Router>
                    <Suspense fallback={<Preloader />}>
                        <AppRoutes />
                    </Suspense>
                </Router>
            </AuthProvider>
        </ThemeProvider>
    );
};

export default App;
