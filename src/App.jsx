import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { Preloader } from './components/ui';
import { AuthProvider } from './core/context/authContext';
import { lightTheme } from './core/themes';
import AppRoutes from './routes';

const App = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
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
