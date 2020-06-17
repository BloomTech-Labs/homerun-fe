import React from "react";
import { render, cleanup } from "@testing-library/react";
import { InviteConfirm } from "./InviteConfirm";

let mock_path = "";
let mock_householdId = "TEST_HOUSEHOLD";
let mock_hash = "TEST_HASH";
jest.mock("react-router-dom", () => ({
    useHistory: jest.fn(() => ({
        push: jest.fn(hist => {mock_path = hist})
    })),
    useParams: jest.fn(() => ({
        householdId: mock_householdId,
        hash: mock_hash,
    })),
}));

let mock_axiosWillPass = true;
let mock_put = jest.fn(() => {
    if (mock_axiosWillPass) {
        return Promise.resolve({
            data: { token: "TEST_TOKEN" }
        });
    } else {
        return Promise.reject({ error: "TEST_ERROR" });
    }
});

jest.mock("../../utils/AxiosWithAuth.js", () => () => ({
    put: mock_put,
}));

afterAll(cleanup);

describe("InviteConfirm component", () => {
    it("Renders", () => {
        let dimmer = render(<InviteConfirm/>)
            .getByTestId(/dimmer/);
        expect(dimmer).toBeVisible();
    });

    it("Calls the backend using hash and householdId", () => {
        jest.clearAllMocks();
        render(<InviteConfirm/>);
        expect(mock_put).toHaveBeenCalledTimes(1); 
        expect(mock_put).toHaveBeenCalledWith("/members", {householdId: mock_householdId, hash: mock_hash});
    });

    it("Moves to /household", () => {
        render(<InviteConfirm/>);
        expect(mock_path).toBe("/household");
    });
});