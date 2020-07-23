import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import SignUp from './SignUp';

afterAll(cleanup);

describe('signup render test', () => {
  it('header class test', () => {
    const { getByTestId } = render(
      <Router>
        <SignUp />
      </Router>
    );
    expect(getByTestId('header-test')).toHaveClass(
      'text-3xl text-gray-700 text-l bold mobile:text-4xl tablet:text-4xl'
    );
  });
  it('signup for account class test', () => {
    const { getByTestId } = render(
      <Router>
        <SignUp />
      </Router>
    );
    expect(getByTestId('sfa-test')).toHaveClass(
      'text-xl text-gray-600 mobile:text-2xl tablet:text-2xl'
    );
  });
  it('already have account class test', () => {
    const { getByTestId } = render(
      <Router>
        <SignUp />
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
        <SignUp />
      </Router>
    );
    const emailInput = getByTestId('email');
    fireEvent.change(emailInput, { target: { value: 'test-2' } });
    expect(emailInput.value).toBe('test-2');
  });
});
