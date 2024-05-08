import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { AppContainer } from './components/interface';
import store from './core/store';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
);
