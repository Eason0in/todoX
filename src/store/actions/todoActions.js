export const createTodo = todo => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    //async
    dispatch({ type: 'CREATE_TODO', todo })
  }
}

export const deleteTodo = id => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    //async

    dispatch({ type: 'DELETE_TODO', id })
  }
}
