import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import InviteConfirm from './InviteConfirm';
import { Provider } from 'react-redux';
import configRedux from '../../configRedux';

afterAll(cleanup);
const store = configRedux();

describe('signin functionality test', () => {
  it('changing email values', () => {
    const { getByTestId } = render(
      <Router>
        <Provider store={store}>
          <InviteConfirm />
        </Provider>
      </Router>
    );
    const emailInput = getByTestId('email');
    fireEvent.change(emailInput, { target: { value: 'test-1' } });
    expect(emailInput.value).toBe('test-1');
  });
  it('changing password values', () => {
    const { getByTestId } = render(
      <Router>
        <Provider store={store}>
          <InviteConfirm />
        </Provider>
      </Router>
    );
    const passwordInput = getByTestId('password');
    fireEvent.change(passwordInput, { target: { value: 'test-2' } });
    expect(passwordInput.value).toBe('test-2');
  });
});