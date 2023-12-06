import React from "react";
import Inviteuser from "./components/Inviteuser";
import { Box } from '@mui/material'
import DashboardHeader from './components/Dashboardheader/DashboardHeader'
import FilterButtons from './components/FilterButtons/Filterbuttons'
import UserList from './components/UserData/UserList'

const Dashboard = () => {
   return (
    <React.Fragment>
            <Box sx={{
                mb :8
            }}>
                <DashboardHeader/>
            </Box>

            <Box sx={{
                mb : 8
            }}>
                <FilterButtons/>
            </Box>

            <UserList/>
    </React.Fragment>
   )
};

export default Dashboard;
