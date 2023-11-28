import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { ReuseOutlinedInput as OutlinedInput } from '../../../../Components/ReuseOutlinedInput'
import { Link , useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import logo from '../../../../assests/Logo/logo.png'

export default function SignIn() {


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/admin')
  }


  return (
    <React.Fragment>
      <Grid container justifyContent="center" alignItems="center" direction="column" sx={{
        minHeight : '100vh',
      }}>
        <Grid item sx={{
          marginBottom : '3rem'
        }}>
          <img src={logo} alt="logo" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <form autoComplete='off'>
              <OutlinedInput
                type = 'text'
                placeholder='Email ID'
                fullWidth={true}
                id="email"
                aria-describedby="outlined-email"
              />
              <OutlinedInput
                type='password'
                placeholder='Password'
                fullWidth={true}
                id="password"
                aria-describedby="outlined-password"
              
              />
              <Box sx={{
                marginBottom : '2.5rem',
                display : 'flex',
                justifyContent :'end'
              }}>
                <Link       
                  underline="hover"
                  variant="subtitle2"
                  >
                  Forgot Password
                </Link>
              </Box>
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
                  px :5
                }}
                >
                  Login
                </Button>
              </Box>
            </form>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}