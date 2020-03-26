import { FETCH_MEMBERS_FAIL, FETCH_MEMBERS_SUCCESS, FETCH_MEMBERS_START } from '../actions/houseHoldActions.js';

const initialState = {
      members: [],
      error: '',
      loadingMembers: false
  };
  
  const houseHoldReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MEMBERS_START:
            return {
            ...state,
            error: '',
            loadingMembers: true
            }
        case FETCH_MEMBERS_SUCCESS:
            return {
                ...state,
                error: '',
                loadingMembers: false,
                members: action.payload
            }
        case FETCH_MEMBERS_FAIL:
            return {
                ...state,
                error: action.payload,
                loadingMembers: false
            } 
      default:
        return state;
    }
  };
  
  export default houseHoldReducer;
  