import Header from '../simple/Header/Header';
import Footer from '../simple/Footer/Footer';
import FirstModule from '../smart/FirstModule/FirstModule';
import OutputBlock from '../smart/OutputBlock/OutputBlock';
import './App.css';

const App = () => {
    return (
        <>
            <Header />
            <main className="main">
                <FirstModule />
                <OutputBlock />
            </main>
            <Footer />
        </>
    );
};

export default App;
