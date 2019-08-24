import authReducer from './authReducer'
import projectReducer from './projectReducer'
import todoReducer from './todoReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  todo: todoReducer
})

export default rootReducer
