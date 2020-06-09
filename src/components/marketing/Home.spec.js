import Home from "./Home";
import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

afterAll(cleanup);

describe("home page button test", () => {
  it("clicking on signup for free button send users to /signup page", () => {
    const { getByTestId } = render(
      <Router>
        <Home />
      </Router>
    );
    const clicked = getByTestId("signup-button");
    fireEvent.click(clicked);

    const expectedPath = "/";
    const path = global.window.location.pathname;
    expect(path).toEqual(expectedPath);
  });
});
