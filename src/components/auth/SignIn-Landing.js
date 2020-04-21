import React from 'react';
import { Button, Icon, Container } from 'semantic-ui-react';
import SidebarMarketing from '../marketing/Sidebar-Marketing.js'
import Navigation from '../marketing/Navigation';
import Footer from '../marketing/Footer';

const SignInLanding = props => {
  const googleAuth = () => {
    window.location = `${process.env.REACT_APP_BE_URL}/connect/google`;
  };
  return (
    <>
      <SidebarMarketing />
      <Navigation />
      <Container text className="sign-in-landing"> 
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
          Don't have an account? <a href="/signin">Sign Up</a>
        </p>
      </Container>
      <Footer />
    </>
  );
};

export default SignInLanding;
