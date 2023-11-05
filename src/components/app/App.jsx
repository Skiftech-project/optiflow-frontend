import Header from '../simple/Header/Header';
import Footer from '../simple/Footer/Footer';
import FirstModule from '../smart/FirstModule/FirstModule';
import './App.css';

const App = () => {
    return (
        <>
            <Header />
            <main className="main">
                <div className="container">
                    <FirstModule />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default App;
