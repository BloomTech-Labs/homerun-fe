const intialState = {
  loading: false,
  userInfo: {},
  userChild: {}
}

const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {...state, userInfo: action.payload, loading: false };

    case "SET_CHILD": 
      return { ...state, userChild: action.payload, loading: false };
      
    default:
      return state;
  }
};

export default userReducer;
