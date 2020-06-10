import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NotFound from "./NotFound";
import { BrowserRouter as Router } from "react-router-dom";

describe("Not Found Page tests", () => {
  it("diaplys proper text on Link", () => {
    const { getByText } = render(
      <Router>
        <NotFound />
      </Router>
    );

    const linkText = getByText(/Return to Home Page/i);

    expect(linkText).toBeVisible();
  });
  it("Sends user to proper page on click", () => {
    const { getByTestId } = render(
      <Router>
        <NotFound />
      </Router>
    );

    const clickedElement = getByTestId("home-link");
    fireEvent.click(clickedElement);

    const expectedPath = "/";
    const path = global.window.location.pathname;
    expect(path).toEqual(expectedPath);
  });
});
