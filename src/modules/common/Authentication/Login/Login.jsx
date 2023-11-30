import React , {useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { ReuseOutlinedInput as OutlinedInput } from 'src/Components/ReuseOutlinedInput'
import { Link , useNavigate } from 'react-router-dom';
import { Grid , FormHelperText , FormControl , InputAdornment, IconButton } from '@mui/material';
import {LOGO , CROSS , VECTOR } from 'src/assests/index'
import { Formik , Form } from 'formik'
import * as Yup from 'yup'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import styles from './login.module.scss'

const loginSchema = Yup.object().shape({
  email :  Yup.string().email("Invalid Email ID").required("Email Is Required"),
  password: Yup.string().min(8, 'Minimum 8 characters required').required('Required').matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
    'Password must contain at least one letter, one number, and one special character'
  ),
})

export default function SignIn() {

  const helpertextemailpassword = {
    textAlign : 'center',
    color: "#F00",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    margin : "1rem 0 0 0",
    display : 'flex',
    justifyContent : 'center'
  }


  const navigate = useNavigate();
  const handleSubmit = ( values,actions , isValid ) => {
    // console.log(isValid)
    // navigate('/dashboard')
  }

  const [showPassword, setshowPassword] = useState(false)
  const handleTogglePasswordVisibility = () => {
    setshowPassword(!showPassword)
  }


  return (
    <React.Fragment>
      <Grid container justifyContent="center" alignItems="center" direction="column" sx={{
        minHeight : '100vh',
      }}>
        <Grid item sx={{
          marginBottom : '3rem'
        }}>
          <img src={LOGO} alt="logo" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>

        <Formik
          initialValues={{email : '' , password : ''}}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >

          {props => {
            return (
              <Form>
                <FormControl sx={{
                  marginBottom : '1rem'
                }} fullWidth>
                    <OutlinedInput
                    type = 'email'
                    name = 'email'
                    error={props.touched.email && props.errors.email}
                    placeholder='Email ID'
                    fullWidth={true}
                    id="email"
                    aria-describedby="outlined-email"
                    onChange = {props.handleChange}
                    value = {props.values.email}
                    onBlur={props.handleBlur}
                  />
                  { (props.touched.email && props.errors.email) && (
                    <div className={styles.rooterror} >
                         <p  className={styles.helpertextemailpassword} >{props.errors.email}</p>
                         <span className='questionmark'><img src={ CROSS } alt = 'cross' /></span>
                    </div>
                  ) }
                  

                </FormControl>

                <FormControl sx={{
                  marginBottom : '1rem'
                }} fullWidth>
                    <OutlinedInput
                    type= {showPassword ? 'text' : 'password'}
                    name = 'password'
                    placeholder='Password'
                    fullWidth={true}
                    id="password"
                    aria-describedby="outlined-password"
                    value = {props.values.password}
                    onChange = {props.handleChange}
                    onBlur={props.handleBlur}
                    endAdornment={<InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleTogglePasswordVisibility}
                        edge="end"
                      >
                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>}
                    error={props.touched.password && props.errors.password}
                    />
                    {/* <FormHelperText sx={helpertextemailpassword} id="outlined-weight-helper-text">
                      {props.touched.password && props.errors.password}
                    </FormHelperText> */}

          { (props.touched.password && props.errors.password) && (
                    <div className={styles.rooterror} >
                         <p  className={styles.helpertextemailpassword} >{props.errors.password}</p>
                         <span className='questionmark'><img src={VECTOR} alt = 'cross' /></span>
                    </div>
                  ) }


                </FormControl>

             
              <Box sx={{
                marginBottom : '2.5rem',
                display : 'flex',
                justifyContent :'end',
                mr :'1.5rem',
                color : '#0075FF'
              }}>
                <Link    
                  to = '/forgotpassword'   
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
                  px :12
                }}
                >
                  Loginn
                </Button>
              </Box>
              </Form>
            )
          }}

        </Formik>

     


        </Grid>
      </Grid>
    </React.Fragment>
  );
}