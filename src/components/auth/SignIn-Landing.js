import React from 'react';
import { Button } from 'semantic-ui-react';

const SignInLanding = () => {
  return (
    <div>
      <Button icon>
        <Icon name="google" />
        &nbsp;&nbsp;&nbsp;Sign in with Google
      </Button>
      <Button>Sign in with Email</Button>
      <p>Don't have an account? <a href="">Sign Up</a></p>
    </div>
  );
}

export default SignInLanding;