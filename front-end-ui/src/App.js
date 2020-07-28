import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/HomePage'
import CharactersContainer from './Containers/CharactersContainer'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          
          <Route path="/characters">
            <CharactersContainer/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
