import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

// Redux
import configRedux from './configRedux.js'
import { Provider } from 'react-redux'
import { saveState } from './utils/localStorage.js';

import App from './App';
import * as serviceWorker from './serviceWorker';

// UI
import './SASS/GeneralStyles.scss';
import "semantic-ui-css/semantic.min.css";
import "react-datepicker/dist/react-datepicker.css";
import '@sandstreamdev/react-swipeable-list/dist/styles.css';

// Antd Imports
import 'antd/lib/grid/style/index.css'


const store = configRedux()
store.subscribe(() => {
    saveState(store.getState())
})

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
