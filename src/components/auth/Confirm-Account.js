import React from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const ConfirmAcct = props => {
  let { hash } = useParams();
  axios
    .post("https://stage-homerun-be.herokuapp.com/auth/confirm", hash)
    .then(res => {
      console.log(res);
      props.history.push("/signin/email");
    })
    .catch(err => {
      console.log(err);
    });

  return(
    <div>
    </div>
  )
}

export default ConfirmAcct;