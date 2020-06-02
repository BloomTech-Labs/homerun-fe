import ContactUsForm from "./ContactUsForm";
import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

afterAll(cleanup);

describe("Render testing", () => {
  it("Full Name form test", () => {
    const { getByLabelText } = render(
      <Router>
        <ContactUsForm />
      </Router>
    );
    const fullNameInput = getByLabelText(/Full Name*/i);
    expect(fullNameInput).toBeVisible();
  });
  it("Email form test", () => {
    const { getByLabelText } = render(
      <Router>
        <ContactUsForm />
      </Router>
    );
    const emailInput = getByLabelText(/Email*/i);
    expect(emailInput).toBeVisible();
  });
  it("Message form test", () => {
    const { getByText } = render(
      <Router>
        <ContactUsForm />
      </Router>
    );
    const messageInput = getByText(/Message*/i);
    expect(messageInput).toBeVisible();
  });
});
