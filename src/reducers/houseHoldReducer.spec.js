import { FETCH_MEMBERS_SUCCESS } from '../actions/houseHoldActions.js';
import householdReducer from './houseHoldReducer.js';

const initialState = {
  members: [],
  error: '',
  loading: false,
};

describe('household reducer', () => {
  it('should return the inital state', () => {
    expect(householdReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle the FETCH_MEMBERS_SUCCESS action', () => {
    const actionPayload = [
      {
        id: 3,
        username: 'Micah',
        email: 'micah@testing.com',
        points: null,
      },
    ];
    expect(
      householdReducer(initialState, {
        type: FETCH_MEMBERS_SUCCESS,
        payload: actionPayload,
      })
    ).toEqual({
      members: [
        {
          id: 3,
          username: 'Micah',
          email: 'micah@testing.com',
          points: null,
        },
      ],
      error: '',
      loading: false,
    });
  });
});
