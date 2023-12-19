
import * as types from './types'
import api from 'src/utlis/api'

export const list_user = (sort_by , sort_order , search , limit , offset) => async ( dispatch ) => {
    dispatch({
        type : types.CM_WIP_LEADS
    })
    await api.get(`/v1/users/9720/cm_wip_leads?page=1&search=&status=active&cm_id=&sm_id=&price_match_status=&designer_id=&score=&bu_head_approval=&category_bucket=%20&oc_category=`).then(
        res => {
            dispatch({
                type : types.SUCCESS_WIP_LEADS,
                payload : res.data
            })
        },
        error => {
            
        }
    )
}