import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Sign up component with form for email and gmail button
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard.js';

// Sign in landing page with two buttons email/gmail
import SignInLanding from './components/auth/SignIn-Landing';

// Component for email sign in
import SignInEmail from './components/auth/SignIn-Email';

// Home component is where the beginning of the app starts
import Home from './components/marketing/Home.js';

//Adding and deleting members
import Household from './components/household/Household';

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
        <Route exact path="/signin" component={SignInLanding} />
        <Route path="/signin/email" component={SignInEmail} />
        <Route path="/signup" component={SignUp} /> 
        <Route path="/dashboard" component={Dashboard} /> 
        <Route path="/household" component={Household} />
      </Switch>
    </div>
  );
}

export default App; 
