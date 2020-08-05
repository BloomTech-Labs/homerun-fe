import React from 'react';
import { render, cleanup, act, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configRedux from '../../configRedux';
import { saveState } from '../../utils/localStorage';
import Header from './Header';
import TITLES from './HeaderTitles';
// import userActions from '../../actions/userActions';

let mock_path;
jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(() => ({ pathname: mock_path })),
  useHistory: jest.fn(() => ({
    push: jest.fn((hist) => {
      mock_path = hist;
    }),
  })),
}));

afterAll(cleanup);

describe('Header rendering', () => {
  // use the same store in each test. No need to copy paste every time
  const store = configRedux();
  store.subscribe(() => {
    saveState(store.getState());
  });

  it('Displays the right dashboard title when the path is /dashboard', () => {
    mock_path = '/dashboard';

    const title = render(
      <Provider store={store}>
        <Header />
      </Provider>
    ).getByTestId(/title/);

    expect(title.textContent).toBe(TITLES.DASHBOARD);
  });

  it('Displays the right household title when the path is /household', () => {
    mock_path = '/household';

    const title = render(
      <Provider store={store}>
        <Header />
      </Provider>
    ).getByTestId(/title/);

    expect(title.textContent).toBe(TITLES.HOUSEHOLD);
  });

  it('Displays the right account title when the path is /account', () => {
    mock_path = '/account';

    const title = render(
      <Provider store={store}>
        <Header />
      </Provider>
    ).getByTestId(/title/);

    expect(title.textContent).toBe(TITLES.ACCOUNT);
  });

  it("Doesn't show the sidebar by default", () => {
    const sidebar = render(
      <Provider store={store}>
        <Header />
      </Provider>
    ).getByTestId(/sidebar/);

    expect(sidebar.classList).not.toContain('visible');
  });
});
