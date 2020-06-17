import Home from './Home';
import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';

afterAll(cleanup);

describe('home page button test', () => {
  it('clicking on signup for free button send users to /signup page', () => {
    const { getByTestId } = render(
      <Router>
        <Home />
      </Router>
    );
    const clicked = getByTestId('signup-button');
    fireEvent.click(clicked);

    const expected = '/signup';
    const path = global.window.location.pathname;
    expect(path).toEqual(expected);
  });
});

describe('home page render test', () => {
  it('Home page create todos text test', () => {
    const { getByTestId } = render(
      <Router>
        <Home />
      </Router>
    );
    expect(getByTestId('todos-test')).toHaveTextContent('Create Todos');
  });
  it('Home page assign members text test', () => {
    const { getByTestId } = render(
      <Router>
        <Home />
      </Router>
    );
    expect(getByTestId('members-test')).toHaveTextContent('Assign Members');
  });

  it('Home page complete tasks text test', () => {
    const { getByTestId } = render(
      <Router>
        <Home />
      </Router>
    );
    expect(getByTestId('task-test')).toHaveTextContent('Complete Tasks');
  });

  it('home page header class test', () => {
    const { getByTestId } = render(
      <Router>
        <Home />
      </Router>
    );
    expect(getByTestId('header-test')).toHaveClass(
      'w-full max-w-2xl text-3xl text-center phone: tablet:text-4xl desktop:text-5x desktop:text-left desktop:max-w-xl'
    );
  });
  it('home page content class test', () => {
    const { getByTestId } = render(
      <Router>
        <Home />
      </Router>
    );
    expect(getByTestId('content-test')).toHaveClass(
      'max-w-2xl text-2xl text-center tablet:text-3xl desktop:max-w-full desktop:px-16'
    );
  });
});
