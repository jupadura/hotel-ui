import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import App from './app';
import configureStore from "./app/state"
import style from './styles.scss';

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

ReactDOM.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
