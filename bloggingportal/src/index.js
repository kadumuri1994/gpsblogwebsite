import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import ConfigureStore from './redux/configureStore';
import { Provider as ReduxProvider } from 'react-redux';
import {loadState, saveState} from './localStorage'; 

const persistedState = loadState();

const store = ConfigureStore(persistedState);

store.subscribe(() => {
    saveState({
        userData: store.getState().userData
    });
})

ReactDOM.render(
    <ReduxProvider store={store}>
        <Router>
            <App />
        </Router>
    </ReduxProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
