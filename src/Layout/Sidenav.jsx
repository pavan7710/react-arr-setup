import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { Outlet } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import Profile from './Profile/Profile'
import Navitems from './NavItem/Navitems';
import { useNavData } from './navconfig'

const drawerWidth = 320;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidenav() {

  const sxstyles = {
    chevLeftRightStyles : {
      backgroundColor : "#686868",
      color : "white",
      "&.MuiButtonBase-root" : {
        borderRadius : "unset",
        borderTopLeftRadius : "17px",
        borderBottomLeftRadius : "17px",
        left : "0.5rem",
      },
      "&.MuiButtonBase-root:hover" : {
          backgroundColor: '#686868',
      },
    },
    icons : {
      "&.MuiSvgIcon-root" : {
        fontSize : "2rem"
      }
    }
  }
  const theme = useTheme();
  const navData = useNavData();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  return (
    <Box   sx={{display : 'flex'}} >
      <CssBaseline />
      <Drawer  PaperProps={{
  sx : {
    backgroundColor: '#fff',
    borderRight : 'none',
    boxShadow: "0px 4px 21px 0px rgba(0, 0, 0, 0.25)",
    margin :"1rem",
    height : "95%",
    borderRadius : "10px",
    ".MuiDrawer-paper" : {
      margin : '1rem'
    } 
  }
}}  variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton sx={sxstyles.chevLeftRightStyles} onClick={handleDrawerClose}>
            { open ? <ChevronLeftIcon   />  : <ChevronRightIcon /> }
          </IconButton>
        </DrawerHeader>
          <Profile open={open} />        
          <Divider/>
        <Navitems data={navData} open={open} />
      </Drawer>
      <Box sx={{flexGrow : 1 , padding:  open ? "1rem 1rem 1rem 2rem" : "1rem 1rem 1rem 2rem"  }}>
            <Outlet/>
      </Box>
      </Box>
  );
}