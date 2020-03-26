import React, { useState, useEffect } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import { Loader, Dimmer } from "semantic-ui-react";
import queryString from "query-string";
import { useDispatch } from "react-redux";
import actions from "../../actions";

const Auth = () => {
  const { token } = useParams();
  const location = useLocation();
  const query = queryString.parse(location.search);
  let history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("token", query.token);
    dispatch(actions.user.setUser(query));
    history.push("/household");
  }, []);

  return (
    <Dimmer active inverted>
      <Loader size="large">Loading</Loader>
    </Dimmer>
  );
};

export default Auth;
