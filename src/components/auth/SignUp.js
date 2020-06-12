import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Divider, Loader, Dimmer } from "semantic-ui-react";
import { Form } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "mutationobserver-shim";

const SignUp = (props) => {
  const [isLoading, setIsLoading] = useState(false);
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
            <Form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <Form.Field>
                <label>Username</label>
                <input
                  data-testid="username"
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
                  data-testid="email"
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
                  data-testid="password"
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
                  Already have an account?{" "}
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
            </Form>
          )}
        </div>
      </section>
    </>
  );
};

export default SignUp;
