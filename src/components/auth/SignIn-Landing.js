import React, { useState } from "react";
import {
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
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import { useDispatch } from "react-redux";
import actions from "../../actions";

const googleAuth = () => {
  window.location = `${process.env.REACT_APP_BE_URL}/connect/google`;
};

const SignInLanding = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    setIsLoading(true);
    // clear local storage before signing in to prevent bugs
    localStorage.clear();
    axios
      .post(`${process.env.REACT_APP_BE_URL}/auth/login`, data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch(actions.user.setUser(res.data));
        props.history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <SidebarMarketing />
      <Navigation />
      <Container text className="sign-in-landing">
        <div align="center">
          <Header as="div" icon>
            Welcome to TidyHive!
            <Header.Subheader>Sign in to access your account</Header.Subheader>
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
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  ref={register({ required: "Email is invalid." })}
                />
                {errors.username && <p>{errors.username.message}</p>}
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  ref={register({ required: "Password is required." })}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </Form.Field>

              <button type="submit" className="ui button blue">
                Submit
              </button>
              <button
                className="ui button"
                onClick={() => props.history.push("/forgot-password")}
              >
                Forgot Password
              </button>
            </Form>
          )}
        </div>
        <p>
          Don't have an account? <a href="/signup">Sign Up</a>!
        </p>
        <Divider horizontal>OR</Divider>
        <div style={{ marginTop: "50px" }} align="center">
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

export default SignInLanding;
