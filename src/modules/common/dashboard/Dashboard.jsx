import React , {useEffect} from "react";
import { Box } from '@mui/material'
import DashboardHeader from './components/Dashboardheader/DashboardHeader'
import FilterButtons from './components/FilterButtons/Filterbuttons'
import UserList from './components/UserData/UserList'
import { useDispatch } from  'react-redux'
import { useSelector } from 'react-redux'
import {  list_user } from 'src/actions/Cummunitymanager/actions'

const Dashboard = () => {
    const filterData = useSelector( (state) => state.dashboard )
    const {  offset , sort_by ,  search , sort_order }  = filterData.filterValues
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(list_user())
    },[])
   return (
    <React.Fragment>
            <Box sx={{
                mb :8
            }}>
                <DashboardHeader/>
            </Box>

            <Box sx={{
                mb : 3
            }}>
                <FilterButtons/>
            </Box>

        

            <UserList/>
    </React.Fragment>
   )
};

export default Dashboard;
