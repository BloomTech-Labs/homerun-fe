import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Navigation from "./Navigation";
import { BrowserRouter as Router } from "react-router-dom";

afterAll(cleanup);

describe("isOpen state testing", () => {
  it("should contain class hidden by default", () => {
    const { getByTestId } = render(
      <Router>
        <Navigation />
      </Router>
    );

    expect(getByTestId("isOpen").classList.contains("hidden")).toBe(true);
  });
  it("should contain class block after button press", () => {
    const { getByTestId } = render(
      <Router>
        <Navigation />
      </Router>
    );

    fireEvent.click(getByTestId("nav-button"));

    expect(getByTestId("isOpen").classList.contains("hidden")).toBe(false);
  });
});
