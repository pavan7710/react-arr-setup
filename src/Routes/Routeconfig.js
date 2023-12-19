import Login from "../modules/common/Authentication/Login/Login";
import Admin from "../modules/admin/admin";
import Salesmanager from "../modules/salesmanager/Salesmanager";
import Dashboard from "../modules/common/dashboard/Dashboard";
import Forgotpassword from "../modules/common/Authentication/Forgotpassword/Forgotpassword";
import ResetPassword from "../modules/common/Authentication/ResetPassword/ResetPassword";
import UpdatedSuccessfully from "../modules/common/Authentication/UpdatedSuccessfully/Updated";
import Success from "../modules/common/Authentication/SuccessScreen/Success"
import PageNotFound from "src/PageNotFound/PageNotFound";
import LeadDetails from "src/modules/common/LeadDetails";


export const PublicRoutes = [
  { path: "/login", component: <Login/> },
  { path: "/forgotpassword", component: <Forgotpassword/> },
  { path: "/resetPassword", component: <ResetPassword/> },
  { path: "/success", component: <Success/> },
  {
    path: "/updatedsuccessfully",
    component: <UpdatedSuccessfully/>,
  },
];

export const PrivateRoutes = [
  {
    path: "/admin",
    component: <Admin/>,
    roles: ["admin"],
  },
  {
    path: "/salesmanager",
    component: <Salesmanager/>,
    roles: ["sales_manager"],
  },
  {
    path: "/dashboard",
    component: <Dashboard/>,
    roles: ["admin", "sales_manager"],
  },
  {
    path: "/dashboard/:id",
    component: <LeadDetails/>,
    roles: ["admin", "sales_manager"],
  },
  {
    path: "*",
    component: <PageNotFound/>,
    roles: ["admin", "sales_manager"],
  },
];
