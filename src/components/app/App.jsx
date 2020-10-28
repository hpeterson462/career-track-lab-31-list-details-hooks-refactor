import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import CharacterDetailPage from '../../pages/CharacterDetailPage';
import CharacterPage from '../../pages/CharacterPage';

export default function App() {
  return (
    <Router>
      <header>
        <Link to="/">Home</Link>
      </header>
      <Switch>
        <Route exact path="/" component={CharacterPage} />
        <Route exact path="/characters/:name" component={CharacterDetailPage} />
      </Switch>
    </Router>
  );
}
