import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import thunk from 'redux-thunk'
import './index.css';

//component imports
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from "redux";

//REDUCER IMPORT
import charactersReducer from './reducers/characters'


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(charactersReducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
  document.getElementById('root')
);

