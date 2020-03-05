import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const SignInLanding = props => {
  const googleAuth = () => {
    window.open("https://stage-homerun-be.herokuapp.com/connect/google");
  };
  return (
    <div>
      <Button onClick={googleAuth} icon>
        <Icon name="google" />
        &nbsp;&nbsp;&nbsp;Sign in with Google
      </Button>
      <br />
      <br />
      <Button onClick={() => props.history.push("/signin/email")}>
        Sign in with Email
      </Button>
      <br />
      <br />
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
}

export default SignInLanding;