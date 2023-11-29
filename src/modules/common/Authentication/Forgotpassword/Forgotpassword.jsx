import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { ReuseOutlinedInput as OutlinedInput } from '../../../../Components/ReuseOutlinedInput'
import {  useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import logo from '../../../../assests/Logo/logo.png'
import { Formik , Form } from 'formik';
import { Link } from 'react-router-dom'
import styles from './forgot.module.scss'


export default function SignIn() {
    const handleSubmit = () => {

    }
  return (
    <React.Fragment>
        <Grid container justifyContent="center" direction="column" sx={{
            minHeight : '100vh',
        }} >
            <Grid item >
                <Grid container justifyContent="center">
                    <Grid  item  xs={12} sm={6} md={4} sx={{
                    }}>
                        <Box sx={{
                            display : 'flex',
                            justifyContent : 'center'
                        }}>
                            <img src={logo} alt="logo" />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>

            {/* <Grid className={styles.passwordforgot} item>
                <p className={styles.textforgot} >Forgot Password ?</p>
                <p className={styles.textplease} >Please enter your Email ID to send reset link</p>
            </Grid>

            <Grid item>
                <Grid container justifyContent="center" alignItems="center"   sx={{
                mx:'auto'
            }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Formik
                        initialValues={{email : ''}}
                        onSubmit={handleSubmit}
                    >
                        {props => {
                            return (
                    <Form autoComplete='off'>
                        <Box>
                        <OutlinedInput
                            type = 'text'
                            placeholder='Email ID'
                            fullWidth
                            id="email"
                            aria-describedby="outlined-email"
                        />
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
                        borderRadius : '40px',
                        py : 2,
                        px :8
                        }}
                        >
                        Request Password reset
                        </Button>
                    </Box>

                    <Box sx={{
                        marginBottom : '2.5rem',
                        display : 'flex',
                        justifyContent :'center',
                        mr :'1.5rem',
                        mt : 5,
                        color : '#0075FF'
                    }}>
                        <Link    
                        to = '/login'   
                        underline="hover"
                        variant="subtitle2"
                        >
                        Back to sign-in
                        </Link>
                    </Box>
                </Form>
                            )
                        }}
                    </Formik>
                </Grid>
                </Grid>
            </Grid> */}

            <Grid item className={styles.conformation} >
                <Box className={styles.contop} >
                    <p>Check your mail for reset link!</p>
                    <p>a reset link has been sent to Maxxxxxxxx@ciao.com</p>
                    <p>Click the reset link to reset password</p>
                    <p className= {styles.didreceive} >Didn’t receive an email?</p>
                </Box>
            </Grid>




        </Grid>


      




    

    </React.Fragment>
  );
}