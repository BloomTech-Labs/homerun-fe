import {
  ADD_CHILD,
  FETCH_MEMBERS_SUCCESS,
} from '../actions/houseHoldActions.js';
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

  it('should handle ADD_CHILD action', () => {
    const actionPayload = {
      id: 5,
      username: 'new child',
      points: null,
      child: true,
      household_id: '4cfd47',
    };
    expect(
      householdReducer(initialState, {
        type: ADD_CHILD,
        payload: actionPayload,
      })
    ).toEqual({
      ...initialState,
      members: [
        {
          id: 5,
          username: 'new child',
          points: null,
          child: true,
          household_id: '4cfd47',
        },
      ],
    });
  });

  it('should handle the FETCH_MEMBERS_SUCCESS action', () => {
    const actionPayload = [
      {
        id: 3,
        username: 'Micah',
        email: 'micah@testing.com',
        points: null,
      },
      {
        id: 5,
        username: 'new child',
        points: null,
        child: true,
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
        {
          id: 5,
          username: 'new child',
          points: null,
          child: true,
        },
      ],
      error: '',
      loading: false,
    });
  });
});
