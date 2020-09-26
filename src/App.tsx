import React from 'react';
import AppHeader from '@Components/AppHeader/AppHeader';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app pt-60">
          <AppHeader />
          <h1>Say meow</h1>
          <Switch>
            <Route path="/about">
              about
            </Route>
            <Route path="/">
              home
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}