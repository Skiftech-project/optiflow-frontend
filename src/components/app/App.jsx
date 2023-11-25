import { Routes, Route } from 'react-router-dom';

import Header from '../simple/Header/Header';
import Footer from '../simple/Footer/Footer';
import VisualCalculatorPage from '../../pages/VisualCalculatorPage/VisualCalculatorPage';
import CalculatorPage from '../../pages/CalculatorPage/CalculatorPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import MainPage from '../../pages/MainPage/MainPage';
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage';

import styles from './App.module.css';

const App = () => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Routes>
                    <Route
                        path="/"
                        element={<CalculatorPage />}
                    />
                    <Route
                        path="/visual"
                        element={<VisualCalculatorPage />}
                    />
                    <Route
                        path="/main"
                        element={<MainPage />}
                    />
                    <Route
                        path="/about"
                        element={<AboutUsPage />}
                    />
                    <Route
                        path="*"
                        element={<NotFoundPage />}
                    />
                </Routes>
            </main>
            <Footer />
        </>
    );
};

export default App;
