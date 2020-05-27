import React from "react";
import { render, cleanup } from "@testing-library/react";
import Navigation from "../components/layout/Navigation";
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
});
