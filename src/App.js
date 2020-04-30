import React, { useEffect } from "react";
import Routes from "./utils/Routes";
import "semantic-ui-css/semantic.min.css";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function App() {
  const currentUser = useSelector((state) => state.user);
  const history = useHistory();

  useEffect(() => {
    if (currentUser.childActive === true) {
      history.push("/dashboard");
    }
  }, [currentUser.childActive]);
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
