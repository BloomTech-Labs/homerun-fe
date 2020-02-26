import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard.js';

// Home component is where the beginning of the app starts
import Home from './components/marketing/Home.js';

import "semantic-ui-css/semantic.min.css";
import ReactGA from "react-ga";



function initializeAnalytics (){

  ReactGA.initialize("UA-150184896-3");
  ReactGA.pageview('/SignUp');
}



function App() {
  initializeAnalytics()
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/email/signup" component={SignUp} /> 
        <Route path="/dashboard" component={Dashboard} /> 
      </Switch>
    </div>
  );
}

export default App; 
