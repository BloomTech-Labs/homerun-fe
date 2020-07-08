const intialState = {
  emailPosted: '',
  userInfo: {},
  userChild: {},
  loading: false,
  childActive: false,
};

const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'HANDLE_EMAIL':
      return { ...state, emailPosted: action.payload };

    case 'SET_USER':
      return { ...state, userInfo: action.payload, loading: false };

    case 'SET_CHILD':
      return { ...state, userChild: action.payload, loading: false };

    case 'CHILD_ACTIVE':
      return { ...state, loading: false, childActive: action.payload };

    default:
      return state;
  }
};

export default userReducer;
