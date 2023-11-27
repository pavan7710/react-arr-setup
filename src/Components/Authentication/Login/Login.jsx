import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Paper } from '@mui/material'


export default function SignIn() {
  return (
      <Container sx={{
      }}  maxWidth="xs" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' , maxWidth : '600px' }} >
        <Box  style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <form>
            <OutlinedInput
              type = 'text'
              placeholder='Email ID'
              sx={{
                "&.MuiInputBase-root" : {
                  borderRadius : '40px',
                  backgroundColor : '#F3F3F3',
                  marginBottom : '3rem',
                  color: 'black',
                  fontSize : '15px',
                  fontStyle : 'normal',
                  fontWeight : '400'
                }, 
                ".MuiInputBase-input" : {
                  padding : '1.5rem 2rem',
                },
                "& input::placeholder": {
                  color: "#A1A1A1"
                },
              }}
              fullWidth={true}
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
            />
            <OutlinedInput
              type='password'
                sx={{
                  "&.MuiInputBase-root" : {
                    borderRadius : '40px',
                    backgroundColor : '#F3F3F3',
                    color: 'black',
                    fontSize : '15px',
                    fontStyle : 'normal',
                    fontWeight : '400'
                  },
                  ".MuiInputBase-input" : {
                    padding : '1.5rem 2rem',
                  },
                  "& input::placeholder": {
                    color: "#A1A1A1"
                  }
                }}
              placeholder='Password'
              fullWidth={true}
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 , textTransform : 'capitalize' , fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal", color : 'white' }}
            >
              Sign In
            </Button>
          </form>
        </Box>
      </Container>
  );
}