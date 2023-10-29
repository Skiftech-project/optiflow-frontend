import axios from 'axios';
import Header from '../simple/Header/Header';
import Footer from '../simple/Footer/Footer';
import FirstModule from '../smart/FirstModule/FirstModule';
import OutputBlock from '../smart/OutputBlock/OutputBlock';
import './App.css';

const App = () => {
    async function fetchData() {
        const responce = await axios.get('http://127.0.0.1:5000/index');
        console.log(responce);
    }
    return (
        <>
            <Header />
            <main className="main">
                <FirstModule />
                <OutputBlock />
                <button onClick={fetchData}>Fetch Data</button>
            </main>
            <Footer />
        </>
    );
};

export default App;
