import React, { useState } from 'react';
import { Loader, Dimmer } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import 'mutationobserver-shim';
import { useDispatch } from 'react-redux';
import actions from '../../actions';
import { configConsumerProps } from 'antd/lib/config-provider';

const SignUp = (props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const [credentialsSent, setCredentialsSent] = useState('');
  const { hash } = useParams();

  const onSubmit = (data, e) => {
    const newData = {
      username: data.username,
      confirmation_id: hash,
      password: data.password,
    };
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(`${process.env.REACT_APP_BE_URL}/auth/confirm`, newData)
      .then((res) => {
        setIsLoading(false);
        localStorage.setItem('token', res.data.token);
        dispatch(actions.user.setUser(res.data));
        props.history.push('/dashboard');
      })
      .catch((err) => {
        console.log('error', err);
        setCredentialsSent('failure');
        setIsLoading(false);
      });
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center h-full">
        <div className="py-4 mt-4 text-center">
          <h2
            className="text-3xl text-gray-700 text-l bold mobile:text-4xl tablet:text-4xl"
            data-testid="header-test"
          >
            Your account is almost ready!
          </h2>
          <p
            className="mt-2 text-xl text-gray-600 mobile:text-2xl tablet:text-2xl"
            data-testid="sfa-test"
          >
            Choose your username and password
          </p>
        </div>
        <div className="max-w-lg phone:w-4/5">
          {isLoading ? (
            <Dimmer active inverted>
              <Loader size="large">Loading</Loader>
            </Dimmer>
          ) : (
            <Form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <div>
                {credentialsSent === 'failure' ? (
                  <div className="mb-12 text-center">
                    <h3 className="mb-2 text-lg text-red-700 mobile:text-2xl">
                      There was an error creating your account
                    </h3>
                    <p className="m-auto text-base text-red-600 tablet:w-4/5">
                      Please ensure the data you have provided is correct.
                    </p>
                  </div>
                ) : null}
              </div>
              <Form.Field>
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  data-testid="username"
                  type="text"
                  placeholder="Username"
                  name="username"
                  ref={register({
                    required: 'Username is required.',
                    minLength: {
                      value: 3,
                      message: 'Username must be at least 3 characters long.',
                    },
                  })}
                />
                {errors.username && <p>{errors.username.message}</p>}
              </Form.Field>
              <Form.Field>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  data-testid="password"
                  type="password"
                  placeholder="Password"
                  name="password"
                  ref={register({
                    required: 'Password is required.',
                    minLength: {
                      value: 7,
                      message: 'Password must be at least 7 characters long.',
                    },
                  })}
                />
                {errors.password && <p>{errors.password.message}</p>}
              </Form.Field>
              <Form.Field>
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  id="confirm-password"
                  data-testid="confirm-password"
                  type="password"
                  placeholder="Password"
                  name="confirm-password"
                  ref={register({
                    required: 'Password is required.',
                    minLength: {
                      value: 7,
                      message: 'Password must be at least 7 characters long.',
                    },
                  })}
                />
                {errors.password && <p>{errors.password.message}</p>}
              </Form.Field>
              <div className="flex justify-center mt-5">
                <button
                  type="submit"
                  className="w-full h-10 px-4 mt-5 font-semibold tracking-wider text-white border rounded shadow-lg bg-hive hover:bg-orange-500 tablet:w-2/5"
                  data-testid="submit-signup"
                >
                  Submit
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
