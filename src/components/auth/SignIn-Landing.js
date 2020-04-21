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
import Navigation from '../marketing/Navigation';
import { useDispatch } from "react-redux";
import actions from "../../actions";



const SignInLanding= props => {
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = data => {
    const googleAuth = () => {
      window.location = `${process.env.REACT_APP_BE_URL}/connect/google`;
    };
    setIsLoading(true);
    axios
      .post(`${process.env.REACT_APP_BE_URL}/auth/login`, data)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        dispatch(actions.user.setUser(res.data));
        props.history.push("/dashboard");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
    <Navigation />
    <Container text>
      <div align="center">
        <Header as="h2" icon>
          <Icon name="home" />
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
      
            <Button type="submit">Submit</Button>
            <Button onClick={() => props.history.push("/forgot-password")}>
        Forgot Password
      </Button>
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
          Dont have an account yet? <a href="/signup">Sign up here</a>
        </p>
      </div>
      
    </Container>
    </>
  );
};

export default SignInLanding;







































// import React from 'react';
// import { Button, Icon } from 'semantic-ui-react';
// import Navigation from '../marketing/Navigation';


// const SignInLanding = props => {
  const googleAuth = () => {
    window.location = `${process.env.REACT_APP_BE_URL}/connect/google`;
  };
//   return (
//     <div>
//     <Navigation />
//       <Button onClick={googleAuth} icon>
//         <Icon name="google" />
//         &nbsp;&nbsp;&nbsp;Sign in with Google
//       </Button>
//       <br />
//       <br />
//       <Button onClick={() => props.history.push("/signin/email")}>
//         Sign in with Email
//       </Button>
//       <br />
//       <br />
//       <p>
//         Don't have an account? <a href="/signin">Sign Up</a>
//       </p>
//     </div>
//   );
// };

// export default SignInLanding;
