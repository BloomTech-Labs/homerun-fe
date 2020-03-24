import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import '../../SASS/Marketing.scss';

// right now the button takes us to the email sign up but from the Home page the next step would actually be the initial sign in page where the user can choose to sign in with
// google or email - once those components are built out we can have the navlink take us to that route
const Home = () => {

    return (
      <div className="wrapper">
        <div className="header">
          <h1>TidyHive</h1>
          <nav className="marketing-nav">
            <div className="nav-buttons">
              <NavLink to="/signup">
                <Button primary>Sign Up</Button>
              </NavLink>
              <NavLink to="/signin">
                <Button primary>Sign In</Button>
              </NavLink>
            </div>
            <div className="nav-links">
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
              <NavLink to="/signin">About</NavLink>
              <NavLink to="/signin">Features</NavLink>
              <NavLink to="/signin">Contact</NavLink>
            </div>
          </nav>
        </div>
      </div>
    );
};

export default Home;