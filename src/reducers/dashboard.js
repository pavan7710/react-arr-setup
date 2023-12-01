import * as types from 'src/actions/Dashboard/types'


const initialState = {
    isLoading : false,
}

export const dashboard = (state = initialState , action) => {
    const { type , payload } = action

    switch (type) {
        case types.CREATE_USER:
            return {
                ...state,
                isLoading : true
            }
        case types.SUCCESS_CREATE_USER:
            return {
                ...state,
                isLoading : false
            }
        
        default:
            return state
    }
}