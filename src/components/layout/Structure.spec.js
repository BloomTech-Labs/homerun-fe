import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Structure from "./Structure";
import { BrowserRouter as Router } from "react-router-dom";

afterAll(cleanup);

it("Structure class test", () => {
  const { getByTestId } = render(
    <Router>
      <Structure />
    </Router>
  );
  expect(getByTestId("structure-test")).toHaveClass("z-0 pt-20 pb-8 pl-8 pr-8");
});
