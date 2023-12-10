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
                isLogin : true,
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
        case types.FORGOT_PASSWORD :
            return {
                ...state,
                isLoading : true
            }
        case types.SUCCESS_FORGOT_PASSWORD : 
            return {
                ...state,
                isLoading : false
            }
        case types.RESET_PASSWORD :
            return {
                ...state,
                isLoading : true
            }
        case types.SUCCESS_RESET_PASSWORD : 
            return {
                ...state,
                isLoading : false
            }
        default:
            return state
    }
}