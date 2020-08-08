import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../utils/AxiosWithAuth.js';
import { useParams, useHistory } from 'react-router-dom';
import { Loader, Dimmer } from 'semantic-ui-react';
import SignInConfirmation from '../auth/SignIn-Confirmation.js';

export const InviteConfirm = () => {
  const [loading, setLoading] = useState(true);
  const { hash } = useParams();
  const history = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .post('/members/household/accept-invite', { hash })
      .then((res) => {
        // clear the storage so we can start fresh
        localStorage.clear();
        // save the data for the user however we need it
        localStorage.setItem('token', res.data.token);

        // user should be directed to the household if they successfully accepted invite
        history.push('/household');
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return loading ? (
    <SignInConfirmation/>
  ) : null;
};
