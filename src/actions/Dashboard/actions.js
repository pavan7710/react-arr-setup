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
export const list_user = (sort_by , sort_order , search , limit , offset) => async ( dispatch ) => {
    dispatch({
        type : types.LIST_USER
    })


    // /user/user/list/search/and/sort?sort_by=&sort_order=&search=&limit=10&offset=0

    await api.get(`/user/user/list/search/and/sort?sort_by=${sort_by}&sort_order=${sort_order}&search=${search}&limit=${limit}&offset=${offset}`).then(
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