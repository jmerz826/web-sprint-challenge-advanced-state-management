import React from "react";
import { createStore, applyMiddleware } from "redux";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

import reducer from "./reducers";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import { Provider } from "react-redux";

const { worker } = require('./mocks/browser');
worker.start();

// Declare store
const store = createStore(reducer, applyMiddleware(thunk, logger));

const rootElement = document.getElementById("root");

ReactDOM.render(
    // App wrapped in Provider, passing in store to make the reducer and middleware (thunk and logger) available to all of App's components
    <Provider store={store}>
        <App />
    </Provider>, 
    rootElement
);

//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk and logger middleware support.
//3. Wrap the App component in a react-redux Provider element.