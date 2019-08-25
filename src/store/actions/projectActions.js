export const createProject = project => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    //async

    dispatch({ type: 'CREATE_PROJECT', project })
  }
}
