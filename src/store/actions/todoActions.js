export const createTodo = todo => {
  return (dispatch, getState) => {
    //async
    dispatch({ type: 'CREATE_TODO', todo })
  }
}

export const deleteTodo = id => {
  return (dispatch, getState) => {
    //async

    dispatch({ type: 'DELETE_TODO', id })
  }
}
