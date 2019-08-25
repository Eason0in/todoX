export const createTodo = todo => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore()
    firestore
      .collection('todos')
      .add({ ...todo })
      .then(() => {
        dispatch({ type: 'CREATE_TODO' })
      })
      .catch(error => dispatch({ type: 'CREATE_TODO_ERROR' }, error))
  }
}

export const deleteTodo = id => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore()
    firestore
      .collection('todos')
      .doc(id)
      .delete()
      .then(res => {
        dispatch({ type: 'DELETE_TODO', id })
      })
      .catch(error => dispatch({ type: 'DELETE_TODO_ERROR', error }))
  }
}
