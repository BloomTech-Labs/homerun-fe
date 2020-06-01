import ContactUsForm from "./ContactUsForm";
import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

afterAll(cleanup);

describe("Render testing", () => {
  it("contact form is working", () => {
    const { getByTestId } = render(
      <Router>
        <ContactUsForm />
      </Router>
    );
  });
});
