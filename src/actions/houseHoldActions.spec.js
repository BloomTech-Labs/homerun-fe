import configureMockStore from "redux-mock-store";
import householdActions from "./houseHoldActions";
import thunk from "redux-thunk";
import moxios from "moxios";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

beforeEach(() => {
  store.clearActions();
  moxios.install();
});
afterEach(() => moxios.uninstall());

describe("Household Action testing", () => {
  describe("Fetch household actions", () => {
    it("returns proper actions on success", () => {
      moxios.stubRequest("/members/household/assignable", {
        status: 200,
        response: "stuff",
      });

      const expectedActions = [
        { type: "LOADING" },
        { type: "FETCH_MEMBERS_SUCCESS", payload: "stuff" },
      ];

      store
        .dispatch(householdActions.fetchHousehold())
        .then(() => expect(store.getActions()).toEqual(expectedActions));
    });
    it("returns proper actions on failure", () => {
      moxios.stubRequest("/members/household/assignable", {
        status: 500,
        response: { message: "stuff" },
      });

      const expectedActions = [
        { type: "LOADING" },
        { type: "ERROR", payload: "stuff" },
      ];

      store
        .dispatch(householdActions.fetchHousehold())
        .then(() => expect(store.getActions()).toEqual(expectedActions));
    });
  });

  describe("AddChild actions", () => {
    it("returns proper actions on success", () => {
      moxios.stubRequest("/members/household/children", {
        status: 201,
        response: [{ data: "response" }],
      });

      const expectedActions = [
        { type: "LOADING" },
        { type: "ADD_CHILD", payload: { data: "response" } },
      ];

      store
        .dispatch(householdActions.addChild({ username: "Child" }))
        .then(() => {
          console.log("passed!");
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
    it("returns proper actions on failure", () => {
      moxios.stubRequest("/members/household/children", {
        status: 400,
        response: { message: "response" },
      });

      const expectedActions = [
        { type: "LOADING" },
        {
          type: "ERROR",
          payload: "response",
        },
      ];

      store
        .dispatch(householdActions.addChild({ username: "Child" }))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });
  describe("Invite member actions", () => {
    it("returns loading action on call", () => {
      moxios.stubRequest("/members/household/invite", {
        status: 201,
        response: "response",
      });

      const expectedActions = [{ type: "LOADING" }];

      store.dispatch(
        householdActions.inviteMember({ data: "Info" }, { modalInfo: true })
      );

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
