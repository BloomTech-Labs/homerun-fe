import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Divider, Form, Loader, Dimmer } from 'semantic-ui-react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import actions from '../../actions';
import 'mutationobserver-shim';
import { GoogleLogin } from 'react-google-login';

const SignInLanding = (props) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (data) => {
    setIsLoading(true);
    setError('');
    // clear local storage before signing in to prevent bugs
    localStorage.clear();
    axios
      .post(`${process.env.REACT_APP_BE_URL}/auth/login`, data)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        dispatch(actions.user.setUser(res.data));
        props.history.push('/dashboard');
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setError('Incorrect email or password. Please try again!');
      });
  };

  const response = (res) => {
    setIsLoading(true);
    try {
      axios
        .post(`${process.env.REACT_APP_BE_URL}/auth/google`, {
          token: res.tokenObj.id_token,
          email: res.profileObj.email,
        })
        .then((res) => {
          if (res.data.token) {
            console.log('inside the supposed login');
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('google', true);
            dispatch(actions.user.setUser(res.data));
            props.history.push('/dashboard');
          } else {
            console.log(res.data);
            props.history.push(`/confirm/${res.data.response.id}`);
          }
        })
        .catch((err) => console.log('err', err));
      console.log(res);
    } catch (err) {
      setIsLoading(false);
    }
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
        {error ? <span role="alert">{error}</span> : null}
        <div className="max-w-lg phone:w-4/5">
          {isLoading ? (
            <Dimmer active inverted>
              <Loader size="large">Loading</Loader>
            </Dimmer>
          ) : (
            <Form
              className="w-full"
              onSubmit={() => {
                onSubmit(form);
              }}
            >
              <Form.Field>
                <label htmlFor="name">Email</label>
                <input
                  value={form.email}
                  onChange={handleChange}
                  data-testid="email"
                  type="email"
                  placeholder="Email"
                  required
                  aria-required
                  name="email"
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  value={form.password}
                  onChange={handleChange}
                  data-testid="password"
                  type="password"
                  required
                  aria-required
                  placeholder="Password"
                  name="password"
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
                  onClick={() => props.history.push('/forgot-password')}
                >
                  Forgot Password
                </button>
              </div>
              <div className="mt-4 text-center">
                <p className="py-4 text-sm text-gray-700 phone:text-base">
                  Don&apos;t have an account?{' '}
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
                <GoogleLogin
                  clientId={`${process.env.REACT_APP_G_CLIENT_ID}`}
                  buttonText="Login"
                  onSuccess={response}
                  onFailure={response}
                  render={(renderProps) => (
                    <button
                      className="w-full h-10 px-2 font-semibold tracking-wider text-white border rounded shadow-lg bg-hive hover:bg-orange-500 tablet:w-1/2"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      <i className="ui icon google white"></i>
                      Sign in with Google
                    </button>
                  )}
                ></GoogleLogin>
              </div>
            </Form>
          )}
        </div>
      </section>
    </>
  );
};

export default SignInLanding;
