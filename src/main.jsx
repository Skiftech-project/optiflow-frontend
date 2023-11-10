import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
import App from './components/app/App.jsx';
import './styles/index.css';

// const reducer = (state, action) => {
//     switch (action.type) {
//         default:
//             return state;
//     }
// };

// const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
