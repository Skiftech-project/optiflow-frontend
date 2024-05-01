import { Suspense } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';

import AppRoutes from './routes';
import { Header } from './components/interface';
import { Spinner } from './components/ui';
import { lightTheme } from './core/themes';

const App = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Router>
                <Header />
                <Container maxWidth="xl" component="main">
                    <Suspense fallback={<Spinner />}>
                        <AppRoutes />
                    </Suspense>
                </Container>
            </Router>
        </ThemeProvider>
    );
};

export default App;
