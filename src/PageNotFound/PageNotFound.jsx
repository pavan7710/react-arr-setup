import React from 'react'
import pagenotfound from '../assests/Logo/pagenotfound.png'
import { Grid  , Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import './pagenotfound.scss'



const PageNotFound = () => {
    const navigate = useNavigate()
   const gotohome = () => {
    navigate('/dashboard')
   } 

  return (
    <React.Fragment>
        <Grid className='bg-color' sx={{
            height :'100vh'
        }} container justifyContent="center" alignItems="center" direction="column">
            <Grid  className='img-bottom' item sx={12} >
                <img className='img-fluid' src={pagenotfound} alt='page_not_found' />
            </Grid>

            <Grid item sx={12}>
                <p>
                    <span className='error_text'>ERROR.</span>
                    <span className='page_not_found'>Page not found</span>
                </p>
            </Grid>

            <Grid item sx={12}>
                <Button 
                    onClick={gotohome}
                  variant="contained"
                  sx={{  textTransform : 'capitalize' , fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal", color : 'white', 
                  borderRadius : '40px',
                  py : 2,
                  px :5,
                  mt :3
                }}
                >
                  Go to Home
                </Button>
            </Grid>

        </Grid>
    </React.Fragment>

  )
}

export default PageNotFound