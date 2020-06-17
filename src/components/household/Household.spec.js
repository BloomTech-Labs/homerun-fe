import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import configRedux from "../../configRedux";
import { saveState } from "../../utils/localStorage";
import Household from "./Household";

const store = configRedux();
store.subscribe(() => {
    saveState(store.getState());
});

afterAll(cleanup);

describe("Household component", () => {
    it("Contains the 'List' component", () => {
        // doesn't need any variables or 'expect' calls because it will throw if it doesn't find it
        render(
            <Provider store={store}>
                <Household/>
            </Provider>
        ).getByTestId(/list/);
    });
});