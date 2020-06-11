import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import SignUp from "./SignUp";

afterAll(cleanup);

it("changing E-mail values", () => {
  const { getByTestId } = render(
    <Router>
      <SignUp />
    </Router>
  );
  const username = getByTestId("input-1");
  fireEvent.change(username, { target: { value: "test123" } });
  expect(username.value).toBe("test123");
  fireEvent.click(getByTestId(/submit-test/i));
});
