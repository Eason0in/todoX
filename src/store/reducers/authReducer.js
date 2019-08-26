const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNIN_SUCCESS':
      console.log('sign in success')
      return {
        ...state,
        authError: null
      }
    case 'SIGNIN_ERROR':
      console.log('sign in error')
      return {
        ...state,
        authError: action.error.message
      }
    case 'SIGNOUT_SUCCESS':
      console.log('sign out success')
      return state
    case 'SIGNOUT_ERROR':
      console.log('sign out error')
      return state
    case 'SIGNUP_SUCCESS':
      console.log('sign up success')
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      console.log('sign up error', action.error.message)
      return {
        ...state,
        authError: action.error.message
      }
    default:
      return state
  }
}

export default authReducer
