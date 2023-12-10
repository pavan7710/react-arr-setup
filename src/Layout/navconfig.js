import React  from 'react'
import { ANALYTICS_ATIVE , ANA_INACTIVE , PROJECT_ACTIVE , PROJECT_INACTIVE , USER_ACTIVE , USER_INACTIVE } from 'src/assests/index'
export function useNavData() {
    let data , role
    role = localStorage.getItem('role')
    switch(role){
        case 'community_manager' : 
        return data = [
          {  title : "Dashboard" ,  path : '/dashboard' , icon_inactive : USER_INACTIVE, icon_active : USER_ACTIVE   },
          {  title : "BOQ Comparision Tool" ,  path : '/boq_comparision_tool' , icon_inactive : USER_INACTIVE, icon_active : USER_ACTIVE   },
          {  title : "WIP" ,  path : '/wip' , icon_inactive : USER_INACTIVE, icon_active : USER_ACTIVE   },
          {  title : "Escalations" ,  path : '/escalations' , icon_inactive : USER_INACTIVE, icon_active : USER_ACTIVE   },
          {  title : "CM Variable Margins Data" ,  path : '/cm_variable_margins_data' , icon_inactive : USER_INACTIVE, icon_active : USER_ACTIVE   },
          {  title : "Training Materail" ,  path : '/training_materail' , icon_inactive : USER_INACTIVE, icon_active : USER_ACTIVE   },
          {  title : "GM Dashboard" ,  path : '/gm_dashboard' , icon_inactive : USER_INACTIVE, icon_active : USER_ACTIVE   },
          {  title : "Calendar" ,  path : '/calender' , icon_inactive : USER_INACTIVE, icon_active : USER_ACTIVE   },
          {  title : "NOC Screen" ,  path : '/noc_screen' , icon_inactive : USER_INACTIVE, icon_active : USER_ACTIVE   },
          {  title : "Designer Dashboard" ,  path : '/designer_dashboard' , icon_inactive : USER_INACTIVE, icon_active : USER_ACTIVE   },
          {  title : "OPS Dashboard" ,  path : '/ops_dashboard' , icon_inactive : USER_INACTIVE, icon_active : USER_ACTIVE   },
          {  title : "Stack Dashboard" ,  path : '/stack_dashboard' , icon_inactive : USER_INACTIVE, icon_active : USER_ACTIVE   },
          {  title : "Catalogue" ,  path : '/catalogue' , icon_inactive : USER_INACTIVE, icon_active : USER_ACTIVE   },
          {  title : "Detailed Information" ,  path : '/detailed_information' , icon_inactive : USER_INACTIVE, icon_active : USER_ACTIVE   },
          {  title : "Designers" ,  path : '/designers' , icon_inactive : USER_INACTIVE, icon_active : USER_ACTIVE   },
      ]
      case 'business_head' : 
        return data = [
          {  title : "Dashboard" ,  path : '/dashboard' , icon_inactive : USER_INACTIVE, icon_active : USER_ACTIVE   },
        ]
        default :
          return [ ]
    }
}
