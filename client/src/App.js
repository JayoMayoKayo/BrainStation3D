import React from 'react';
import NavBar from './component/NavBar/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Card from './component/Card/Card.js';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Card} />
          <Route exact path='/graph-1' component={Card} />
          <Route exact path='/graph-2' component={Card} />
          <Route exact path='/graph-3' component={Card} />
          <Route exact path='/graph-4' component={Card} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
