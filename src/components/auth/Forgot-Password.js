import React, { useState } from "react";
import { Form, Message, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

import ForgotPassword from "../../assets/images/ForgotPassword.png";

const ForgotPW = () => {
  const { register, handleSubmit, errors } = useForm();
  const [message, setMessage] = useState(true);

  const onSubmit = (data) => {
    axios
      .post(`${process.env.REACT_APP_BE_URL}/auth/forgot`, data)
      .then((res) => {
        console.log(res);
        setMessage(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-center">
          <img
            className="w-32 pb-12 m-auto tablet:w-48 desktop:w-64"
            src={ForgotPassword}
          />
          <h1 className="text-gray-700 font-semi-bold">
            Forgot Your Password?
          </h1>
          <h2>That's okay, it happens!</h2>
          <h3>
            Please enter your email below to proceed with reseting your email.
          </h3>
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

            <button
              type="submit"
              className="w-full h-10 px-8 mt-4 font-semibold tracking-wider text-white border rounded shadow-lg tablet:w-2/5 bg-hive hover:bg-orange-500"
            >
              Submit
            </button>
            <button
              type="back"
              className="w-full h-10 px-4 mt-8 font-semibold text-gray-700 bg-gray-300 border rounded shadow-lg tablet:mt-4 hover:bg-gray-400 tablet:w-2/5 tablet:ml-6"
            >
              <Link to={"/signin"} className="hover:text-gray-800">Back</Link>
            </button>
            <Message
              success={message}
              header="Please check your email!"
              content="If the email you've entered is associated with an account, you will be receiving an email to reset your password shortly."
            />
          </Form>
        </div>
      </div>
    </>
  );
};

export default ForgotPW;
