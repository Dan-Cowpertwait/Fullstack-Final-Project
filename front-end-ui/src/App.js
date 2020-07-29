import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
import CharactersContainer from './containers/CharactersContainer'
import CharacterFormContainer from './containers/CharacterFormContainer'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          
          <Route path="/characters">
            <CharactersContainer/>
          </Route>

          <Route path="/character/new">
            <CharacterFormContainer/>
          </Route>

          <Route path="/">
            <HomePage/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
