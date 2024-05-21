import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { Preloader } from './components/ui';
import { lightTheme } from './core/themes';
import AppRoutes from './routes';

const App = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Router>
                <Suspense fallback={<Preloader />}>
                    <AppRoutes />
                </Suspense>
            </Router>
        </ThemeProvider>
    );
};

export default App;
