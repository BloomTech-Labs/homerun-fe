const initalState = {
  allTodos: [],
  todos: []
}
const todoReducer = (state = initalState, action) => {
  switch (action.type) {
    case "FETCH_TODOS":
      return {
        ...state,
        allTodos: action.payload,
        todos: action.payload
      };

    case "ADD_TODO":
      return {
        ...state,
        allTodos: [...state.allTodos, action.payload],
        todos: [...state.todos, action.payload]
      }

    case "REMOVE_TODO":
      return {
        ...state,
        allTodos: action.payload
      }

    case "UPDATE_ASSIGNEES":
      const newState = state.allTodos.map((obj) => {
        const newObj = { ...obj };
        if (obj.id === action.payload.todoId) {
          newObj.assigned = action.payload.assigned;
        }
        return newObj;
      });
      return {
        ...state,
        allTodos: newState, 
        todos: newState
      };

    case "UPDATE_TODO":
      const newerState = state.allTodos.map((obj) => {
        const newObj = { ...obj };
        if (obj.id === action.payload.id) {
          return action.payload
        }
        return newObj;
      });
      return {
        ...state,
        allTodos: newerState,
        todos: newerState
      }

    case "CATEGORIZE_TODOS":
      return {
        ...state,
        todos: action.payload === 'all' ? state.allTodos : state.allTodos.filter(todo => todo.categories.includes(action.payload))
      }
    default:
      return state;
  }
};

export default todoReducer;
