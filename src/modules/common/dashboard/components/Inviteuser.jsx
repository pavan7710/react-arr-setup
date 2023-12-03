import React , {useState} from 'react'
import { Button }  from "@mui/material"
import Dialog from 'src/Components/Dialog'
import InviteForm from './InviteForm'
import { useSelector , useDispatch } from 'react-redux'


const Inviteuser = () => {
    const dispatch = useDispatch()
    const inviteData = useSelector((state) => state.dashboard)
    const openDialog = () => {
        dispatch({
            type : "OPEN_CLOSE_INVITE_DIALOG",
            payload : true
        })

    }
    const handleClose = () => {
        dispatch({
            type : "OPEN_CLOSE_INVITE_DIALOG",
            payload : false
        })
    }
    const inviteform = <InviteForm/>
  return (
    <React.Fragment>
        <Button onClick={openDialog} variant='contained'>Invite User</Button>
        <Dialog 
        PaperProps = {{
            style : {
                borderRadius : '40px',
                width : "35%",
            }
        }}
        fullWidth={false}
        open={ inviteData.openClose}
        onClose={handleClose}
        content= {inviteform}
        />
    </React.Fragment>
  )
}

export default Inviteuser