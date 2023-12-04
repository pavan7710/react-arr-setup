import * as types from 'src/actions/Authentication/types'


let token = localStorage.getItem("token")

const initialState = {
    isLoading : false,
    isLogin : token ? true : false,
    login : {}
}

export const authReducer = (state = initialState , action) => {
    const { type , payload } = action

    switch(type){
        case types.LOGIN:
            return {
                ...state,
                isLoading : true
            }
        case types.SUCCESS_LOGIN:
            return {
                ...state,
                isLoading : false,
                login : payload
            }
        case types.LOGIN_FAIL:
            return {
                ...state,
                isLogin : false,
                isLoading : false,
                login : {}
            }
        default:
            return state
    }
}