import React , {useEffect} from "react";
import { Box } from '@mui/material'
import DashboardHeader from './components/Dashboardheader/DashboardHeader'
import FilterButtons from './components/FilterButtons/Filterbuttons'
import UserList from './components/UserData/UserList'
import { useDispatch } from  'react-redux'
import { list_user } from 'src/actions/Dashboard/actions'

const Dashboard = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(list_user('' , 'asc' , '' , '10' , '0' ))
    },[])
   return (
    <React.Fragment>
            <Box sx={{
                mb :8
            }}>
                <DashboardHeader/>
            </Box>

            <Box sx={{
                mb : 5
            }}>
                <FilterButtons/>
            </Box>
            <UserList/>
    </React.Fragment>
   )
};

export default Dashboard;
