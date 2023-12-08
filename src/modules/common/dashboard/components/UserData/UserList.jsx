import React from 'react'
import DataTable from 'src/Components/Datagrid'
import { useSelector , useDispatch  } from 'react-redux'
import { Button, TextField } from '@mui/material'
import { ANALYTICS_ATIVE } from 'src/assests/index'
import { list_user } from 'src/actions/Dashboard/actions'

const UserList = () => {

    const dispatch = useDispatch()

    const getId = (id) => {
      console.log(id)
    }
    const userData = useSelector((state) => state.dashboard )
    const userList = userData?.users?.data
    const CustomNoRowsOverlay = () => {
        return (
            <p>No Data Found</p>
        )
      }
    const columns = [
        { field: '#', headerName: '#' , width : 80},
        { field: 'id', headerName: 'ID' , width : 80  },
        { field: 'full_name', headerName: 'User Name' ,width : 185  },
        { field: 'email', headerName: 'Email ID' ,  width : 250  },
        { field: 'contact', headerName: 'Contact' ,width : 190 },
        { field: 'role', headerName: 'Role', width : 190},
        { field: 'edit', headerName: 'edit', width : 190 , 
          renderCell : (params) => {
            return (
              <img onClick={() => getId( params.row.id )} style={{
                width : "25%"
              }} src={ANALYTICS_ATIVE} />
            )
          }
        },
      ];

      const handlePageChange = (params) => {
        dispatch( list_user( '' , '' , '' , '10', params.page * 10 ) )
      }

      const dummyData = [
        {
          id : 110, full_name : "pavan Bollineni" , email : "pavan@gloify.com" , contact : "9700657710" , role : "admin"
        },
        {
          id : 121, full_name : "pavan" , email : "pavan@gloify.com" , contact : "9700657710" , role : "admin"
        },
        {
          id : 142, full_name : "some one" , email : "pavan@gloify.com" , contact : "9700657710" , role : "admin"
        },
        {
          id : 53, full_name : "some one" , email : "pavan@gloify.com" , contact : "9700657710" , role : "admin"
        },
        {
          id : 62, full_name : "some one" , email : "pavan@gloify.com" , contact : "9700657710" , role : "admin"
        },
        
      ]

      const dump = dummyData.map((user, i)=> ({ '#': i + 1, ...user }))

      const userWithSno =  userList?.length > 0 && userList.map((user , i) => ({'#' : i + 1 , ...user}))

    const rows = userWithSno?.length > 0 ? userWithSno :  []
  return (
    <React.Fragment>
         <DataTable
         initialState={{
          pagination: {
            paginationModel: { pageSize: 10, page: 0 },
          },
        }}
         disableColumnFilter disableColumnMenu
        hideFooterPagination={false} slots={{
          noRowsOverlay: CustomNoRowsOverlay,
        }}
        paginationMode="server"
        onPaginationModelChange={handlePageChange}
        rowCount={ userData?.users?.count }
        autoHeight  rows={rows} columns={columns} disableRowSelectionOnClick />
    </React.Fragment>    
  )
}

export default UserList