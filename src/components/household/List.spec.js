// Testing for the Home Component here
import React from 'react';
import { render, fireEvent} from "@testing-library/react";

import List from './List.js';


describe("testing for List component", () => {

    describe("member modal", () => {
        it("should render the correct text", () => {
            const { getByText } = render(<List />);

            const modalBtn = getByText(/Invite Member/i);
            expect(modalBtn).toBeDefined();
        })
    })
})