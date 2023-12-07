import React from 'react'
import { Button, useTheme } from '@mui/material'
import { Grid , Box } from "@mui/material"
import { INVITEUSER , SORT } from 'src/assests/index'
import  styles from './filter.module.scss'
import { Select ,MenuItem , OutlinedInput } from '@mui/material'

const Filterbuttons = () => {
    const theme = useTheme()

    console.log(theme)
    console.log(theme.palette.primary.main)

    const buttonStyles = {
        commonStyles : {
            borderRadius :'10px',
            mx : 4,
            padding : "0.5rem 0",
            px :6,
            fontSize : "10px",
            color : "#000",
            background : "#F5F5F5",
            fontWeight : 400,
            "&:hover" : {
                background : "#F5F5F5"
            }
        },
        active : {
            
        },
        inactive : {

        }
    }

  return (
    <React.Fragment>

        <Grid className={styles.rootfilter} container>
            <Grid sx={{
                display : "flex",   
            }} xs={6} md={3}>
                <p className={styles.items}>(2 items selected)</p>
                <p className={styles.exported}  >Export Selected</p>
            </Grid>

            <Grid sx={{
                display : "flex",
                justifyContent : "end",
                alignSelf : "center"
            }} xs={6} md={9}>
                <img src={SORT} />
                <Select
                    sx={{
                        ".MuiSelect-select" : {
                            padding : "0 1rem 0 0.3rem"
                        },
                        ".MuiOutlinedInput-notchedOutline" : {
                            border : "none"
                        }
                    }}

                    id='role'
                    displayEmpty
                    defaultValue=''
                    input={<OutlinedInput />}
                    name = "role"
                >
                    <MenuItem  value='' disabled  >
                        Sort
                    </MenuItem>
                    <MenuItem value = 'ascending' >Ascending</MenuItem>
                    <MenuItem value = 'descending' >Descending</MenuItem>
                </Select>
                <Button sx={ buttonStyles.commonStyles } variant='contained' >All Users</Button>
                <Button sx={ buttonStyles.commonStyles } variant='contained' >Customer</Button>
                <Button sx={ buttonStyles.commonStyles } variant='contained' >Work bee</Button>
            <Box sx={{
                cursor : "pointer"
            }}>
                <img src={INVITEUSER} alt="inviteicon" />
            </Box>

            </Grid>



        </Grid>


      
    </React.Fragment>
  )
}

export default Filterbuttons