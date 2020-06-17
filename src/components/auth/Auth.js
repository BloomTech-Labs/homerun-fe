import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Loader, Dimmer } from 'semantic-ui-react';
import queryString from 'query-string';
import { useDispatch } from 'react-redux';
import actions from '../../actions';

const Auth = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  let history = useHistory();

  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.clear();
    localStorage.setItem('token', query.token);
    dispatch(actions.user.setUser(query));
    history.push('/household');
  }, [dispatch, history, query]);

  return (
    <Dimmer active inverted>
      <Loader size="large">Loading</Loader>
    </Dimmer>
  );
};

export default Auth;
