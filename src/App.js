import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Sign up component with form for email and gmail button
import SignUp from './components/auth/SignUp';

//Sign in landing page with two buttons email/gmail
import SignInLanding from './components/auth/SignIn-Landing';

//Component for email sign in
import SignInEmail from './components/auth/SignIn-Email';

// Home component is where the beginning of the app starts
import Home from './components/marketing/Home.js';

import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignInLanding} />
        <Route path="/signin/email" component={SignInEmail} />
        <Route path="/signup" component={SignUp} /> 
      </Switch>
    </div>
  );
}

export default App; 
