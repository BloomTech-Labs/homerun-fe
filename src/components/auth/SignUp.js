import React, { useState } from "react";
import { Header, Divider, Container, Loader, Dimmer } from "semantic-ui-react";
import SidebarMarketing from "../marketing/Sidebar-Marketing.js";
import Navigation from "../marketing/Navigation";
import Footer from "../marketing/Footer";
import SignUpForm from "./SignUpForm";

const SignUp = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const googleAuth = () => {
    window.location = `${process.env.REACT_APP_BE_URL}/connect/google`;
  };

  return (
    <>
      <SidebarMarketing />
      <Navigation />
      <Container text>
        <div align="center">
          <Header as="div" icon>
            Welcome to TidyHive!
            <Header.Subheader>Sign up for an account.</Header.Subheader>
          </Header>
        </div>
        <div>
          {isLoading ? (
            <Dimmer active inverted>
              <Loader size="large">Loading</Loader>
            </Dimmer>
          ) : (
            <SignUpForm setIsLoading={setIsLoading} />
          )}
        </div>
        <p>
          Already have an account? <a href="/signin">Sign In</a>.
        </p>
        <Divider horizontal>OR</Divider>
        <div align="center">
          <button onClick={googleAuth} className="ui button blue">
            <i className="ui icon google white"></i>
            Sign in with Google
          </button>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default SignUp;
