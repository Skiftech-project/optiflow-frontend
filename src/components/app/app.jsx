import { Component } from 'react';

import Header from '../simple/Header/Header';
import Footer from '../simple/Footer/Footer';
import FirstModule from '../smart/FirstModule/FirstModule';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wrapper">
                <Header />
                <main className="main">
                    <FirstModule />
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
