import React from 'react';
import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import SignUp from './SignUpPartTwo';
import { Provider } from 'react-redux';
import configRedux from '../../configRedux';

const store = configRedux();

// const mockLogin = jest.fn((username, password) => {
//   return Promise.resolve({ username, password });
// });

afterAll(cleanup);

describe('signup part two render test', () => {
  // beforeEach allows you to call a function before each test call.
  // In order to access the returned component, you call screen inside the test
  beforeEach(() => {
    render(
      <Router>
        <Provider store={store}>
          <SignUp />
        </Provider>
      </Router>
    );
  });
  it('render header component', () => {
    expect(screen.getByTestId('header-test')).toHaveTextContent(
      'Your account is almost ready!'
    );
  });
  it('render form component', () => {
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });
  it('change username value', () => {
    const username = screen.getByTestId('username');
    fireEvent.change(username, {
      target: { value: 'tidyhive' },
    });
    expect(username.value).toBe('tidyhive');
  });
});
