const initialState = {
  user: {
    member_id: null,
    username: "",
    points: null
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
