const initalState = {
  allTodos: [],
  todos: [],
  currentCategory: 'all'
}
const todoReducer = (state = initalState, action) => {
  switch (action.type) {
    case "FETCH_TODOS":
      return {
        ...state,
        todos: state.currentCategory === 'all' ? action.payload : action.payload.filter(todo => todo.categories.includes(state.currentCategory))
      };

    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }

    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.currentCategory === 'all' ? action.payload : action.payload.filter(todo => todo.categories.includes(state.currentCategory))
      }

    case "UPDATE_ASSIGNEES":
      const newState = state.todos.map((obj) => {
        const newObj = { ...obj };
        if (obj.id === action.payload.todoId) {
          newObj.assigned = action.payload.assigned;
        }
        return newObj;
      });
      return {
        ...state,
        todos: newState, 
      };

    case "UPDATE_TODO":
      const newerState = state.todos.map((obj) => {
        const newObj = { ...obj };
        if (obj.id === action.payload.id) {
          return action.payload
        }
        return newObj;
      });
      return {
        ...state,
        todos: newerState
      }

    case "CATEGORIZE_TODOS":
      return {
        ...state,
        currentCategory: action.payload,
        todos: action.payload === 'all' ? state.todos : state.todos.filter(todo => todo.categories.includes(action.payload))
      }
    default:
      return state;
  }
};

export default todoReducer;
