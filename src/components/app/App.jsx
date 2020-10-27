import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CharacterDetail from '../app/characters/CharacterDetail';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/characters/:id" component={CharacterDetail} />
      </Switch>
    </Router>
  );
}
