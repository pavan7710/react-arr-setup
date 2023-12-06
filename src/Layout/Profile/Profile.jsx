import React from 'react'
import { Avatar , Box , Stack  } from '@mui/material'
import { USERICON  } from 'src/assests/index'
import styles from './profile.module.scss'

const Profile = ({open}) => {
  return (
    <Stack sx={{
      mb : open ? 3 : '',
      cursor : "pointer"
    }}  className={styles.rootprofile}  direction="column" justifyContent="center" alignItems="center" spacing={2}>
        <Box className={styles.user}>
          <Avatar alt="Remy Sharp" src={USERICON} />
        </Box>

        {open ? (
          <React.Fragment>
               <p className={styles.username}  >Pavan Bollineni</p>
        <p className={styles.role} style={{
          margin : "0rem",
          fontSize :"10px"
        }}>Admin</p>
          </React.Fragment>
        ) : null }
        
      </Stack>
  )
}

export default Profile