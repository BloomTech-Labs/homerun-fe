import ContactUsForm from "./ContactUsForm";
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

it("renders", () => {
  const { asFragment } = render(<ContactUsForm name="Jack" />);
  expect(asFragment()).toMatchSnapshot();
});
