import React from "react";
import { render, cleanup, fireEvent, act } from "@testing-library/react";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router } from "react-router-dom";

let mock_opened = true;
let mock_setOpened = jest.fn((isOpened) => {mock_opened = isOpened});

afterAll(cleanup);

describe("Sidebar", () => {
    it("Has links to each of the 3 main paths (dashboard, household, account)", () => {
        const sidebar = render(
            <Router>
                <Sidebar opened={mock_opened} setOpened={mock_setOpened}/>
            </Router>
        );
        let link1 = sidebar.getByTestId(/link-dashboard/);
        let link2 = sidebar.getByTestId(/link-household/);
        let link3 = sidebar.getByTestId(/link-account/);
        expect(link1).toBeVisible();
        expect(link2).toBeVisible();
        expect(link3).toBeVisible();
    });

    it("Changes the paths correctly for all 3 links", () => {
        const sidebar = render(
            <Router>
                <Sidebar opened={mock_opened} setOpened={mock_setOpened}/>
            </Router>
        );
        let link1 = sidebar.getByTestId(/link-dashboard/);
        let link2 = sidebar.getByTestId(/link-household/);
        let link3 = sidebar.getByTestId(/link-account/);
        fireEvent.click(link1);
        expect(window.location.pathname).toBe("/dashboard");
        fireEvent.click(link2);
        expect(window.location.pathname).toBe("/household");
        fireEvent.click(link3);
        expect(window.location.pathname).toBe("/account");
    });

    describe("Logout button", () => {
        localStorage.setItem("token", "dummy");
        localStorage.setItem("state", "dummy");
        it("Should remove the 'token' and 'state' from localStorage, and redirect to signin page", () => {
            const sidebar = render(
                <Router>
                    <Sidebar opened={mock_opened} setOpened={mock_setOpened}/>
                </Router>
            );
            const logout = sidebar.getByTestId(/logout-btn/);
            fireEvent.click(logout);
            expect(localStorage.getItem("token")).toBeNull();
            expect(localStorage.getItem("state")).toBeNull();
            expect(window.location.pathname).toBe("/signin");
        })
    });

    it("Should become closed when you press the close button", () => {
        const sidebar = render(
            <Router>
                <Sidebar opened={mock_opened} setOpened={mock_setOpened}/>
            </Router>
        );
        const close = sidebar.getByTestId(/close-button/);
        mock_setOpened.mockReset();
        fireEvent.click(close);
        expect(mock_setOpened).toHaveBeenCalledTimes(1);
        expect(mock_setOpened).toHaveBeenCalledWith(false);
        expect(mock_opened).toBe(false);
    });
});