import AboutUs from "./AboutUs";
import Card from "./Card";
import React from "react";

import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

afterAll(cleanup);
describe("about us page render test", () => {
  it("Header render testing", () => {
    const { getByTestId } = render(<AboutUs />);
    expect(getByTestId("header-test")).toHaveTextContent("Our Team");
  });

  it("Information span render testing", () => {
    const { getByTestId } = render(<AboutUs />);
    expect(getByTestId("span-test")).toHaveClass("ml-2");
  });
});

describe("about us page button and route test", () => {});
