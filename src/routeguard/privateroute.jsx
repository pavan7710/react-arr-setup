import React , {useState , useEffect  } from 'react';
import {  useDispatch } from 'react-redux'
import { Navigate , Outlet } from 'react-router-dom';

const PrivateRoute = (props) => {
    return props.isLogedin ? <Outlet/> : <Navigate to='/login'/>
}
export default  PrivateRoute
