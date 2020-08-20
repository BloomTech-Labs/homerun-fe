import userReducer from './userReducer.js';

const initialState = {
  id: null,
  username: null,
  permission_level: 1,
  loading: false,
};

describe('user reducer', () => {
  it('should return the inital state', () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_USER action', () => {
    const actionPayload = {
      id: 3,
      username: 'Micah',
      permission_level: 4,
    };
    expect(
      userReducer(initialState, { type: 'SET_USER', payload: actionPayload })
    ).toEqual({
      ...initialState,
      id: 3,
      username: 'Micah',
      permission_level: 4,
    });
  });
});
