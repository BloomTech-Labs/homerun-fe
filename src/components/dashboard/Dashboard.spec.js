import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configRedux from "../../configRedux";

const store = configRedux();

describe("Dashboard tests", () => {
  it("renders successfully", () => {
    render(
      <Router>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </Router>
    );
  });
  it("contains correct classes in container section", () => {
    const { getByTestId } = render(
      <Router>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </Router>
    );

    expect(getByTestId("container-section").className).toBe("ui container");
  });
});
