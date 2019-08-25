export const createProject = project => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore()

    firestore
      .collection('projects')
      .add({
        ...project,
        authorFistName: 'Eason',
        authorLastName: 'Lin',
        authorId: '3345678',
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: 'CREATE_PROJECT' })
      })
      .catch(error => dispatch({ type: 'CREATE_PROJECT_ERROR', error }))
  }
}
