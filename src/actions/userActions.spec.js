import configureMockStore from 'redux-mock-store';
import userActions from './userActions';
import thunk from 'redux-thunk';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

beforeEach(() => {
  store.clearActions();
  moxios.install();
});
afterEach(() => moxios.uninstall());

describe('User actions testing', () => {
  describe('Set user actions', () => {
    it('returns proper actions on success', () => {
      const expectedActions = [{ type: 'SET_USER', payload: 'user' }];

      store.dispatch(userActions.setUser('user'));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
