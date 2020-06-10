import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Sidebar from "./Sidebar";

let mock_path = "/dashboard"
jest.mock('react-router-dom', () => ({
  useHistory: jest.fn(() => ({
    push: jest.fn(hist => {mock_path = hist})
  })),
}))

describe("Sidebar rendering", () => {
    it("Does a thing", () => {
        const {getByTestId} = render(<Sidebar/>);

        expect(1).toBe(1);
    })
});

// describe("Sidebar functionality", () => {

// })