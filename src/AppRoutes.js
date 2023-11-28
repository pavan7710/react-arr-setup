import React from 'react'
import { Routes , Route  , Outlet } from 'react-router-dom'
import {  PublicRoutes , PrivateRoutes  } from './Routeconfig'
import PageNotFound from './PageNotFound/PageNotFound'



const AppRoutes = () => {
    const getPublicRoutes = () => {
        return PublicRoutes.map((route) => {
            return (
                <Route key={route.path}
                path={route.path}
                element={<route.component/> } 
                >
                </Route>
            )
        })
    }
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


    // const TokenAuth = () => {
    //   const token = true;
    //   return token ? <Outlet /> : window.location.replace('/login');
    // };
    
    const RoleAuth = ({ allowedRoles }) => {
      const auth = 'admin';
      return allowedRoles.find((role) =>  auth === role ) ? (
        <Outlet />
      ) : (
        <PageNotFound/>
      );
    };


  return (
    <Routes>
          {getPublicRoutes()}
          {PrivateRoutes.map((route) => {
            return (
                  <Route key={route.path} element= { <RoleAuth allowedRoles={route.roles} /> } >
                      <Route path={route.path}
                    element={
                        route?.layout ? (
                          <RouteWithLayout
                          layout={route.layout}
                          component={route.component}
                          />
                        ) : (
                          <route.component/>
                        )
                      }
                    >
                    </Route>
                  </Route>
            )
          })}
        <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  )
}

export default AppRoutes
  