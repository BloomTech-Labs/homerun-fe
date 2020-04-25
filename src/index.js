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
import "react-datepicker/dist/react-datepicker.css";
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
// Semantic CSS
import "semantic-ui-css/semantic.min.css";
// Antd Imports
import 'antd/lib/grid/style/index.css'
import "antd/es/badge/style/css"
import "antd/lib/dropdown/style/index.css"
import 'antd/es/menu/style/css'
import 'antd/lib/menu/style/index.css'
import "antd/es/badge/style/css"
// Custom Styles
import "./scss/index.scss";
// Do not leave on
// import 'antd/dist/antd.css';
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