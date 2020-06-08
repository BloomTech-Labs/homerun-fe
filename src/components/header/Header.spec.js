import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
// import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Header from "./Header";
// import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from "react-redux";
import configRedux from "../../configRedux";
// 1. expect sidebar functions to work, so no need to mock "useHistory" used inside it.
// 2. test both components separately
import "../sidebar/Sidebar";
import TITLES from "./HeaderTitles";

let mock_path;
jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(() => ({pathname: mock_path})),
  useHistory: jest.fn(() => ({
    push: jest.fn(hist => {mock_path = hist})
  })),
}))

afterAll(cleanup);
// window.localStorage.setItem("token", "IDK");

describe("Header rendering", () => {
  it("Displays the right dashboard title when the path is /dashboard", () => {
    mock_path = "/dashboard";
    const store = configRedux();
    store.subscribe(() => {
      saveState(store.getState());
    });
    
    const { getByTestId } = render(
      <Provider store={store}>
        <Header/>
      </Provider>
    );

    let title = getByTestId(/title/);
    expect(title.textContent).toBe(TITLES.DASHBOARD);
  });

  it("Displays the right household title when the path is /household", () => {
    mock_path = "/household";
    const store = configRedux();
    store.subscribe(() => {
      saveState(store.getState());
    });
    
    const { getByTestId } = render(
      <Provider store={store}>
        <Header/>
      </Provider>
    );

    let title = getByTestId(/title/);
    expect(title.textContent).toBe(TITLES.HOUSEHOLD);
  });

  it("Displays the right account title when the path is /account", () => {
    mock_path = "/account";
    const store = configRedux();
    store.subscribe(() => {
      saveState(store.getState());
    });
    
    const { getByTestId } = render(
      <Provider store={store}>
        <Header/>
      </Provider>
    );

    let title = getByTestId(/title/);
    expect(title.textContent).toBe(TITLES.ACCOUNT);
  });
})
