import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import InviteMember from './InviteMember';
import { Provider } from 'react-redux';
import configRedux from '../../configRedux';

afterAll(cleanup);
const store = configRedux();

describe('InviteMember rendering', () => {
  it('email form test', () => {
    const { getByTestId } = render(
      <Router>
        <Provider store={store}>
          <InviteMember />
        </Provider>
      </Router>
    );
    const emailInput = getByTestId('email-test');
    expect(emailInput).toBeVisible();
  });
  it('permission level form test', () => {
    const { getByTestId } = render(
      <Router>
        <Provider store={store}>
          <InviteMember />
        </Provider>
      </Router>
    );
    const permissionInput = getByTestId('permission-test');
    expect(permissionInput).toBeVisible();
  });
});

describe('Invite Member functionality test', () => {
  it('changing email values', () => {
    const { getByTestId } = render(
      <Router>
        <Provider store={store}>
          <InviteMember />
        </Provider>
      </Router>
    );
    const emailInput = getByTestId('email-test');
    fireEvent.change(emailInput, { target: { value: 'test' } });
    expect(emailInput.value).toBe('test');
  });
  it('changing permission level values', () => {
    const { getByTestId } = render(
      <Router>
        <Provider store={store}>
          <InviteMember />
        </Provider>
      </Router>
    );
    const permissionInput = getByTestId('permission-test');
    fireEvent.change(permissionInput, { target: { value: '2' } });
    expect(permissionInput.value).toBe('2');
  });
});
