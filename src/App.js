import React, { useEffect } from 'react';
import Structure from './components/layout/Structure';
import 'semantic-ui-css/semantic.min.css';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function App() {
  const currentUser = useSelector((state) => state.user);
  const history = useHistory();

  return (
    <div className="App h-full">
      <Structure />
    </div>
  );
}

export default App;
