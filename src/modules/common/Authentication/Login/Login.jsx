import React, { useState } from "react";
import Box from "@mui/material/Box";
import { ReuseOutlinedInput as OutlinedInput } from "src/Components/ReuseOutlinedInput";
import { passwordValidationSchema , emailValidation } from "src/utlis/RFvalidation";
import { Link, useNavigate } from "react-router-dom";
import {
  Grid,
  FormControl,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { LOGO, CROSS, VECTOR } from "src/assests/index";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import styles from "./login.module.scss";
import { login_user } from 'src/actions/Authentication/actions'
import {  useDispatch , useSelector } from 'react-redux'
import LoadingButton from '@mui/lab/LoadingButton';
import { toast } from 'react-toastify'

const loginSchema = Yup.object().shape({
  email: emailValidation,
  password: passwordValidationSchema,
});

export default function SignIn() {
  const dispatch = useDispatch()
  const loginData =  useSelector((state) => state.authReducer)
  const navigate = useNavigate();
  const handleSubmit = (values, actions, isValid) => {
    dispatch(login_user(values , (res) => {
      if(res.status === 200){
        navigate('/dashboard')
        toast.success(res.data.message , {
          position: toast.POSITION.TOP_RIGHT
        } )
      }else{
        toast.error( res.response.data.message , {
          position: toast.POSITION.TOP_RIGHT
        } )
      }
    } ) )
  };

  const [showPassword, setshowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setshowPassword(!showPassword);
  };

  return (
    <React.Fragment>
      <Grid
        className={styles.rootgrid}
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        
      >
        <Grid className= {styles.imageItem} item>
          <img src={LOGO} alt="logo" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            {(props) => {
              return (
                <Form>
                  <FormControl
                    sx={{
                      marginBottom:  props.touched.email && props.errors.email ? '1rem' : '3rem' ,
                    }}
                    fullWidth
                  >
                    <OutlinedInput
                      type="email"
                      name="email"
                      error={props.touched.email && props.errors.email}
                      placeholder="Email ID"
                      fullWidth={true}
                      id="email"
                      onChange={props.handleChange}
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

                  <FormControl
                    sx={{
                      marginBottom: "1rem",
                    }}
                    fullWidth
                  >
                    <OutlinedInput
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      fullWidth={true}
                      id="password"
                      aria-describedby="outlined-password"
                      value={props.values.password}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleTogglePasswordVisibility}
                            edge="end"
                          >
                            {showPassword ? (
                              <VisibilityIcon />
                            ) : (
                              <VisibilityOffIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      error={props.touched.password && props.errors.password}
                    />
                    {props.touched.password && props.errors.password ? (
                      <div className={styles.rooterror}>
                        <p className={styles.helpertextemailpassword}>
                          {props.errors.password}
                        </p>
                        <span className="questionmark">
                          <img src={VECTOR} alt="cross" />
                        </span>
                      </div>
                    ) : null}
                  </FormControl>

                  <Box
                    className={styles.forgotpassword}
                  >
                    <Link
                      to="/forgotpassword"
                      underline="hover"
                      variant="subtitle2"
                    >
                      Forgot Password
                    </Link>
                  </Box>
                  <Box className={styles.loginbutton}>
                  <LoadingButton type='submit' variant='contained' loading={loginData?.isLoading}
                      sx={{
                        py: 2,
                        px: 12,
                      }} > 
                      Login
                    </LoadingButton>
                  </Box>
                </Form>
              );
            }}
          </Formik>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
