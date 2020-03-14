import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router";
import axios from "axios";
import { Loader, Dimmer } from "semantic-ui-react";

const Auth = () => {
const { token } = useParams();
const { history } = useHistory();

useEffect(() => {
  localStorage.setItem("token", token);
  history.push('/household');
}, [])
  return(
  <Dimmer active inverted>
    <Loader size="large">Loading</Loader>
  </Dimmer>
  )
}

export default Auth;