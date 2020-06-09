import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Structure from "./Structure";

afterAll(cleanup);

it("Footer class test", () => {
  const { getByTestId } = render(<Structure />);
  expect(getByTestId("structure-test-1").classList.contains("class")).toBe(
    false
  );
});
