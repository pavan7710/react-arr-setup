import Login from '../modules/common/Authentication/Login/Login'
import Admin from '../modules/admin/admin'
import Salesmanager from '../modules/salesmanager/Salesmanager'
import HomeLayout from '../Layout/HomeLayout'
import Dashboard from '../modules/common/dashboard/Dashboard'
import Forgotpassword from '../modules/common/Authentication/Forgotpassword/Forgotpassword'

export const PublicRoutes = [
    {path : '/' ,  component : Login , layout : 'null'},
    {path : '/login' ,  component : Login , layout : 'null'},
    {path : '/forgotpassword' ,  component : Forgotpassword , layout : 'null'},
  ]
  
  
 export  const PrivateRoutes = [
    {
      path : '/admin', 
      component : Admin, 
      layout : HomeLayout,
      roles : ['admin']
    },
    {
      path : '/salesmanager', 
      component : Salesmanager, 
      layout : HomeLayout,
      roles : ['sales_manager']
    },
    {
      path : '/dashboard',
      component : Dashboard,
      layout : HomeLayout,
      roles : ['admin' , 'sales_manager']
    }
  ]
