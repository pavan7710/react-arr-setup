import React from 'react'
import {Dialog , DialogTitle , DialogContent , DialogActions } from '@mui/material'



const MuiDialog = ( { open , onClose , title , content  ,actions , fullWidth , ...sx} ) => {
  return (
    <Dialog
    {...sx}
    fullWidth = {fullWidth}
    open={open}
    onClose={onClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
        {title}
    </DialogTitle>
    <DialogContent>
        {content}
    </DialogContent>
    <DialogActions>
        {actions}
    </DialogActions>
  </Dialog>
  )
}

export default MuiDialog