import React from "react";
import { Button, Icon, Header, Divider, Form, Container } from "semantic-ui-react";

const SignUp = () => {
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
        <Form>
          <Form.Field>
            <label>Username</label>
            <input 
              type="text"
              placeholder="Username" 
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input 
              type="email"
              placeholder="Email" 
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input 
              type="password"
              placeholder="Password" 
            />
          </Form.Field>
          <Form.Field>
            <label>Repeat Password</label>
            <input 
              type="password"
              placeholder="Repeat Password" 
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
      <Divider horizontal>OR</Divider>
      <div align="center">
        <Button icon>
          <Icon name="google" />
          &nbsp;&nbsp;&nbsp;Sign up with Google
        </Button>
      </div>
    </Container>
  );
};

export default SignUp;