import ContactUsForm from "./ContactUsForm";
import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

afterAll(cleanup);

describe("Contact Form rendering", () => {
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

describe("Contact Form functionality", () => {
  it("changing Full-Name values", () => {
    const { getByLabelText, getByTestId } = render(
      <Router>
        <ContactUsForm />
      </Router>
    );
    const fullNameInput = getByLabelText(/Full Name*/i);
    fireEvent.change(fullNameInput, { target: { value: "test" } });
    expect(fullNameInput.value).toBe("test");
    fireEvent.click(getByTestId(/submit-test/i));
  });
  it("changing E-mail values", () => {
    const { getByLabelText, getByTestId } = render(
      <Router>
        <ContactUsForm />
      </Router>
    );
    const fullNameInput = getByLabelText(/Email*/i);
    fireEvent.change(fullNameInput, { target: { value: "test-1" } });
    expect(fullNameInput.value).toBe("test-1");
    fireEvent.click(getByTestId(/submit-test/i));
  });
});
