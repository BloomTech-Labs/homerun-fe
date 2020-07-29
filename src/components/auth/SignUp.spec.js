import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import SignUp from './SignUp';
import { Provider } from 'react-redux';
import configRedux from '../../configRedux';

const store = configRedux();

afterAll(cleanup);

describe('signup render test', () => {
  it('header class test', () => {
    const { getByTestId } = render(
      <Router>
        <Provider store={store}>
          <SignUp />
        </Provider>
      </Router>
    );
    expect(getByTestId('header-test')).toHaveClass(
      'text-3xl text-gray-700 text-l bold mobile:text-4xl tablet:text-4xl'
    );
  });
  it('signup for account class test', () => {
    const { getByTestId } = render(
      <Router>
        <Provider store={store}>
          <SignUp />
        </Provider>
      </Router>
    );
    expect(getByTestId('sfa-test')).toHaveClass(
      'text-xl text-gray-600 mobile:text-2xl tablet:text-2xl'
    );
  });
  it('already have account class test', () => {
    const { getByTestId } = render(
      <Router>
        <Provider store={store}>
          <SignUp />
        </Provider>
      </Router>
    );
    expect(getByTestId('aha-test')).toHaveClass(
      'py-4 text-sm text-gray-700 phone:text-base'
    );
  });
});

describe('signup functionality test', () => {
  it('changing email values', () => {
    const { getByTestId } = render(
      <Router>
        <Provider store={store}>
          <SignUp />
        </Provider>
      </Router>
    );
    const emailInput = getByTestId('email');
    fireEvent.change(emailInput, {
      target: { value: 'tidyhivelife@gmail.com' },
    });
    expect(emailInput.value).toBe('tidyhivelife@gmail.com');
  });
});
