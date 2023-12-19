import * as types from 'src/actions/Cummunitymanager/types'


const initialState = {
    isLoading : false,
    wip_leads : {
        leads : []
    }
}

export const cummunitymanager = (state = initialState , action) => {
    const { type , payload } = action
    switch (type) {
        case types.SUCCESS_WIP_LEADS : 
            return {
                ...state,
                wip_leads : {
                    leads : payload.leads
                }
            }
        default:
            return state
    }
}