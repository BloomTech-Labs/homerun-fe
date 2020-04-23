import React from "react";
import { useParams } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import axios from "axios";

const ResetPW = props => {
  const { register, handleSubmit, errors } = useForm();

  let { hash } = useParams();

  const onSubmit = data => {
    axios
      .post(`${process.env.REACT_APP_BE_URL}/auth/reset`, {
        ...data,
        hash
      })
      .then(res => {
        props.history.push("/signin");
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
          <label>New Password</label>
          <input
            type="password"
            placeholder="New Password"
            name="password"
            ref={register({
              required: "New Password is required.",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long."
              }
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
          {/*<Form.Field>
              <label>Repeat Password</label>
              <input type="password" placeholder="Repeat Password" />
            </Form.Field>*/}
          <Button type="submit">Submit</Button>
        </Form.Field>
      </Form>
    </div>
  );
};

export default ResetPW;
