import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Navigation from './Navigation';
import { BrowserRouter as Router } from 'react-router-dom';

afterAll(cleanup);

describe('isOpen state testing', () => {
  it('should contain class hidden by default', () => {
    const { getByTestId } = render(
      <Router>
        <Navigation />
      </Router>
    );

    expect(getByTestId('isOpen').classList.contains('hidden')).toBe(true);
  });
  it('should contain class block after button press', () => {
    const { getByTestId } = render(
      <Router>
        <Navigation />
      </Router>
    );

    fireEvent.click(getByTestId('nav-button'));

    expect(getByTestId('isOpen').classList.contains('hidden')).toBe(false);
  });
});

describe('Routes should point to correct route', () => {
  it('clicking on home button sends user to /', async () => {
    const { getByTestId } = render(
      <Router>
        <Navigation />
      </Router>
    );

    const clickedElement = getByTestId('home-link');
    fireEvent.click(clickedElement);

    const expectedPath = '/';
    const path = global.window.location.pathname;
    expect(path).toEqual(expectedPath);
  });
  it('clicking on about button sends user to /about', async () => {
    const { getByTestId } = render(
      <Router>
        <Navigation />
      </Router>
    );

    const clickedElement = getByTestId('about-link');
    fireEvent.click(clickedElement);

    const expectedPath = '/about';
    const path = global.window.location.pathname;
    expect(path).toEqual(expectedPath);
  });
  it('clicking on contact button sends user to /contact', async () => {
    const { getByTestId } = render(
      <Router>
        <Navigation />
      </Router>
    );

    const clickedElement = getByTestId('contact-link');
    fireEvent.click(clickedElement);

    const expectedPath = '/contact';
    const path = global.window.location.pathname;
    expect(path).toEqual(expectedPath);
  });
  it('clicking on signin button sends user to /signin', async () => {
    const { getByTestId } = render(
      <Router>
        <Navigation />
      </Router>
    );

    const clickedElement = getByTestId('signin-link');
    fireEvent.click(clickedElement);

    const expectedPath = '/signin';
    const path = global.window.location.pathname;
    expect(path).toEqual(expectedPath);
  });
});
