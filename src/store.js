import { configureStore } from  '@reduxjs/toolkit'
import rootReducer from 'src/reducers/rootreducers'
import setAuthToken from './utlis/setAuthToken'

const store = configureStore({
    reducer : rootReducer
})

store.subscribe(() => {
    if(store.getState().authReducer.login && store.getState().authReducer.login.headers?.['access-token'] ){
        let token,id , role , client
        id = store.getState().authReducer.login.headers?.['uid']
        token = store.getState().authReducer.login.headers?.['access-token']
        role = store.getState().authReducer.login?.data?.data?.['role'] 
        client = store.getState().authReducer.login.headers?.['client']
         setAuthToken(token , id , role , client)
      }
})
export default store