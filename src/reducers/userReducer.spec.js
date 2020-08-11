import userReducer from './userReducer.js';

const initialState = {
  userInfo: {},
  loading: false,
};

describe('user reducer', () => {
  it('should return the inital state', () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_USER action', () => {
    const actionPayload = {
      member_id: 3,
      points: null,
      token: 'Ah74kdlsfhjdkslkjdfshjksdasdfasdfas',
      username: 'Micah',
    };
    expect(
      userReducer(initialState, { type: 'SET_USER', payload: actionPayload })
    ).toEqual({
      ...initialState,
      userInfo: {
        member_id: 3,
        points: null,
        token: 'Ah74kdlsfhjdkslkjdfshjksdasdfasdfas',
        username: 'Micah',
      },
    });
  });
});
