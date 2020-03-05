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
import Household from '../components/household/Household';

//Forgot Password component
import ForgotPW from '../components/auth/Forgot-Password';

//Reset Password component
import ResetPW from "../components/auth/Reset-Password";

import Auth from "../components/auth/Auth";
import ConfirmAcct from "../components/auth/Confirm-Account";

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

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignInLanding} />
        <Route path="/signin/email" component={SignInEmail} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgot-password" component={ForgotPW} />
        <Route path="/reset-password/:id" component={ResetPW} />
        <Route path="confirm-account/:id" component={ConfirmAcct} />
        <Route path="/auth" component={Auth} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/household" component={Household} />
      </Switch>
    </div>
  );
};

export default Routes;