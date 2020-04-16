import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const Navigation = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <h1>TidyHive</h1>
        <nav className="marketing-nav">
          <div className="nav-buttons">
            <Link to="/signup">
              <Button primary>
                Sign Up
              </Button>
            </Link>
            <Link to="/signin">
              <Button primary>
                Sign In
              </Button>
            </Link>
          </div>
          <div className="nav-links">
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;