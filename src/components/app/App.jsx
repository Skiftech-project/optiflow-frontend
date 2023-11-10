import Header from '../simple/Header/Header';
import Footer from '../simple/Footer/Footer';
import FirstModule from '../smart/FirstModule/FirstModule';
import SecondModule from '../smart/SecondModule/SecondModule';
import ThirdModule from '../smart/ThirdModule/ThirdModule';
import './App.css';

const App = () => {
    return (
        <>
            <Header />
            <main className="main">
                <div className="container">
                    <FirstModule />
                    <SecondModule />
                    <ThirdModule />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default App;
