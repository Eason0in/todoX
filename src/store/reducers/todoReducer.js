const todoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_TODO':
      return state
    case 'DELETE_TODO':
      return state
    case 'EDIT_TODO':
      return state
    default:
      return state
  }
}

export default todoReducer
