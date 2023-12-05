import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { ReuseOutlinedInput as OutlinedInput } from "../../../../Components/ReuseOutlinedInput";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  FormHelperText,
  FormControl,
  InputAdornment,
  IconButton,
} from "@mui/material";
import logo from "../../../../assests/Logo/logo.png";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import styles from "./resetpassword.module.scss";
import { passwordValidationSchema , emailValidation } from "src/utlis/RFvalidation";
import {  Link } from 'react-router-dom'
import { LOGO , CROSS  } from 'src/assests/index'
import LoadingButton from '@mui/lab/LoadingButton';
import { useSelector , useDispatch } from 'react-redux'
import { reset_password } from 'src/actions/Authentication/actions'
import { toast } from 'react-toastify'

const passwordSchema = Yup.object().shape({
  email : emailValidation,
  new_password: passwordValidationSchema,
  confirm_password: Yup.string()
    .oneOf([Yup.ref("new_password"), null], "Passwords must match")
    .required("Required"),
});

export default function Resetpassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const resetData = useSelector((state) => state.authReducer)

  const handleSubmit = (values, actions) => {
    dispatch( reset_password(values , (res) => {
      if(res.status === 200){
        navigate('/updatedsuccessfully')
        toast.success(res.data.message , {
          position: toast.POSITION.TOP_RIGHT
        } )
      }else{
      }
    } ))
  };
  const [showPassword, setshowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setshowPassword(!showPassword);
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
          <p className={styles.textforgot}>Reset Password ?</p>
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
                initialValues={{ email: "" , new_password : "" , confirm_password : ""  }}
                onSubmit={handleSubmit}
                validationSchema={passwordSchema}
              >
                {(props) => {
                  return (
                    <Form>
                      <FormControl
                        fullWidth
                        sx={{
                          marginBottom: "1.5rem",
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

                      <FormControl
                        fullWidth
                        sx={{
                          marginBottom: "1.5rem",
                        }}
                      >
                        <OutlinedInput
                          type="password"
                          name="new_password"
                          error={props.touched.new_password && props.errors.new_password}
                          placeholder="new_password"
                          fullWidth
                          id="new_password"
                          onChange={props.handleChange}
                          aria-describedby="outlined-new_password"
                          value={props.values.new_password}
                          onBlur={props.handleBlur}
                        />

                      {props.touched.new_password && props.errors.new_password ? (
                      <div className={styles.rooterror}>
                        <p className={styles.helpertextemailpassword}>
                          {props.errors.new_password}
                        </p>
                        <span className="questionmark">
                          <img src={CROSS} alt="cross" />
                        </span>
                      </div>
                    ) : null}
                     
                      </FormControl>

                      <FormControl
                        fullWidth
                        sx={{
                          marginBottom: "1.5rem",
                        }}
                      >
                        <OutlinedInput
                          type="password"
                          name="confirm_password"
                          error={props.touched.confirm_password && props.errors.confirm_password}
                          placeholder="Confirm Password"
                          fullWidth
                          id="confirm_password"
                          onChange={props.handleChange}
                          aria-describedby="outlined-confirm_password"
                          value={props.values.confirm_password}
                          onBlur={props.handleBlur}
                        />

                      {props.touched.confirm_password && props.errors.confirm_password ? (
                      <div className={styles.rooterror}>
                        <p className={styles.helpertextemailpassword}>
                          {props.errors.confirm_password}
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
                          loading = {resetData.isLoading}
                          type="submit"
                          variant="contained"
                          sx={{
                            py: 2,
                            px: 8,
                          }}
                        >
                          Reset Password
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
