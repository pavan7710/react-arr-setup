import Login from './modules/common/Authentication/Login/Login'
import Admin from './modules/admin/admin'
import Salesmanager from './modules/salesmanager/Salesmanager'
import HomeLayout from './Layout/HomeLayout'

export const PublicRoutes = [
    {path : '/' ,  component : Login , layout : 'null'  },
    {path : '/login' ,  component : Login , layout : 'null'  },
  ]
  
  
 export  const PrivateRoutes = [
    {
    path : '/admin', 
    component : Admin, 
    layout : HomeLayout,
    roles : ['admin' , 'sales_manager']
    },
    {
    path : '/salesmanager', 
    component : Salesmanager, 
    layout : HomeLayout,
    roles : ['sales_manager']
    },
  ]
