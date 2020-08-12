const intialState = {
  userInfo: {},
  loading: false,
};

const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, userInfo: action.payload, loading: false };
    default:
      return state;
  }
};

export default userReducer;
