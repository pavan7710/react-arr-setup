import React  from 'react';
import {  useNavigate } from 'react-router-dom';
import { Grid , Button , Box } from '@mui/material';
import logo from '../../../../assests/Logo/logo.png'
import styles from './Updated.module.scss';
import lock from '../../../../assests/Logo/reset-password 1.png'




export default function SignIn() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/login')
  }

  return (
    <React.Fragment>
      <Grid container justifyContent="center" alignItems="center" direction="column" sx={{
        minHeight : '100vh',
      }}>
        <Grid item>
          <img src={logo} alt="logo" />
        </Grid>

        <Grid item className={styles.lockimage}>
            <img src={lock} alt = "lock" />
        </Grid>

        <Grid className={styles.successfully} item xs={12} sm={6} md={4}>
            <p>Password has been successfully</p>
            <p>updated!</p>
        </Grid>

       
        <Box sx={{
                display : 'flex',
                justifyContent : 'center'
              }}>
                <Button onClick={handleSubmit}
                  type="submit"
                  variant="contained"
                  sx={{  textTransform : 'capitalize' , fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal", color : 'white', 
                  borderRadius : '40px',
                  py : 2,
                  px :12
                }}
                >
                  Sign-In
                </Button>
        </Box>

     
      </Grid>
    </React.Fragment>
  );
}