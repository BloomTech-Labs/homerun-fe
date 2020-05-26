import axiosWithAuth from "../utils/AxiosWithAuth";

export const LOADING = "LOADING";
export const FETCH_MEMBERS_SUCCESS = "FETCH_MEMBERS_SUCCESS";
export const ERROR = "ERROR";
export const ADD_CHILD = "ADD_CHILD";
export const INVITE_MEMBER = "INVITE_MEMBER";

// Action Creators
const fetchHousehold = () => (dispatch) => {
  dispatch({ type: LOADING });
  axiosWithAuth()
    .get("/members/household/assignable")
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: FETCH_MEMBERS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ERROR,
        payload: err.response.data.message || err,
      });
    });
};

const addChild = (data) => (dispatch) => {
  dispatch({ type: LOADING });
  axiosWithAuth()
    .post("/members/household/children", data)
    .then((res) => {
      dispatch({
        type: ADD_CHILD,
        payload: res.data[0],
      });
    })
    .catch((err) => {
      dispatch({
        type: ERROR,
        payload: err.response.data.message || err,
      });
    });
};

// setModal is the function that turns the invite user modal on or off - it takes a boolean value as its argument
const inviteMember = (data, setModal) => (dispatch) => {
  dispatch({ type: LOADING });
  axiosWithAuth()
    .post("/members/household/invite", data)
    .then((res) => {
      setModal(false);
    })
    .catch((err) => {
      dispatch({ type: ERROR, payload: err.response.data.message || err });
    });
};

export default {
  fetchHousehold,
  addChild,
  inviteMember,
};
