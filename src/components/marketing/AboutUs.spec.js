import AboutUs from "./AboutUs";
import Card from "./Card";
import React from "react";
import Users from "../../utils/Users";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

afterAll(cleanup);

describe("Routes should go to correct route", () => {
  it("clicking on adam monast's git hub icon send users to his github page ", async () => {
    const { getById } = render(
      <Router>
        <AboutUs />
      </Router>
    );
    const clicked = getById(1);
    fireEvent.click(clicked);
    const expectedPath = "https://github.com/Adammonast";
    const path = global.window.location.pathname;
    expect(path).toEqual(expectedPath);
  });
});
