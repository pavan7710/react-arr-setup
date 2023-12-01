import { configureStore } from  '@reduxjs/toolkit'
import rootReducer from 'src/reducers/rootreducers'


const store = configureStore({
    reducer : rootReducer
})

export default store