const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_TODOS":
      return action.payload;
    case "ADD_TODO":
      return [...state, action.payload];
    case "REMOVE_TODO":
      return action.payload;
    case "UPDATE_ASSIGNEES":
      const newState = state.map((obj) => {
        const newObj = { ...obj };
        if (obj.id === action.payload.todoId) {
          newObj.assigned = action.payload.assigned;
        }
        return newObj;
      });
      return newState;
    case "RESCHEDULE_TODO":
      return state.filter(obj => obj.id === action.payload.id ? action.payload : obj)
    default:
      return state;
  }
};

export default todoReducer;
