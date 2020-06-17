import React from 'react';
import { render } from '@testing-library/react';
import Account from './Account';
import { Provider } from 'react-redux';
import configRedux from '../../configRedux';

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

const store = configRedux();

describe('Account unit tests', () => {
  it('renders without error', () => {
    render(
      <Provider store={store}>
        <Account />
      </Provider>
    );
  });
  it('contains proper class on container div', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Account />
      </Provider>
    );
    expect(getByTestId('container').className).toBe('account container');
  });
});
