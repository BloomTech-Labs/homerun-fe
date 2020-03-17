import React, { useState } from "react";
import {
  Button,
  Icon,
  Header,
  Divider,
  Form,
  Container,
  Loader,
  Dimmer
} from "semantic-ui-react";
import { useForm } from 'react-hook-form';
import axios from "axios";

const SignUp = props => {
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = data => {
    setIsLoading(true);
    axios
      .post("https://stage-homerun-be.herokuapp.com/auth/signup", data)
      .then(res => {
        console.log('signup data', res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/dashboard");
      })
      .catch(err => {
        console.log(err);
      });
  };
  const googleAuth = () => {
    window.open("https://stage-homerun-be.herokuapp.com/connect/google");
  };

  return (
    <Container text>
      <div align="center">
        <Header as="h2" icon>
          <Icon name="home" />
          Welcome to TidyHive!
          <Header.Subheader>Sign up to get started.</Header.Subheader>
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
                    message: "Password must be at least 8 characters long."
                  }
                })}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </Form.Field>
            {/*<Form.Field>
              <label>Repeat Password</label>
              <input type="password" placeholder="Repeat Password" />
            </Form.Field>*/}
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </div>
      <Divider horizontal>OR</Divider>
      <div align="center">
        <Button onClick={googleAuth} icon>
          <Icon name="google" />
          &nbsp;&nbsp;&nbsp;Sign in with Google
        </Button>
        <p>
          Already have an account? <a href="/signin">Sign In</a>
        </p>
      </div>
    </Container>
  );
};

export default SignUp;
