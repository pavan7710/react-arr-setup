import React from "react";
import Inviteuser from "./components/Inviteuser";
import { Box } from '@mui/material'
import DashboardHeader from './components/Dashboardheader/DashboardHeader'
import FilterButtons from './components/FilterButtons/Filterbuttons'

const Dashboard = () => {
   return (
    <React.Fragment>
            <Box sx={{
                mb :8
            }}>
                <DashboardHeader/>
            </Box>
            <FilterButtons/>
    </React.Fragment>
   )
};

export default Dashboard;
