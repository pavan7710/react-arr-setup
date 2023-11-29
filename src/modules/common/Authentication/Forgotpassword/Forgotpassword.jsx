import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { ReuseOutlinedInput as OutlinedInput } from '../../../../Components/ReuseOutlinedInput'
import { Link , useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import logo from '../../../../assests/Logo/logo.png'
import styles from  './forgot.module.scss'

const  Forgotpassword = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/dashboard')
  }
  return (
    <React.Fragment>
      <Grid  container justifyContent="center" alignItems="center" direction="column" sx={{
        minHeight : '100vh',
      }}>
        <Grid item sx={{
          marginBottom : '2rem'
        }}>
          <img src={logo} alt="logo" />
        </Grid>

        <Grid className={styles.passwordforgot} item xs={12} sm={6} md={4}>
            <p className= {styles.textforgot} >Forgot Password ?</p>
            <p className= {styles.textplease}>Please enter your Email ID to send reset link </p>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
        <form autoComplete='off'>
              <OutlinedInput
                type='email'
                placeholder='Email ID'
                fullWidth={true}
                id="email"
                aria-describedby="outlined-email"
              
              />
             
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
                  px :3
                }}
                >
                  Request Password reset
                </Button>
              </Box>

                <Box>
                    <p>Back to sign-in</p>
                </Box>

          </form>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Forgotpassword