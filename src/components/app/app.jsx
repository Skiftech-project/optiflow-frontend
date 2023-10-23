import { Component } from 'react';

import Footer from '../simple/footer/footer';
import Header from '../simple/header/header';
import FirstModule from '../smart/first-module/first-module';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Header />
                <main>
                    BODY OF CALCULATOR
                    <FirstModule />
                </main>
                <Footer />
            </>
        );
    }
}

export default App;
