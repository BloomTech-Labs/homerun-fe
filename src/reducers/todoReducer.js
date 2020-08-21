const initialState = {
  todos: [],
  currentCategory: 'all',
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TODOS':
      return {
        ...state,
        todos:
          state.currentCategory === 'all'
            ? action.payload
            : action.payload.filter((todo) =>
                todo.categories.includes(state.currentCategory)
              ),
      };

    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case 'REMOVE_TODO':
      return {
        ...state,
        todos:
          state.currentCategory === 'all'
            ? action.payload
            : action.payload.filter((todo) =>
                todo.categories.includes(state.currentCategory)
              ),
      };

    case 'UPDATE_ASSIGNEES':
      return {
        ...state,
        todos: state.todos.map((obj) =>
          obj.id === action.payload.todoId
            ? { ...obj, assigned: action.payload.assigned }
            : obj
        ),
      };

    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map((obj) =>
          obj.id === action.payload.id ? action.payload : obj
        ),
      };

    case 'UPDATE_CATEGORY':
      return {
        ...state,
        currentCategory: action.payload,
      };

    case 'ADD_CATEGORY':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.todoId
            ? { ...todo, categories: action.payload.categories }
            : todo
        ),
      };
    case 'RESET_CURRENT_CATEGORY':
      return initialState;
    default:
      return state;
  }
};

export default todoReducer;
