import axiosWithAuth from '../utils/AxiosWithAuth';

export const FETCH_MEMBERS_START = 'FETCH_MEMBERS_START';
export const FETCH_MEMBERS_SUCCESS = 'FETCH_MEMBERS_SUCCESS';
export const FETCH_MEMBERS_FAIL = 'FETCH_MEMBERS_FAIL';

// Action Creators
const fetchHousehold = () => dispatch => {
     dispatch({ type: FETCH_MEMBERS_START});
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
                type: FETCH_MEMBERS_FAIL,
                payload: err
            })
        })
  };
  
  export default {
    fetchHousehold
  };
  