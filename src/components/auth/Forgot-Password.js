import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const ForgotPW = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    axios
      .post("https://stage-homerun-be.herokuapp.com/auth/forgot", data)
      .then(res => {
        console.log(res);
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
        </Form.Field>
      </Form>
    </div>
  );
}

export default ForgotPW;