import React, { useState } from "react";
import { Dimmer, Loader, Button, Form, Container } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../actions";

const AccountForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const currentUser = useSelector((state) => state.user.userInfo);
  console.log(currentUser);
  const onSubmit = (values) => {};

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Field>
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={currentUser.username}
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
  );
};

export default AccountForm;
