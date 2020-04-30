// Testing for the Home Component here
import React from 'react';
import { render, fireEvent, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";


import List from './List.js';
import { Provider } from 'react-redux'
import configRedux from '../../configRedux.js';


const store = configRedux()

describe("testing for List component", () => {

    describe("invite member btn", () => {
        it("should exist", () => {
            const { getByText } = render(<Provider store={store}><List /></Provider>);

            const modalBtn = getByText(/Invite Member/i);
            expect(modalBtn).toBeDefined(); 
        })

        // it("should show a modal when the button is clicked", async () => {
        //     const { getByText } = render(<Provider store={store}><List /></Provider>)

        //     const modalBtn = getByText(/Invite Member/i);
        

        //     fireEvent.click(modalBtn)

        //     const emailLabel = getByText(/email/i);

        //     expect(emailLabel).toBeDefined();
        // })
    })
})