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
import axios from "axios";

const SignUp = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("https://stage-homerun-be.herokuapp.com/auth/signup", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/dashboard");
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value})
  }

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
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <label>Username</label>
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={credentials.username}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
              />
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
        <Button icon>
          <Icon name="google" />
          &nbsp;&nbsp;&nbsp;Sign up with Google
        </Button>
        <p>
          Already have an account? <a href="/signin">Sign In</a>
        </p>
      </div>
    </Container>
  );
};

export default SignUp;
