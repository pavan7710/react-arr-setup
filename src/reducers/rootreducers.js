import { combineReducers } from 'redux'
import { dashboard } from './dashboard'
import { authReducer } from './authreducers'
const rootReducer = combineReducers({
    dashboard,
    authReducer
})

export default rootReducer