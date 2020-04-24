import React, { useState } from 'react';
import { Form, Button, Message, Header, Icon, Modal, Container, Dimmer, Loader } from 'semantic-ui-react';
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';

import Navigation from '../marketing/Navigation';

const ForgotPW = () => {
  const { register, handleSubmit, errors } = useForm();
  const [message, setMessage] = useState(true);

  const onSubmit = data => {
    axios
      .post(`${process.env.REACT_APP_BE_URL}/auth/forgot`, data)
      .then(res => {
        console.log(res);
        setMessage(false)
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
          <Header.Subheader>Forgot Password</Header.Subheader>
        </Header>
      </div>
      <div>
        {/* {isLoading ? (
          <Dimmer active inverted>
            <Loader size="large">Loading</Loader>
          </Dimmer>
        ) : ( */}
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
           
      
            <Button type="submit">Submit</Button>
            <Button size="small" type="back"><Link to ={"/"}>Back</Link></Button>
          <Message
            success={message}
            header="Please check your email!"
            content="If the email you've entered is associated with an account, you will be receiving an email to reset your password shortly."
          />
          </Form>
        )}
      </div>
      
    </Container>
    </>
  );
};

export default ForgotPW;