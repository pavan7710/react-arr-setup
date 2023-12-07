import React, { useState } from 'react'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormControl, MenuItem , Stack , Box  , Select , FormHelperText } from '@mui/material';
import { ReuseOutlinedInput as  OutlinedInput} from "src/Components/ReuseOutlinedInput"
import { CONTACT , CLOSE , CONTACTADDED } from 'src/assests/index'
import styles from './inviteform.module.scss'
import {  useDispatch } from 'react-redux'
import { create_user } from 'src/actions/Dashboard/actions'
import LoadingButton from '@mui/lab/LoadingButton';
import { emailValidation , phoneNumberValidation , firstnameValidation , lastnameValidation , roleValidation } from 'src/utlis/RFvalidation'


const validationSchema = Yup.object({
    first_name:  firstnameValidation,
    last_name: lastnameValidation,
    email:  emailValidation ,
    contact: phoneNumberValidation,
    role : roleValidation
  });
const InviteForm = () => {
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch({
            type : "OPEN_CLOSE_INVITE_DIALOG",
            payload : false
        })
    }
    const initialvalues = {
        first_name : "",
        last_name :"",
        email : "",
        contact : "",
        role : ""
    }
    const [submiting, setsubmiting] = useState(false)
    const [successmessage, setsuccessmessage] = useState(false)

    const handleSubmit = (values , { resetForm } ) => {
        setsubmiting(true)
        dispatch( create_user(values  , (res)=> {
            if(res.status === 201){
                setsubmiting(false)
                setsuccessmessage(true)
            }else {
                setsubmiting(false)
                handleClose()
            }
        } ) )
    }
  return (
    <React.Fragment>
        <Formik
    initialValues={initialvalues}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
    >
        {( props ) => {
            return (
               <React.Fragment>
                     <Box className= {styles.closeImage}>
                        <img onClick={handleClose} src={CLOSE} alt='close_icon'  />
                    </Box>
                   { !successmessage ? (
                        <>
                        <Box  className = {styles.contactImage}  >
                            <img  src={CONTACT} alt='cont_added' />
                            <p className={styles.invite} >Invite New User</p>
                        </Box>
                    <Form  className= {styles.rootform}>
                    <Stack spacing={1}>
                            <FormControl>
                                <OutlinedInput
                                fullWidth
                                type = "text"
                                name = "first_name"
                                placeholder = "Name"
                                id = "name"
                                onChange = {props.handleChange}
                                value= {props.values.first_name}
                                />
                                <FormHelperText className={styles.helpertext} >{props.touched.first_name && props.errors.first_name}</FormHelperText>
                            </FormControl>

                            <FormControl>
                                <OutlinedInput
                                fullWidth
                                type = "text"
                                name = "last_name"
                                placeholder = "Last Name"
                                id = "name"
                                onChange = {props.handleChange}
                                value = {props.values.last_name}
                                />
                                <FormHelperText className={styles.helpertext} >{props.touched.last_name && props.errors.last_name}</FormHelperText>
                            </FormControl>

                            <FormControl fullWidth>
                                <OutlinedInput
                                fullWidth
                                type = "email"
                                name = "email"
                                placeholder = "E-mail ID"
                                id = "email"
                                onChange = {props.handleChange}
                                value = {props.values.email}
                                />
                                <FormHelperText className={styles.helpertext} >{props.touched.email && props.errors.email}</FormHelperText>
                            </FormControl>

                            <FormControl fullWidth >
                                <OutlinedInput
                                fullWidth
                                type = "number"
                                name = "contact"
                                placeholder = "Contact Number"
                                id = "phone_number"
                                onChange = {props.handleChange}
                                values= {props.values.contact}
                                />
                                <FormHelperText className={styles.helpertext} >{props.touched.contact && props.errors.contact}</FormHelperText>
                            </FormControl>

                            <FormControl fullWidth >
                                <Select
                                    id='role'
                                    displayEmpty
                                    defaultValue=''
                                    input={<OutlinedInput />}
                                    onChange = {props.handleChange}
                                    name = "role"
                                    values={props.values.role}
                                    sx={{
                                        ".MuiSelect-select" : {
                                            color:  props.values.role === '' ? '#A1A1A1' : 'black'
                                         }
                                    }}
                                >
                                    <MenuItem  value='' disabled  >
                                        Select Role
                                    </MenuItem>
                                    <MenuItem value = 'admin' >Admin</MenuItem>
                                    <MenuItem value = 'super_admin' >Super Admin</MenuItem>
                                    <MenuItem value = 'sales_manager' >Sales Manager</MenuItem>
                                </Select>
                                <FormHelperText className={styles.helpertext} >{props.touched.role && props.errors.role}</FormHelperText>
                            </FormControl>
                    </Stack>
                        <Box className={styles.userbutton}>
                            <LoadingButton type='submit' variant='contained' loading={submiting}
                            sx={{
                                px : 5,
                                py : 2,
                                mt : 3,
                            }} >Invite User</LoadingButton>
                        </Box>
                    </Form>
                        </>
                   ) :  
                     <>
                         <Box  className = {styles.contactImage}  >
                            <img src={CONTACTADDED} alt='cont_added' />
                            <p className={`${styles.invite} ${styles.mbzero} `} >Invite has been successfully sent</p>
                            <p className={ `${styles.invite} ${styles.mtone} ` } >to {props.values.email}</p>
                            <Box>
                                <p className={`${styles.closewindow}`} >you can now close this window!</p>
                            </Box>
                        </Box>
                     </>
                     }
               </React.Fragment>
            )
        }}
        </Formik>
    </React.Fragment>
  )
}

export default InviteForm