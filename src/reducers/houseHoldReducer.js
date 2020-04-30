import { ERROR, FETCH_MEMBERS_SUCCESS, LOADING, ADD_CHILD } from '../actions/houseHoldActions.js';

const initialState = {
      members: [],
      error: '',
      loading: false
  };
  
  const houseHoldReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
            ...state,
            error: '',
            loading: true
            }
        case FETCH_MEMBERS_SUCCESS:
            return {
                ...state,
                error: '',
                loading: false,
                members: action.payload
            }
        case ADD_CHILD:
            return {
                ...state,
                error: '',
                members: [...state.members, action.payload]

            }
        case ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            } 
      default:
        return state;
    }
  };
  
  export default houseHoldReducer;
  