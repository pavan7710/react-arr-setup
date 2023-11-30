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
import { passwordValidationSchema } from "src/utlis/RFvalidation";

const passwordSchema = Yup.object().shape({
  password: passwordValidationSchema,
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export default function SignIn() {
  const navigate = useNavigate();
  const handleSubmit = (values, actions, isValid) => {
    // console.log(isValid)
    // navigate('/dashboard')
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
        alignItems="center"
        direction="column"
        sx={{
          minHeight: "100vh",
        }}
      >
        <Grid item>
          <img src={logo} alt="logo" />
        </Grid>
        <Grid className={styles.resetpassword} item xs={12} sm={6} md={4}>
          <p>Reset Password </p>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Formik
            initialValues={{ password: "", confirmpassword: "" }}
            validationSchema={passwordSchema}
            onSubmit={handleSubmit}
          >
            {(props) => {
              return (
                <Form>
                  <FormControl
                    sx={{
                      marginBottom: "2.5rem",
                    }}
                    fullWidth
                  >
                    <OutlinedInput
                      type="password"
                      name="password"
                      error={props.touched.password && props.errors.password}
                      placeholder="Password"
                      fullWidth={true}
                      id="password"
                      aria-describedby="outlined-password"
                      onChange={props.handleChange}
                      value={props.values.password}
                      onBlur={props.handleBlur}
                    />
                    <FormHelperText id="outlined-weight-helper-text">
                      {props.touched.password && props.errors.password}
                    </FormHelperText>
                  </FormControl>

                  <FormControl
                    sx={{
                      marginBottom: "2.5rem",
                    }}
                    fullWidth
                  >
                    <OutlinedInput
                      type={showPassword ? "text" : "password"}
                      name="confirmpassword"
                      placeholder="Confirm Password"
                      fullWidth={true}
                      id="confirmpassword"
                      aria-describedby="outlined-password"
                      value={props.values.confirmpassword}
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
                      error={
                        props.touched.confirmpassword &&
                        props.errors.confirmpassword
                      }
                    />
                    <FormHelperText id="outlined-weight-helper-text">
                      {props.touched.confirmpassword &&
                        props.errors.confirmpassword}
                    </FormHelperText>
                  </FormControl>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      onClick={handleSubmit}
                      type="submit"
                      variant="contained"
                      sx={{
                        textTransform: "capitalize",
                        fontSize: "20px",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "normal",
                        color: "white",
                        borderRadius: "40px",
                        py: 2,
                        px: 12,
                      }}
                    >
                      Reset Password
                    </Button>
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
