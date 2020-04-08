import React, { useEffect } from 'react';
import Routes from './utils/Routes';
import "semantic-ui-css/semantic.min.css";
import ReactGA from "react-ga"; 
import actions from './actions';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function initializeAnalytics (){
  ReactGA.initialize("UA-150184896-3");
  ReactGA.pageView('/email/signUp');
}

function App() {
  // initializeAnalytics()
  const currentUser = useSelector(state => state.user);
  const history = useHistory();

  useEffect(() => {
    if(currentUser.childActive === true) {
      history.push('/dashboard');    
    }
  }, [currentUser.childActive])
  return ( 
    <div className="App">
      <Routes />
    </div>
  );
}

export default App; 