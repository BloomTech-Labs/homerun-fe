import axiosWithAuth from '../utils/AxiosWithAuth';

export const LOADING = 'LOADING';
export const FETCH_MEMBERS_SUCCESS = 'FETCH_MEMBERS_SUCCESS';
export const ERROR = 'ERROR';
export const ADD_CHILD = 'ADD_CHILD';

// Action Creators
const fetchHousehold = () => dispatch => {
     dispatch({ type: LOADING});
     axiosWithAuth().get('/members/household/assignable')
        .then(res => {
            console.log(res.data);
            dispatch({
                type: FETCH_MEMBERS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err
            })
        })
  };

  const addChild = (data) => dispatch => {
      dispatch({ type: LOADING })
    axiosWithAuth().post("/members/household/children", data)
    .then(res => {
      console.log(res);
      dispatch({ 
        type: ADD_CHILD,
        payload: res.data[0]
        })
    })
    .catch(err => {
        dispatch({
            type: ERROR,
            payload: err
        })
    })
  }
  
  export default {
    fetchHousehold,
    addChild
  };
  