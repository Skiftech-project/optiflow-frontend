import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import { AppContainer } from './components/interface';
import { Preloader } from './components/ui';
import store, { persistor } from './core/store';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading={<Preloader />} persistor={persistor}>
            <AppContainer />
        </PersistGate>
    </Provider>,
);
