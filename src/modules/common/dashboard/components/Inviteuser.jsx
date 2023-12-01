import React , {useState} from 'react'
import { Button }  from "@mui/material"
import Dialog from 'src/Components/Dialog'
import InviteForm from './InviteForm'


const Inviteuser = () => {


    const [open, setopen] = useState(false)

    const openDialog = () => {
        setopen(true)
    }

    const handleClose = () => {
        setopen(false)
    }

    const inviteform = <InviteForm/>
  return (
    <React.Fragment>
        <Button onClick={openDialog} variant='contained'>Invite User</Button>
        <Dialog 
        PaperProps = {{
            style : {
                borderRadius : '40px',
                width : "35%"
            }
        }}
        fullWidth={false}
        open={open}
        onClose={handleClose}
        content= {inviteform}
        />
    </React.Fragment>
  )
}

export default Inviteuser