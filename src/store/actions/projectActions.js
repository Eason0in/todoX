export const createProject = project => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore()
    const { auth, profile } = getState().firebase

    firestore
      .collection('projects')
      .add({
        ...project,
        authorFistName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: auth.uid,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: 'CREATE_PROJECT' })
      })
      .catch(error => dispatch({ type: 'CREATE_PROJECT_ERROR', error }))
  }
}
