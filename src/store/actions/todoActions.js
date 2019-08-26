export const createTodo = todo => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore()
    firestore
      .collection('todos')
      .add({
        ...todo,
        createdAt: new Date()
      })
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

export const editTodo = todo => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    const { title, content } = todo
    firestore
      .collection('todos')
      .doc(todo.id)
      .update({
        title,
        content,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: 'EDIT_TODO', todo })
      })
  }
}
