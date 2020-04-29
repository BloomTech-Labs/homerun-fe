// Testing for the Home Component here
import React from 'react';
import { render, fireEvent, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";


import AddChild from './AddChild.js';
import { Provider } from 'react-redux'
import configRedux from '../../configRedux.js';


const store = configRedux()

describe("testing for AddChild component", () => {

    describe("invite member btn", () => {
        it("should exist", () => {
            const { getByText } = render(<Provider store={store}><AddChild /></Provider>);

            const btn = getByText(/Add/i);
            expect(btn).toBeDefined(); 
        })

    })
})