import React, { useState } from 'react';
import { Form, Message, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import ForgotPassword from '../../assets/images/ForgotPassword.png';

const ForgotPW = (props) => {
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
        <div className="w-full text-center">
          <img
            className="w-32 pb-12 pl-2 m-auto tablet:pl-4 tablet:w-48 tablet:pl-6"
            src={ForgotPassword}
          />
          <h1 className="mb-2 text-3xl text-gray-700 font-semi-bold tablet:text-4xl">
            Forgot Your Password?
          </h1>
          <h3 className="max-w-xs m-auto mt-6 text-xl tablet:text-2xl tablet:max-w-sm">
            Please enter your email below to proceed with reseting your email.
          </h3>
        </div>
        <div className="w-4/5 max-w-md">
          {/* {isLoading ? (
          <Dimmer active inverted>
            <Loader size="large">Loading</Loader>
          </Dimmer>
        ) : ( */}
          <Form className="w-full px-0" onSubmit={handleSubmit(onSubmit)}>
            <Form.Field>
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                ref={register({ required: 'Email is invalid.' })}
              />
              {errors.username && <p>{errors.username.message}</p>}
            </Form.Field>
            <div className="flex flex-wrap tablet:justify-center tablet:flex-no-wrap">
              <button
                type="submit"
                className="w-full h-10 mt-4 font-semibold tracking-wider text-white border rounded shadow-lg bg-hive hover:bg-orange-500 tablet:ml-6 tablet:mr-4"
              >
                Submit
              </button>
              <button
                type="back"
                className="w-full h-10 mt-8 font-semibold text-gray-700 bg-gray-300 border rounded shadow-lg tablet:mt-4 hover:bg-gray-400 tablet:mr-6 tablet:ml-4"
                onClick={() => props.history.push('/signin')}
              >
                Back
              </button>
            </div>
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
