import { combineReducers } from 'redux'

import userReducer from './usersreducer'
import validationCheckReducer from "./validationreducer"

const rootReducer = combineReducers({
  users: userReducer,
  validation: validationCheckReducer
})

export default rootReducer