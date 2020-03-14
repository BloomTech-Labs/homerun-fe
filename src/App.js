import React from 'react';
import Routes from './utils/Routes';
import "semantic-ui-css/semantic.min.css";
import ReactGA from "react-ga"; 

function initializeAnalytics (){
  ReactGA.initialize("UA-150184896-3");
  ReactGA.pageView('/email/signUp');
}

function App() {
  // initializeAnalytics()
  return (
    <div className="App"> 
      <Routes />
    </div>
  );
}

export default App; 