import * as types from './types'
import api from 'src/utlis/api'

export const create_user = (data , callback) => async ( dispatch ) => {
    dispatch({
        type : types.CREATE_USER
    })
    await api.post('/user/invite/user' , data).then(
        res => {
            callback(res)
            dispatch({
                type : types.SUCCESS_CREATE_USER,
                payload : res.data
            })
        },
        error => {
            callback(error)
        }
    )
}