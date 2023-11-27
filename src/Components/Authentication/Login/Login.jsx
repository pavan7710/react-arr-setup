import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { ReuseOutlinedInput as OutlinedInput } from '../../ReuseComponents/ReuseOutlinedInput'
import { Link } from 'react-router-dom';
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
              <Button
                type="submit"
                variant="contained"
                sx={{  textTransform : 'capitalize' , fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal", color : 'white', 
              }}
              >
                Sign In
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
  );
}