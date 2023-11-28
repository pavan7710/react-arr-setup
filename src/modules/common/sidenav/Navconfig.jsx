import React from 'react'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import HomeIcon from '@mui/icons-material/Home';
import PaymentsIcon from '@mui/icons-material/Payments';




export const Navconfig = [
  {
    title: 'Project',
    path: '/dashboard',
    icon: (
        <HomeIcon/>
    )
  },
 
  {
    title: 'User',
    path: '/transactions',
    icon: (
        <ReceiptLongIcon/>
    )
  },


  {
    title: 'Settings',
    path: '/emi_loans',
    icon: (
        <PaymentsIcon/>
    )
  },
];

export default  Navconfig