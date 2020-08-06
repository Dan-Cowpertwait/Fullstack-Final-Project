import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
import CharactersContainer from './containers/CharactersContainer'
// import CharacterContainer from './containers/CharacterContainer'
import CharacterFormContainer from './containers/CharacterFormContainer'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          
          <Route exact path="/characters">
            <CharactersContainer/>
          </Route>

          <Route path="/character/:id" component={CharacterFormContainer} />
          <Route exact path="/characters/new" component={CharacterFormContainer} />


        </Switch>
      </div>
    </Router>
  );
}

export default App;
