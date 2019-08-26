const projectReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      return state
    case 'CREATE_PROJECT_ERROR':
      console.log(action.error)
      return state
    default:
      return state
  }
}

export default projectReducer
