import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ControlTodo from './ControlTodo';
import { Provider } from 'react-redux';
import configRedux from '../../../configRedux';
import { BrowserRouter as Router } from 'react-router-dom';

const store = configRedux();

describe('Dashboard tests', () => {
  it('renders successfully', () => {
    render(
      <Router>
        <Provider store={store}>
          <ControlTodo />
        </Provider>
      </Router>
    );
  });
  it('Displays proper title for form', () => {
    const { getByText } = render(
      <Router>
        <Provider store={store}>
          <ControlTodo />
        </Provider>
      </Router>
    );

    fireEvent.click(getByText('Todo'));

    expect(getByText('Add a New Todo')).toBeInTheDocument();
  });
  it('Displays proper title for form', () => {
    const { getByText } = render(
      <Router>
        <Provider store={store}>
          <ControlTodo />
        </Provider>
      </Router>
    );

    expect(getByText('Todo')).toBeInTheDocument();
  });
});
