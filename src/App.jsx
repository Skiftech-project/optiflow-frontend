import { Suspense } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import AppRoutes from './routes';
import { Preloader } from './components/ui';
import { lightTheme } from './core/themes';

const App = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Router>
                <Suspense fallback={<Preloader />}>
                    <AppRoutes />
                </Suspense>
            </Router>
        </ThemeProvider>
    );
};

export default App;
