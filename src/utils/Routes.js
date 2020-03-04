import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Sign up component with form for email and gmail button
import SignUp from "../components/auth/SignUp";
import Dashboard from "../components/dashboard/Dashboard.js";

// Sign in landing page with two buttons email/gmail
import SignInLanding from "../components/auth/SignIn-Landing";

// Component for email sign in
import SignInEmail from "../components/auth/SignIn-Email";

// Home component is where the beginning of the app starts
import Home from "../components/marketing/Home.js";

// Household component
import Household from '../components/household/Household'

// Header
import Header from '../components/header/Header.js';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);
// Header component needs to render on multiple routes and since the Switch already has a dashboard route and household route
// the header component needs to render outside the switch
const Routes = () => {
  return (
    <div>
      <PrivateRoute path={['/dashboard', '/household']} component={Header} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignInLanding} />
        <Route path="/signin/email" component={SignInEmail} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/household" component={Household} />
      </Switch>
    </div>
  );
};

export default Routes;