import React  from 'react'
import { ANALYTICS_ATIVE , ANA_INACTIVE , PROJECT_ACTIVE , PROJECT_INACTIVE , USER_ACTIVE , USER_INACTIVE } from 'src/assests/index'
export function useNavData() {
    const data = [
        {  title : "Dashboard" ,  path : '/dashboard' , icon_inactive : USER_INACTIVE, icon_active : USER_ACTIVE   },
        {  title : "Analytics" ,  path : '/analytics' , icon_inactive : ANA_INACTIVE, icon_active : ANALYTICS_ATIVE  },
        {  title : "Project" ,  path : '/project' , icon_inactive : PROJECT_INACTIVE, icon_active : PROJECT_ACTIVE },
    ]
  return data;
}
