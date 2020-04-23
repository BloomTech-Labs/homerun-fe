import React, { useState } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import axios from 'axios';

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
    <div>
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
          <Button type="submit">Submit</Button>
          <Message
            success={message}
            header="Form Completed"
            content="If the email you've entered is associated with an account, you will be receiving an email to reset your password shortly."
          />
        </Form.Field>
      </Form>
    </div>
  );
}

export default ForgotPW;