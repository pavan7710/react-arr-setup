import React from 'react'
import Sidenav from './Sidenav'

const HomeLayout = ({children}) => {
  return (
    <React.Fragment>
        <Sidenav />
        {children}
    </React.Fragment>
    
  )
}

export default HomeLayout