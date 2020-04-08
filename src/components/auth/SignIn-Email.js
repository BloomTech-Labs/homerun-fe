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
import { useDispatch } from "react-redux";
import actions from "../../actions";

const SignInEmail = props => {
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = data => {
    setIsLoading(true);
    axios
      .post(`${process.env.REACT_APP_BE_URL}/auth/login`, data)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("member_id", res.data.member_id);
        dispatch(actions.user.setUser(res.data));
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
