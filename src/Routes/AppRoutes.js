import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "./Routeconfig";
import PageNotFound from "../PageNotFound/PageNotFound";
import Sidenav from "src/Layout/Sidenav";
import Dashboard from "src/modules/common/dashboard/Dashboard";

const AppRoutes = () => {
  const getPublicRoutes = () => {
    return PublicRoutes.map((route) => {
      return (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
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
      {getPublicRoutes()}
      {PrivateRoutes.map((route) => {
        return (
          // <Route
          //   key={route.path}
          //   element={<RoleAuth allowedRoles={route.roles} />}
          // >
          //   <Route
          //     path={route.path}
          //     element={
          //       route?.layout ? (
          //         <RouteWithLayout
          //           layout={route.layout}
          //           component={route.component}
          //         />
          //       ) : (
          //         <route.component />
          //       )
          //     }
          //   ></Route>
          // </Route>

          <Route element={<Sidenav/>}>
            <Route  path="/dashboard" element={<Dashboard />} />
          </Route>


        );
      })}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
