import { Component } from 'react';

import Footer from '../ui/footer/footer';
import Header from '../ui/header/header';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Header />
                <main>BODY OF CALCULATOR</main>
                <Footer />
            </>
        );
    }
}

export default App;
