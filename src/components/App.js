import React from 'react';

import '../App.css';
import Nav from './nav';
import Home from './home';
import Review from './review';
import About from './about';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/review" component={Review} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
