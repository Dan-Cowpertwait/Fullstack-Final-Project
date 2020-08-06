import React from 'react';
// import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
import CharactersContainer from './containers/CharactersContainer'
import CharacterFormContainer from './containers/CharacterFormContainer'
import Weapons from './components/Weapons'
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar/>
        <Switch>
          <Route exact path="/home">
            <HomePage/>
          </Route>
          
          <Route exact path="/characters">
            <CharactersContainer/>
          </Route>

          <Route path="/character/:id" component={CharacterFormContainer} />
          <Route path="/characters/new" component={CharacterFormContainer} />

          <Route path="/weapons" component={Weapons} />


        </Switch>
      </div>
    </Router>
  );
}

export default App;
