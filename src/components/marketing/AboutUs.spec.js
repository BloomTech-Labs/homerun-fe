import AboutUs from "./AboutUs";
import Card from "./Card";
import React from "react";

import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

afterAll(cleanup);

it("Header render testing", () => {
  const { getByTestId, getByText } = render(<AboutUs />);
  expect(getByTestId("header-test")).toHaveTextContent("Our Team");
});

it("Information span render testing", () => {
  const { getByTestId, getByText } = render(<AboutUs />);
  expect(getByTestId("span-test")).toHaveClass("ml-2");
});
