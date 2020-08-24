import React from 'react';
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import configRedux from '../../../configRedux';
import { saveState } from '../../../utils/localStorage';
import Todo from './Todo';
import 'jest-canvas-mock';

// mock window.matchMedia for an antd component
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const store = configRedux();
store.subscribe(() => {
  saveState(store.getState());
});

// technically only permission level is used here, but this provides us with context
const dad = {
  id: 2,
  username: 'Dad',
  permission_level: 3,
}

const daughter = {
  id: 3,
  username: 'Daughter',
  permission_level: 2,
}

const son = {
  id: 4,
  username: 'Son',
  permission_level: 1,
};

afterAll(cleanup);

describe('Todo conditional rendering', () => {
  it("Doesn't have any editing buttons for a level 1 user", () => {
    store.dispatch({ type: 'SET_USER', payload: son });
    const { queryByTestId } = render(
      <Provider store={store}>
        <Todo id={1} assigned={[]} completed={false} />
      </Provider>
    );

    expect(queryByTestId('iconEdit')).toBeFalsy();
    expect(queryByTestId('iconAssign')).toBeFalsy();
    expect(queryByTestId('iconChangeDate')).toBeFalsy();
  });

  it('Has an assign button for a level 2 user', () => {
    store.dispatch({ type: 'SET_USER', payload: daughter });
    const { queryByTestId } = render(
      <Provider store={store}>
        <Todo id={1} assigned={[]} completed={false} />
      </Provider>
    );

    expect(queryByTestId('iconEdit')).toBeFalsy();
    expect(queryByTestId('iconAssign')).toBeTruthy();
    expect(queryByTestId('iconChangeDate')).toBeFalsy();
  });

  it('Has all 3 buttons for a level 3 user', () => {
    store.dispatch({ type: 'SET_USER', payload: dad });
    const { queryByTestId } = render(
      <Provider store={store}>
        <Todo id={1} assigned={[]} completed={false} />
      </Provider>
    );

    expect(queryByTestId('iconEdit')).toBeTruthy();
    expect(queryByTestId('iconAssign')).toBeTruthy();
    expect(queryByTestId('iconChangeDate')).toBeTruthy();
  });
});