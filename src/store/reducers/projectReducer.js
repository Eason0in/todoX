const projectReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      return {
        ...state,
        projects: [...state.projects]
      }
    case 'CREATE_PROJECT_ERROR':
      console.log(action.error)
      return state
    default:
      return state
  }
}

export default projectReducer
