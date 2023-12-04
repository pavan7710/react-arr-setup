import React from 'react'
import { OutlinedInput } from "@mui/material"

 export  const ReuseOutlinedInput = ( {sx , ...rest} ) => {
  return (
    <OutlinedInput autoComplete='off'  sx={{
        "&.MuiInputBase-root" : {
          borderRadius : '40px',
          backgroundColor : '#F3F3F3',
          color: 'black',
          fontSize : '15px',
          fontStyle : 'normal',
          fontWeight : '400',
        },
        ".MuiInputBase-input" : {
          padding : '1.5rem 2rem',
        },
        "& input::placeholder": {
          color: "#A1A1A1"
        },
        ...sx
      }}
        {...rest}
      />
  )
}