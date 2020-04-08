import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Icon } from "semantic-ui-react";
import devices from '../../Logos/devices.png';
import '../../SASS/Marketing.scss';

// right now the button takes us to the email sign up but from the Home page the next step would actually be the initial sign in page where the user can choose to sign in with
// google or email - once those components are built out we can have the navlink take us to that route
const Home = () => {

    return (
      <>
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
        <div className="content">
          <div className="banner">
            <img src={devices} />
            <div className="text">
              <h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h1>
              <Button>
                Signup for free <Icon name="arrow right" />
              </Button>
            </div>
          </div>
        </div>
        <div className="mission-statement">
          <Icon name="home" size="huge" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.
            <br />
            Eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="features">
          <div className="create">
            <Icon name="list" size="massive" />
            <h2>Create</h2>
          </div>
          <div className="assign">
            <Icon name="add user" size="massive" />
            <h2>Assign</h2>
          </div>
          <div className="complete">
            <Icon name="tasks" size="massive" />
            <h2>Complete</h2>
          </div>
        </div>
      </>
    );
};

export default Home;