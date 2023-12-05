import React , {useState} from "react";
import Box from "@mui/material/Box";
import { useNavigate ,Link } from "react-router-dom";
import { Grid, FormControl, FormHelperText } from "@mui/material";
import { LOGO } from 'src/assests/index'

import styles from "./Success.module.scss";



export default function Success() {

  return (
    <React.Fragment>
      <Grid
        container
        justifyContent="center"
        direction="column"
        sx={{
          minHeight: "100vh",
        }}
      >
        <Grid item>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={6} md={4} sx={{}}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src={LOGO} alt="logo" />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={styles.conformation} >
            <Box className={styles.contop} >
                <p>Check your mail for reset link!</p>
                <p>a reset link has been sent to Maxxxxxxxx@ciao.com</p>
                <p>Click the reset link to reset password</p>
                <Link  to='/forgotpassword' className= {styles.didreceive} >Didn’t receive an email?</Link>
            </Box>
        </Grid>

      </Grid>
    </React.Fragment>
  );
}
