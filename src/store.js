import { configureStore } from  '@reduxjs/toolkit'
import rootReducer from 'src/reducers/rootreducers'
import setAuthToken from './utlis/setAuthToken'

const store = configureStore({
    reducer : rootReducer
})

store.subscribe(() => {
    if(store.getState().authReducer.login && store.getState().authReducer.login.headers?.['access-token'] ){
        let token,id 
        id = store.getState().authReducer.login.headers?.['uid']
        token = store.getState().authReducer.login.headers?.['access-token']
         setAuthToken(token , id)
      }
})
export default store