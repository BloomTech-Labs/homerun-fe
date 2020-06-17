import React from 'react';
import { Link } from 'react-router-dom';
import Error404 from '../../assets/images/Error.png';

const NotFound = () => (
  <div>
    <img
      src={Error404}
      style={{
        width: 400,
        height: 400,
        display: 'block',
        margin: 'auto',
        position: 'relative',
      }}
    />
    <center>
      <Link data-testid="home-link" to="/">
        Return to Home Page
      </Link>
    </center>
  </div>
);

export default NotFound;
