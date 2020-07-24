import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link, Match } from 'react-router';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';



const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

ReactDOM.render(
    <Provider store={store}>
      <App />,
     </Provider>,
  document.getElementById('root')
);

