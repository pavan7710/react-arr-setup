import { combineReducers } from 'redux'
import { dashboard } from './dashboard'
import { authReducer } from './authreducers'
import { cummunitymanager } from './cummunitymanager'
const rootReducer = combineReducers({
    dashboard,
    authReducer,
    cummunitymanager
})

export default rootReducer