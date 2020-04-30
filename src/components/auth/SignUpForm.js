import React from "react";
import { Form } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import axios from "axios";

const SignUpForm = ({ setIsLoading }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);
    axios
      .post(`${process.env.REACT_APP_BE_URL}/auth/signup`, data)
      .then((res) => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Field>
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          ref={register({ required: "Username is required." })}
        />
        {errors.username && <p>{errors.username.message}</p>}
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          ref={register({ required: "Email is required." })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          ref={register({
            required: "Password is required.",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long.",
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </Form.Field>
      <button type="submit" className="ui button blue">
        Submit
      </button>
    </Form>
  );
};

export default SignUpForm;
