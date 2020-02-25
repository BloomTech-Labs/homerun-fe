import React from 'react';
import SignUp from './components/auth/SignUp';
import "semantic-ui-css/semantic.min.css";
import ReactGA from "react-ga";



function initializeAnalytics (){

  ReactGA.initialize("UA-150184896-3");
  ReactGA.pageview('/SignUp');
}



function App() {
  initializeAnalytics()
  return (
    <div className="App">
      <SignUp />
    </div>
  );
}

export default App; 
