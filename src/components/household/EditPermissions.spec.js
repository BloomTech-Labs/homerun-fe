import EditPermissions from './EditPermissions';
import React from 'react';
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import configRedux from '../../configRedux';
import { saveState } from '../../utils/localStorage';

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

let mock_post = jest.fn(() => Promise.resolve());

jest.mock('axios', () => ({
  create: jest.fn(() => ({
    post: mock_post,
    get: jest.fn(),
  })),
  get: jest.fn(),
}));

const setModal = jest.fn();

const store = configRedux();
store.subscribe(() => {
  saveState(store.getState());
});

const memberToEdit = {
  id: 3,
  username: 'Daughter',
  permission_level: 2,
};

const user = {
  // technically only permission level is used here, but this provides us with context
  id: 2,
  username: 'Dad',
  permission_level: 3,
};

afterAll(cleanup);

beforeAll(() => {
  store.dispatch({ type: 'SET_USER', payload: user });
});

describe('EditPermissions modal', () => {
  it('Utilizes username and permission info from the memberToEdit prop', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <EditPermissions memberToEdit={memberToEdit} />
      </Provider>
    );

    let username = getByTestId('username');
    let permissionLevel = getByTestId('permissionLevel');
    expect(username.textContent.includes(memberToEdit.username)).toBeTruthy();
    expect(permissionLevel.textContent.includes('Level ' + memberToEdit.permission_level)).toBeTruthy();
  });

  it('Uses correct permission level range', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <EditPermissions memberToEdit={memberToEdit} />
      </Provider>
    );

    let input = getByTestId('permissionInput');
    expect(Number(input.min)).toBe(1);
    expect(Number(input.max)).toBe(user.permission_level - 1);
  });

  it("Doesn't call axios if the input is invalid", async () => {
    const { getByTestId, container } = render(
      <Provider store={store}>
        <EditPermissions memberToEdit={memberToEdit} setModal={setModal} />
      </Provider>
    );

    let input = getByTestId('permissionInput');
    let form = container.querySelector('form');
    fireEvent.change(input, { target: { value: '2.5' } });
    await act(async () => fireEvent.submit(form));
    expect(input.value).toBe('2.5');
    expect(mock_post).toBeCalledTimes(0);
  });

  it('Calls axios when the input is valid', async () => {
    const { getByTestId, container } = render(
      <Provider store={store}>
        <EditPermissions memberToEdit={memberToEdit} setModal={setModal} />
      </Provider>
    );

    let input = getByTestId('permissionInput');
    let form = container.querySelector('form');
    fireEvent.change(input, { target: { value: '2' } });
    await act(async () => fireEvent.submit(form));
    expect(mock_post).toBeCalledTimes(1);
  });
});