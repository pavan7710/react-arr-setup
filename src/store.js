import { configureStore } from  '@reduxjs/toolkit'
import rootReducer from 'src/reducers/rootreducers'
import setAuthToken from './utlis/setAuthToken'

const store = configureStore({
    reducer : rootReducer
})

store.subscribe(() => {
    if(store.getState().authReducer.login && store.getState().authReducer.login['access'] ){
        let token,id , userDetails
        id = store.getState().authReducer.login.data.id
        token = store.getState().authReducer.login['access']
        userDetails = JSON.stringify(store.getState().authReducer.login.data)
         setAuthToken(token , id , userDetails)
      }
})
export default store