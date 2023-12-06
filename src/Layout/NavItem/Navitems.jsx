import React from 'react'
import { List , ListItem , ListItemIcon , ListItemText , ListItemButton , Tooltip , Box  } from "@mui/material"
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LogoutIcon from '@mui/icons-material/Logout';
import {  useNavigate , useLocation } from 'react-router-dom'

const Navitems = ({open , data}) => {
    const navigate = useNavigate()
    const location = useLocation()
    const {pathname} = location

    console.log(pathname.split('/'))
  
    const heading = pathname.split('/')[1]
  
    console.log(heading , 'heading')

  return (
     <List sx={{
          display : 'flex',
          flexDirection : 'column',
          height : '100%',
          pt : 0
        }} >
          {data.map((text, index) => {

            const active = text.path ? ( pathname === text.path  ) : false

            return (
                <ListItem  
                divider  
                key={index} 
                disablePadding 
                sx={{ display: 'block' , color : active ? '#5AB95D' : 'black' }}>
              <ListItemButton
                onClick={ (e) => {
                    e.stopPropagation()
                    navigate(text.path)
                }  }
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  py : 3
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


                <ListItemText primary={text.title} sx={{ 
                  opacity: open ? 1 : 0,
                  display : open ? 'block' : 'none'
                  }} />
              </ListItemButton>
            </ListItem>
            )
          })}

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

  )
}

export default Navitems