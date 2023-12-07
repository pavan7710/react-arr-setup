import React from 'react'
import { Grid , Box , OutlinedInput  , InputAdornment } from '@mui/material'
import styles from './dashboard.module.scss'
import SearchIcon from '@mui/icons-material/Search';
import { FILTERICON } from 'src/assests/index'
import { useDispatch } from 'react-redux'
import { list_user } from 'src/actions/Dashboard/actions'

const DashboardHeader = () => {
  const dispatch = useDispatch()
  const hitApi = (e) => {
    if(e.key === 'Enter' ){
      dispatch(list_user( '' , 'asc' , e.target.value , '10' , '0' ))
    }
  }
  return (
    <React.Fragment>
       <Grid sx={{
        mt : 2
       }}  className={styles.rootdashboard} container justifyContent="space-between">

        <Grid xs={12} md={5} >
            <p className={styles.user} >
            User <span className={styles.dashboard} >Dashboard</span>
          </p>
        </Grid>
        <Grid sx={{
          display : "flex"
        }} justifyContent="space-between"
        xs={12} md={5}  >
          <OutlinedInput onKeyUp={ (e) => hitApi(e) } fullWidth
              placeholder='Search For User'
              sx={{
                "&.MuiInputBase-root" : {
                  height : "3rem",
                  alignSelf : "center",
                  borderRadius : "10px",
                  mx : 1
                }
              }}
              id="outlined-adornment-weight"
              endAdornment={<InputAdornment position="end">
                <SearchIcon/>
              </InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
            />
            <Box sx={{
              alignSelf : "center",
              cursor : "pointer"
            }}>
              <img src={FILTERICON} alt='filter' />
            </Box>
        </Grid>
    </Grid>
    </React.Fragment>
  )
}

export default DashboardHeader