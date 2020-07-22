import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Divider, Loader, Dimmer } from 'semantic-ui-react';
import { Form } from 'semantic-ui-react';
import useForm from "./useForm.js";
import validate from "./validate.js";
import axios from 'axios';
import 'mutationobserver-shim';

const SignUp = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { handleChange, handleSubmit, data, errors } = useForm(onSubmit, validate);
  const [emailSent, setEmailSent] = useState('');
  const [emailName, setEmailName] = useState('');

  function onSubmit() {
    console.log(data);
    setIsLoading(true);
    axios
      .post(`${process.env.REACT_APP_BE_URL}/auth/signup`, data)
      .then((res) => {
        setEmailName(data.email);
        setEmailSent('success');
        setIsLoading(false);
      })
      .catch((err) => {
        setEmailName(data.email);
        setEmailSent('failure');
        setIsLoading(false);
      });
  };

  const googleAuth = () => {
    window.location = `${process.env.REACT_APP_BE_URL}/connect/google`;
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center h-full">
        <div className="py-4 mt-4 text-center">
          <h2
            className="text-3xl text-gray-700 text-l bold mobile:text-4xl tablet:text-4xl"
            data-testid="header-test"
          >
            Welcome to <span className="text-hive">TidyHive!</span>
          </h2>
          <p
            className="text-xl text-gray-600 mobile:text-2xl tablet:text-2xl"
            data-testid="sfa-test"
          >
            Sign up for an account
          </p>
        </div>
        <div className="max-w-lg phone:w-4/5">
          {isLoading ? (
            <Dimmer active inverted>
              <Loader size="large">Loading</Loader>
            </Dimmer>
          ) : (
            <Form className="w-full" onSubmit={handleSubmit} noValidate>
              <div>
                {emailSent === 'success' ? (
                  <div className="mb-12 text-center">
                    <h3 className="mb-2 text-base text-green-700 tablet:text-xl">
                      A verification pin has been sent to {emailName}
                    </h3>
                    <p className="w-5/6 m-auto text-base text-green-600 tablet:text-base">
                      Please provide the pin sent to your email to continue the
                      registration process.
                    </p>
                  </div>
                ) : null}
              </div>
              <div>
                {emailSent === 'failure' ? (
                  <div className="mb-12 text-center">
                    <h3 className="mb-2 text-lg text-red-700 mobile:text-2xl">
                      There was an error sending a verification email to{' '}
                      {emailName}
                    </h3>
                    <p className="m-auto text-base text-red-600 tablet:w-4/5">
                      Please ensure the email address you have provided is
                      unique and legitimate.
                    </p>
                  </div>
                ) : null}
              </div>

              {emailSent === 'success' ? (
                <div>
                  <Form.Field>
                    <label>Verification PIN</label>
                    <input
                      data-testid="pin"
                      type="text"
                      placeholder="PIN"
                      name="pin"
                      value={data.pin}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <div className="flex flex-wrap tablet:justify-center tablet:flex-no-wrap">
                    <button
                      type="submit"
                      className="w-full h-10 px-8 mt-4 font-semibold tracking-wider text-white border rounded shadow-lg tablet:w-2/5 bg-hive hover:bg-orange-500"
                    >
                      Submit
                    </button>
                    <button
                      className="w-full h-10 px-4 mt-8 font-semibold text-gray-700 bg-gray-300 border rounded shadow-lg tablet:mt-4 hover:bg-gray-400 tablet:w-2/5 tablet:ml-6"
                      onClick={() => setEmailSent('')}
                    >
                      Back
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <Form.Field>
                    <label>Username</label>
                    <input
                      data-testid="username"
                      type="text"
                      placeholder="Username"
                      name="username"
                      value={data.username}
                      onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username.message}</p>}
                  </Form.Field>
                  <Form.Field>
                    <label>Email</label>
                    <input
                      data-testid="email"
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p className="text-red-700">{errors.email}</p>}
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                    <input
                      data-testid="password"
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={data.password}
                      onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                  </Form.Field>
                </div>
              )}

              {emailSent === 'success' ? null : (
                <div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="w-full h-10 px-4 mt-4 font-semibold tracking-wider text-white border rounded shadow-lg bg-hive hover:bg-orange-500 tablet:w-2/5"
                      data-testid="submit-signup"
                    >
                      Submit
                    </button>
                  </div>
                  <div className="mt-4 text-center">
                    <p
                      className="py-4 text-sm text-gray-700 phone:text-base"
                      data-testid="aha-test"
                    >
                      Already have an account?{' '}
                      <Link
                        className="text-sm font-semibold text-hive hover:text-orange-500 phone:text-base"
                        to="/signin"
                      >
                        Sign In
                      </Link>
                    </p>
                    <Divider className="py-4" horizontal>
                      OR
                    </Divider>
                  </div>
                  <div className="flex justify-center py-4">
                    <button
                      onClick={googleAuth}
                      className="w-full h-10 px-2 font-semibold tracking-wider text-white border rounded shadow-lg bg-hive hover:bg-orange-500 tablet:w-1/2"
                    >
                      <i className="ui icon google white"></i>
                      Sign in with Google
                    </button>
                  </div>
                </div>
              )}
            </Form>
          )}
        </div>
      </section>
    </>
  );
};

export default SignUp;
