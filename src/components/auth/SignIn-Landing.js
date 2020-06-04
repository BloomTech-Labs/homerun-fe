import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Divider, Form, Loader, Dimmer } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch } from "react-redux";
import actions from "../../actions";

const googleAuth = () => {
  window.location = `${process.env.REACT_APP_BE_URL}/connect/google`;
};

const SignInLanding = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    setIsLoading(true);
    // clear local storage before signing in to prevent bugs
    localStorage.clear();
    axios
      .post(`${process.env.REACT_APP_BE_URL}/auth/login`, data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch(actions.user.setUser(res.data));
        props.history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center h-full">
        <div className="py-4 mt-4 text-center">
          <h2 className="text-3xl text-gray-700 tablet:text-4xl text-l bold mobile:text-4xl">
            Welcome to <span className="text-hive">TidyHive!</span>
          </h2>
          <p className="text-xl text-gray-600 tablet:text-2xl mobile:text-2xl">
            Sign in to access your account
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
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  ref={register({ required: "Email is invalid." })}
                />
                {errors.username && <p>{errors.username.message}</p>}
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  ref={register({ required: "Password is required." })}
                />
                {errors.email && <p>{errors.email.message}</p>}
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
                  onClick={() => props.history.push("/forgot-password")}
                >
                  Forgot Password
                </button>
              </div>
              <div className="mt-4 text-center">
                <p className="py-4 text-sm text-gray-700 phone:text-base">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-sm font-semibold text-hive hover:text-orange-500 phone:text-base"
                  >
                    Sign Up
                  </Link>
                </p>
                <Divider horizontal className="py-4">
                  OR
                </Divider>
              </div>
              <div className="flex justify-center py-4">
                <button
                  onClick={googleAuth}
                  className="w-full h-10 font-semibold tracking-wider text-white border rounded shadow-lg tablet:w-1/2 bg-hive hover:bg-orange-500"
                >
                  <i className="ui icon google white" />
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

export default SignInLanding;
