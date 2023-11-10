import Header from '../simple/Header/Header';
import Footer from '../simple/Footer/Footer';
import FirstModule from '../smart/FirstModule/FirstModule';
import TitleBlock from '../simple/TitleBlock/TitleBlock';
import styles from './App.module.css';

const App = () => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <TitleBlock text="Калькулятор розрахунку області передачі даних в оптичних системах" />
                <FirstModule />
            </main>
            <Footer />
        </>
    );
};

export default App;
