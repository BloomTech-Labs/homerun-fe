// Testing for the Home Component here
import React from 'react';
import { render, fireEvent, waitFor, findByText } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import List from './List.js';
import { Provider } from 'react-redux';
import configRedux from '../../configRedux.js';

const store = configRedux();

describe('testing for List component', () => {
  describe('invite member btn', () => {
    it('should be visible when permission is high enough', () => {
      store.dispatch({type: "SET_USER", payload: {
        id: 0,
        username: "test_user",
        permission_level: 3,
      }});

      const { getByText } = render(
        <Provider store={store}>
          <List />
        </Provider>
      );

      const modalBtn = getByText(/Invite Member/i);
      expect(modalBtn).toBeVisible();
    });

    it('should NOT be present when permission is low enough', () => {
      store.dispatch({type: "SET_USER", payload: {
        id: 0,
        username: "test_user",
        permission_level: 2,
      }});

      const { queryByText } = render(
        <Provider store={store}>
          <List />
        </Provider>
      );

      expect(queryByText(/Invite Member/i)).toBeFalsy();
    });
  });
});
