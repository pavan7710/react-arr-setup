import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Outlet } from 'react-router-dom';
import { Tooltip , Stack , Avatar } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import { USERICON } from 'src/assests/index'

const drawerWidth = 240;

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
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
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
  const theme = useTheme();
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
  }
}}  variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            { open ? <ChevronLeftIcon />  : <ChevronRightIcon /> }
          </IconButton>
        </DrawerHeader>
        <Stack sx={{
          mb :3
        }} direction="column" justifyContent="center" alignItems="center" spacing={2}>
          <Box sx={{
            pb :2
          }}>
            <Avatar alt="Remy Sharp" src={USERICON} />
          </Box>

          {open ? (
            <React.Fragment>
                 <p style={{
            fontSize : "16px",
            color : "#000",
            fontWeight : 400,
            margin : "0rem"
          }} >Pavan Bollineni</p>
          <p style={{
            margin : "0rem"
          }}>Admin</p>
            </React.Fragment>
          ) : null }
          
        </Stack>
        <List sx={{
          display : 'flex',
          flexDirection : 'column',
          height : '100%'
        }} >
          {['Dashboard'].map((text, index) => (
            <ListItem   key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ 
                  opacity: open ? 1 : 0,
                  display : open ? 'block' : 'none'
                  }} />
              </ListItemButton>
            </ListItem>
          ))}

         <Box sx={{
          display : 'flex',
          justifyContent : 'end',
          flexDirection : 'column',
          height : '100%',
        }}>
          <List>
          <ListItem  
                disablePadding 
                sx={{ 
                  display: 'block',
                  '&:hover' : {
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  },
                  mb : 1,
                  color : 'black'
                  }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <Tooltip title="Log Out">
                      <ListItemIcon 
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <LogoutIcon/>
                      </ListItemIcon>
                    </Tooltip>
                    <ListItemText primary="Log Out" sx={{ opacity: open ? 1 : 0, display : open ? 'block' : 'none'}} />
                  </ListItemButton>
            </ListItem>
          </List>
        </Box>
        </List>
      </Drawer>
      <Box sx={{flexGrow : 1 , padding:  open ? "1rem 1rem 1rem 1rem" : "1rem 1rem 1rem 5rem"  }}>
            <Outlet/>
      </Box>
      </Box>
  );
}