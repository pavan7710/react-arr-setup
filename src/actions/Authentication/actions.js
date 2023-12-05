import * as types from './types'
import api from 'src/utlis/api'


export const login_user = (data , callback) => async ( dispatch ) => {
    dispatch({
        type : types.LOGIN
    })
    await api.post('/user/login' , data).then(
        res => {
            callback(res)
            dispatch({
                type : types.SUCCESS_LOGIN,
                payload : res.data
            })
        },
        error => {
            callback(error)
            dispatch({
                type : types.LOGIN_FAIL
            })
        }
    )
}

export const forgot_password = (data , callback) => async ( dispatch ) => {
    dispatch({
        type : types.FORGOT_PASSWORD
    })
    await api.post('/user/password/reset/send/verification' , data).then(
        res => {
            callback(res)
            dispatch({
                type : types.SUCCESS_FORGOT_PASSWORD,
                payload : res.data
            })
        },
        error => {
            callback(error)
        }
    )
}

export const reset_password = (data , callback) => async (dispatch) => {
    dispatch({
        type : types.RESET_PASSWORD
    })

    await api.post('/user/password/reset' , data).then(
        res => {
            callback(res)
            dispatch({
                type : types.SUCCESS_RESET_PASSWORD,
                payload : res.data
            })
        },
        error => {
            callback(error)
        }
    )
} 