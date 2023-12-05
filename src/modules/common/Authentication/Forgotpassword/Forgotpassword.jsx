import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { ReuseOutlinedInput as OutlinedInput } from "src/Components/ReuseOutlinedInput";
import { useNavigate } from "react-router-dom";
import { Grid, FormControl, FormHelperText } from "@mui/material";
import { LOGO , CROSS } from 'src/assests/index'
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import styles from "./forgot.module.scss";
import { emailValidation } from "src/utlis/RFvalidation";
import * as Yup from "yup";
import { useDispatch , useSelector } from 'react-redux'
import { forgot_password } from 'src/actions/Authentication/actions'
import LoadingButton from '@mui/lab/LoadingButton';
import { toast } from 'react-toastify'

const forgotSchema = Yup.object().shape({
  email: emailValidation,
});

export default function SignIn() {
  const navigate = useNavigate()
  const dataforgot = useSelector((state) => state.authReducer)

  const dispatch = useDispatch()
  const handleSubmit = (values , actions) => {
      dispatch( forgot_password(values , (res) => {
        if(res.status === 201){
          navigate('/confirmpassword')
          toast.success(res.data.message , {
            position: toast.POSITION.TOP_RIGHT
          } )
        }else{
        }
      } ))
  };
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

        <Grid className={styles.passwordforgot} item>
          <p className={styles.textforgot}>Forgot Password ?</p>
          <p className={styles.textplease}>
            Please enter your Email ID to send reset link
          </p>
        </Grid>

        <Grid item>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{
              mx: "auto",
            }}
          >
            <Grid item xs={12} sm={6} md={4}>
              <Formik
                initialValues={{ email: "" }}
                onSubmit={handleSubmit}
                validationSchema={forgotSchema}
              >
                {(props) => {
                  return (
                    <Form>
                      <FormControl
                        fullWidth
                        sx={{
                          marginBottom: "2.5rem",
                        }}
                      >
                        <OutlinedInput
                          type="email"
                          name="email"
                          error={props.touched.email && props.errors.email}
                          placeholder="Email ID"
                          fullWidth
                          id="email"
                          onChange={props.handleChange}
                          aria-describedby="outlined-email"
                          value={props.values.email}
                          onBlur={props.handleBlur}
                        />

                      {props.touched.email && props.errors.email ? (
                      <div className={styles.rooterror}>
                        <p className={styles.helpertextemailpassword}>
                          {props.errors.email}
                        </p>
                        <span className="questionmark">
                          <img src={CROSS} alt="cross" />
                        </span>
                      </div>
                    ) : null}
                     
                      </FormControl>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <LoadingButton
                          loading={dataforgot?.isLoading}
                          type="submit"
                          variant="contained"
                          sx={{
                            py: 2,
                            px: 8,
                          }}
                        >
                          Request Password reset
                        </LoadingButton>
                      </Box>

                      <Box
                        sx={{
                          marginBottom: "2.5rem",
                          display: "flex",
                          justifyContent: "center",
                          mr: "1.5rem",
                          mt: 5,
                          color: "#0075FF",
                        }}
                      >
                        <Link to="/login" underline="hover" variant="subtitle2">
                          Back to sign-in
                        </Link>
                      </Box>
                    </Form>
                  );
                }}
              </Formik>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
