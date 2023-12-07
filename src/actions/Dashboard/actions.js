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
export const list_user = () => async ( dispatch ) => {
    dispatch({
        type : types.LIST_USER
    })
    await api.get('/user/user/list/with/search?search=&limit=10&offset=0').then(
        res => {
            dispatch({
                type : types.SUCCESS_LIST_USER,
                payload : res.data
            })
        },
        error => {
            
        }
    )
}