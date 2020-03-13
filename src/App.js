import React from 'react';
import Routes from './utils/Routes';
import "semantic-ui-css/semantic.min.css";
import ReactGA from "react-ga"; 

function initializeAnalytics (){
  ReactGA.initialize("UA-150184896-3");
  ReactGA.pageView('/email/signUp');
}

function App() {
<<<<<<< HEAD
  initializeAnalytics()
  return ( 
    <div className="App">
=======
  // initializeAnalytics()
  return (
    <div className="App"> 
>>>>>>> 831099f97e87e8352b01bbd5145b19e3f76f1dff
      <Routes />
    </div>
  );
}

export default App; 