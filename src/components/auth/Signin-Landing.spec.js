import React from 'react';
import { render, fireEvent, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Signin from './SignIn-Landing.js';

import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux'
import configRedux from '../../configRedux.js';

const store = configRedux()

describe("testing for signin landing component", () => {

    describe("signin btn", () => {
        it("should exist", () => {
            // const { getByText } = render(<Router><Provider store={store}><Signin /></Provider></Router>);

//             const button = getByText(/Submit/i);
//             expect(button).toBeDefined();
        })

    })

})