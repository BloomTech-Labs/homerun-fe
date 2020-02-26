import React from "react";
import {
  Button,
  Icon,
  Header,
  Form,
  Container
} from "semantic-ui-react";

const SignInEmail = () => {
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
        <Form>
          <Form.Field>
            <label>Email</label>
            <input type="email" placeholder="Email" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </Container>
  );
};

export default SignInEmail;