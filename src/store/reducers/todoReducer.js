const todoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_TODO':
      return {
        ...state,
        todos: [...state.todos, action.todo]
      }
    case 'DELETE_TODO':
      return state
    default:
      return state
  }
}

export default todoReducer
