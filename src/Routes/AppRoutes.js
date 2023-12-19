import React from "react";
import { Routes, Route, Outlet , Navigate } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "./Routeconfig";
import PageNotFound from "../PageNotFound/PageNotFound";
import Sidenav from "src/Layout/Sidenav";
import { useSelector } from 'react-redux'
import PrivateRoute from "src/routeguard/privateroute";

const AppRoutes = () => {

  const auth = useSelector((state) => state.authReducer)

  const isLogedin = auth.isLogin

  console.log(isLogedin)

  const getPublicRoutes = () => {
    return PublicRoutes.map((route) => {
      return (
        <Route
          key={route.path}
          path={route.path}
          element={route.component}
        ></Route>
      );
    });
  };
  const RouteWithLayout = ({
    layout: Layout,
    component: Component,
    ...rest
  }) => {
    return (
      <Layout>
        <Component {...rest} />
      </Layout>
    );
  };
  const RoleAuth = ({ allowedRoles }) => {
    const auth = "admin";
    return allowedRoles.find((role) => auth === role) ? (
      <Outlet />
    ) : (
      <PageNotFound />
    );
  };

  return (
    <Routes>
      <Route  path="/"   element={<Navigate to="/login"/>}  />
      {getPublicRoutes()}


      <Route element ={ <PrivateRoute isLogedin={isLogedin} />} >
        <Route element={<Sidenav/>}>
          {PrivateRoutes.map( (route) => {
            return (
              <Route key={route.path} element={<RoleAuth allowedRoles={route.roles}/> }>
                  <Route  path={route.path} element={route.component} />
              </Route>
            )
          } )}
        </Route>
      </Route>
      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes;
