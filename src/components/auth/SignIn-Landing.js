import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const SignInLanding = () => {
  return (
    <div>
      <Button icon>
        <Icon name="google" />
        &nbsp;&nbsp;&nbsp;Sign in with Google
      </Button>
      <br />
      <br />
      <Button>Sign in with Email</Button>
      <br />
      <br />
      <p>
        Don't have an account? <a href="/signin/email">Sign Up</a>
      </p>
    </div>
  );
}

export default SignInLanding;