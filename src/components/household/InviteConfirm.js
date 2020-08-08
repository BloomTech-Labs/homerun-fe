import React, { useEffect } from 'react';
import axiosWithAuth from '../../utils/AxiosWithAuth.js';
import { useParams, useHistory } from 'react-router-dom';
import SignInConfirmation from '../auth/SignIn-Confirmation.js';

export const InviteConfirm = () => {
  const { hash } = useParams();
  const history = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .post('/members/household/accept-invite', { hash })
      .then((res) => {
        localStorage.clear();
        localStorage.setItem('token', res.data.token);
        history.push('/household');
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <SignInConfirmation/>
  ) 
};
