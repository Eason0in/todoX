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

export const editProject = project => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()
    firestore
      .collection('projects')
      .doc(project.id)
      .update({
        ...project,
        createdAt: new Date()
      })
      .then(() => dispatch({ type: 'EDIT_PROJECT' }))
  }
}
export const deleteProject = id => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()

    firestore
      .collection('projects')
      .doc(id)
      .delete()
      .then(() => {
        return firestore
          .collection('todos')
          .where('projectId', '==', id)
          .get()
      })
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          doc.ref.delete()
        })
        dispatch({ type: 'DELETE_PROJECT' })
      })
      .catch(error => dispatch({ type: 'DELETE_PROJECT_ERROR', error }))
  }
}
