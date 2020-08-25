const intialState = {
  id: null,
  username: null,
  permission_level: 1,
  loading: false,
};

const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        id: action.payload.id,
        username: action.payload.username,
        permission_level: action.payload.permission_level,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
