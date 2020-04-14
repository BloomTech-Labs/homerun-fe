import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button, Icon } from "semantic-ui-react";
import devices from '../../Logos/devices.png';
import '../../SASS/Marketing.scss';
import Navigation from '../marketing/Navigation';

// right now the button takes us to the email sign up but from the Home page the next step would actually be the initial sign in page where the user can choose to sign in with
// google or email - once those components are built out we can have the navlink take us to that route
const Home = () => {

    return (
      <>
        <Navigation />
        <div className="content">
          <div className="banner">
            <img src={devices} />
            <div className="text">
              <h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h1>
              <Button>
              <Link to="/signup">Signup for free <Icon name="arrow right"/></Link>
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
            <h2>Create Todos</h2>
          </div>
          <div className="assign">
            <Icon name="add user" size="massive" />
            <h2>Assign Members</h2>
          </div>
          <div className="complete">
            <Icon name="tasks" size="massive" />
            <h2>Complete Tasks</h2>
          </div>
        </div>
        <p className="feature-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <footer>
          <p>&copy; Copyright TidyHive 2020</p>
        </footer>
      </>
    );
};

export default Home;