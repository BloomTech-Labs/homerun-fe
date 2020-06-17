import configureMockStore from 'redux-mock-store';
import todoActions from './todoActions';
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

describe('Todo actions testing', () => {
  describe('Fetch todo actions', () => {
    it('returns proper actions on success', () => {
      moxios.stubRequest('/todos/household', {
        status: 200,
        response: 'data',
      });

      const expectedActions = [{ type: 'FETCH_TODOS', payload: 'data' }];

      store
        .dispatch(todoActions.fetchTodos())
        .then(() => expect(store.getActions()).toEqual(expectedActions));
    });
  });
  describe('Add category actions', () => {
    it('returns proper action on success', () => {
      moxios.stubRequest('/todos/categories', {
        status: 201,
        response: 'data',
      });

      const expectedActions = [
        {
          type: 'ADD_CATEGORY',
          payload: { todoId: 'id', categories: 'data' },
        },
      ];

      store
        .dispatch(todoActions.addCategory({ todo_id: 'id' }))
        .then(() => expect(store.getActions()).toEqual(expectedActions));
    });
  });
});
