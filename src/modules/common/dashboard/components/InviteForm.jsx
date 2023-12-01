import React, { useState } from 'react'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormControl, MenuItem , Stack , Box , Button , Select , FormHelperText } from '@mui/material';
import { ReuseOutlinedInput as  OutlinedInput} from "src/Components/ReuseOutlinedInput"
import { CONTACT , CLOSE } from 'src/assests/index'
import styles from './inviteform.module.scss'
import {   useDispatch } from 'react-redux'
import { create_user } from 'src/actions/Dashboard/actions'
import LoadingButton from '@mui/lab/LoadingButton';


const validationSchema = Yup.object({
    first_name: Yup.string().required('First Name is required'),
    last_name: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    contact: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone number is required'),
    role : Yup.string().required('First Name is required')
  });
const InviteForm = () => {

    const [submiting, setsubmiting] = useState(false)

    const [successmessage, setsuccessmessage] = useState(false)

    const dispatch = useDispatch()
    const handleSubmit = (values , actions ) => {
        setsubmiting(true)
        dispatch( create_user(values  , (res)=> {
            if(res){
                actions.resetForm()
                setsubmiting(false)
                setsuccessmessage(true)
            }else {
                actions.resetForm()
                setsubmiting(false)
            }
        } ) )
    }
  return (
    <React.Fragment>
        <Formik
    initialValues={{
        first_name : "",
        last_name :"",
        email : "",
        contact : "",
        role : ""
    }}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
    >
        {( props ) => {
            return (
               <React.Fragment>
                <Box className= {styles.closeImage}>
                    <img src={CLOSE} alt='close_icon'  />
                </Box>
                <Box  className = {styles.contactImage}  >
                    <img src={CONTACT} alt='contactt' />
                    <p className={styles.invite} >Invite New User</p>
                </Box>
                <Form sx className= {styles.rootform}>
                   <Stack spacing={3}>
                        <FormControl>
                            <OutlinedInput
                            onC
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
                                defaultValue={''}
                                displayEmpty
                                input={<OutlinedInput />}
                                onChange = {props.handleChange}
                                name = "role"
                                values={props.values.role}
                            >
                                <MenuItem value='' selected disabled sx={{color: '#F3F3F3'}} color='#F3F3F3'>
                                    Select Role
                                </MenuItem>
                                <MenuItem value= 'admin' >Admin</MenuItem>
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
               </React.Fragment>
            )
        }}
        </Formik>
    </React.Fragment>
  )
}

export default InviteForm