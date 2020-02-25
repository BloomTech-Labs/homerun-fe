// Testing for the Home Component here
import React from 'react';
import { render, fireEvent} from "@testing-library/react";

// because Home.js uses a navlink we need to import Router and wrap it around the home component or else it will throw an error
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './Home.js';


describe("testing for Home component", () => {

    describe("signup button", () => {
        it("should exist", () => {
            const { getAllByText } = render(<Router><Home /></Router>);

            // then we check to see if it does exists which it should now because we are searching for the correct text
            const signupBtn = getAllByText(/sign up/i);
            expect(signupBtn).toBeDefined();
        })
    })
})