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
import axios from "axios";

const SignInEmail = props => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("https://stage-homerun-be.herokuapp.com/auth/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/dashboard");
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleChange = e => {
    e.preventDefault();
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
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
          <Form onSubmit={handleSubmit}>
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
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </div>
    </Container>
  );
};

export default SignInEmail;
