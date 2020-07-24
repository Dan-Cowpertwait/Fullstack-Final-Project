import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CharacterContainer from './containers/CharacterContainer';


class App extends Component() {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
              <Route exact path='/characters' component={CharacterContainer} />         
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
