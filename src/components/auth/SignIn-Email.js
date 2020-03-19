import React, { useState } from "react";
import {
  Button,
  Icon,
  Header,
  Form,
  Container,
  Loader,
  Dimmer
} from "semantic-ui-react";
import { useForm } from "react-hook-form";
import axios from "axios";

const SignInEmail = props => {
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = data => {
    setIsLoading(true);
    axios
      .post("https://stage-homerun-be.herokuapp.com/auth/login", data)
      .then(res => {
        console.log("res", res)
        localStorage.setItem("token", res.data.token);
        props.history.push("/dashboard");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Container text>
      <div align="center">
        <Header as="h2" icon>
          <Icon name="home" />
          Welcome to TidyHive!
          <Header.Subheader>Sign in to your account.</Header.Subheader>
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
              {errors.email && <p>{errors.email.message}</p>}
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                ref={register({ required: "Password is invalid." })}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </div>
      <Button onClick={() => props.history.push("/forgot-password")}>
        Forgot password
      </Button>
    </Container>
  );
};

export default SignInEmail;