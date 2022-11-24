import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'remixicon/fonts/remixicon.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/styles/style.scss";

import {Provider} from 'react-redux'
import {applyMiddleware, legacy_createStore as createStore} from 'redux'
import thunk from "redux-thunk";
import reducer from './store/reducers'

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer, applyMiddleware(thunk));

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
