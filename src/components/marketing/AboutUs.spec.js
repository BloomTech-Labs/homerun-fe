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
describe("a", () => {
  it("b", () => {
    const { getByTestId } = render(
      <Router>
        <Card />
      </Router>
    );

    fireEvent.click(getByTestId("button-1"));

    expect(
      getByTestId("{toggleExpand").classList.contains(
        "pt-2 m-auto text-3xl text-gray-700"
      )
    ).toBe(true);
  });
});
