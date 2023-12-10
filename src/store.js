import { configureStore } from  '@reduxjs/toolkit'
import rootReducer from 'src/reducers/rootreducers'
import setAuthToken from './utlis/setAuthToken'

const store = configureStore({
    reducer : rootReducer
})

store.subscribe(() => {
    if(store.getState().authReducer.login && store.getState().authReducer.login.headers?.['access-token'] ){
        let token,id , role
        id = store.getState().authReducer.login.headers?.['uid']
        token = store.getState().authReducer.login.headers?.['access-token']
        role = store.getState().authReducer.login?.data?.data?.['role'] 
         setAuthToken(token , id , role)
      }
})
export default store