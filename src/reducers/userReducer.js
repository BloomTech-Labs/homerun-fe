const intialState = {
  loading: false,
  userInfo: {}
}

const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {...state, userInfo: action.payload };
    default:
      return state;
  }
};

export default userReducer;
