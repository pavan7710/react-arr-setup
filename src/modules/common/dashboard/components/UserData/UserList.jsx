import React from 'react'
import {  useSelector } from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const UserList = () => {

  const wipleads = useSelector(state => state.cummunitymanager)


  return (
    <TableContainer
        sx={{
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          boxShadow: "none",
        }}
        component={Paper}
      >
        <Table aria-label="simple table">
          <TableHead  >
            <TableRow>
             <TableCell>ID</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>Email ID</TableCell>
              <TableCell>CONTACT</TableCell>
              <TableCell>Customer Portal Link</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {wipleads.wip_leads.leads?.length > 0 &&
              wipleads.wip_leads.leads.map((row, index) => (
                <TableRow
                  key={row.id}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell>
                    <Link to={`/dashboard/${row.id}`} >{row.id}</Link>
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.contact}</TableCell>
                  <TableCell>
                    <Link  to={row.customer_portal_link}>open</Link>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        



        </Table>
      </TableContainer>
  )
}

export default UserList