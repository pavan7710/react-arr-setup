import * as types from 'src/actions/Dashboard/types'


const initialState = {
    isLoading : false,
    users : {},
    filterValues : {
        sort_by : '',
        sort_order : '',
        search : '',
        limit : '10',
        offset :  ''   
    }
}

export const dashboard = (state = initialState , action) => {
    const { type , payload } = action
    switch (type) {
        case 'OPEN_CLOSE_INVITE_DIALOG' : 
            return {
                ...state,
                openClose : payload   
            }
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
        
        case types.LIST_USER:
            return {
                ...state,
                isLoading : true
            }
        case types.SUCCESS_LIST_USER:
            return {
                ...state,
                isLoading : false,
                users : payload
            }
        case 'DASHBOARD_FILTER' : {
            return {
                ...state,
                filterValues : {
                    sort_by : payload.sort_by,
                    sort_order : payload.sort_order,
                    search : payload.search,
                    limit : payload.limit,
                    offset : payload.offset                 
                }
            }
        }
        default:
            return state
    }
}