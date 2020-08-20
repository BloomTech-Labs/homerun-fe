import React from 'react';
import { render, cleanup } from '@testing-library/react';
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
    const emailInput = getByTestId('permission-test');
    expect(emailInput).toBeVisible();
  });
});
