import React from 'react';

import { NavLink } from 'react-router-dom';

import { Button } from 'semantic-ui-react';

// right now the button takes us to the email sign up but from the Home page the next step would actually be the initial sign in page where the user can choose to sign in with
// google or email - once those components are built out we can have the navlink take us to that route
const Home = () => {

    return (
        <>
        <div>
            Home
        </div>

        <NavLink to="/email/signup">
            <Button primary>
                Go to Email Sign Up
            </Button>
        </NavLink>
        </>
    );
};

export default Home;