import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignUp from './components/auth/SignUp';

// Home component is where the beginning of the app starts
import Home from './components/marketing/Home.js';

import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/email/signup" component={SignUp} /> 
      </Switch>
    </div>
  );
}

export default App; 
