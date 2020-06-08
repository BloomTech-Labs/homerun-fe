import AboutUs from "./AboutUs";
import Card from "./Card";
import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import Users from "../../utils/Users";

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
describe("about us page button tests", () => {
  it("when the expand users card class should be collapse ", () => {
    const user = Users[0];
    const { getByTestId } = render(<Card user={user} />);

    fireEvent.click(getByTestId("button-1"));

    expect(getByTestId("toggleExpand").classList.contains("collapse")).toBe(
      false
    );
  });
  it("when the close users card class should't be collapse", () => {
    const user = Users[0];
    const { getByTestId } = render(<Card user={user} />);

    fireEvent.click(getByTestId("button-1"));
    fireEvent.click(getByTestId("button-1"));

    expect(getByTestId("toggleExpand").classList.contains("collapse")).toBe(
      true
    );
  });
});
