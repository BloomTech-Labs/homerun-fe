import React, { useState } from "react";
import {
  Button,
  Icon,
  Header,
  Divider,
  Form,
  Container,
  Loader,
  Dimmer,
} from "semantic-ui-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import SidebarMarketing from "../marketing/Sidebar-Marketing.js";
import Navigation from "../marketing/Navigation";
import Footer from "../marketing/Footer";
import logo from "../../Logos/tidyhive-standalone.png";

const SignUp = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data) => {
    setIsLoading(true);
    axios
      .post(`${process.env.REACT_APP_BE_URL}/auth/signup`, data)
      .then((res) => {
        console.log("signup data", res);
        // have a popup telling the user email confirmation has been sent to them
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Field>
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  ref={register({ required: "Username is required." })}
                />
                {errors.username && <p>{errors.username.message}</p>}
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  ref={register({ required: "Email is required." })}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  ref={register({
                    required: "Password is required.",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long.",
                    },
                  })}
                />
                {errors.password && <p>{errors.password.message}</p>}
              </Form.Field>
              {/*<Form.Field>
              <label>Repeat Password</label>
              <input type="password" placeholder="Repeat Password" />
            </Form.Field>*/}
              <button type="submit" className="ui button blue">
                Submit
              </button>
            </Form>
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
