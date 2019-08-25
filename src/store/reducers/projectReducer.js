const projectReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      action.project.id = Math.random()
      return {
        ...state,
        projects: [...state.projects, action.project]
      }
    case 'CREATE_PROJECT_ERROR':
      console.log(action.error)
      return state
    default:
      return state
  }
}

export default projectReducer
