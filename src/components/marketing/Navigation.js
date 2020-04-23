import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import logo from '../../Logos/tidyhive-logo.png'

const Navigation = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <Link to="/">
          <img src={logo} alt="Tidy Hive Logo" style={{ width: 200, height: "auto" }} />
        </Link>
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