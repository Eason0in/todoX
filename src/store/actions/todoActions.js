export const createTodo = todo => {
  return (dispatch, getState) => {
    //async
    dispatch({ type: 'CREATE_TODO', todo })
  }
}
