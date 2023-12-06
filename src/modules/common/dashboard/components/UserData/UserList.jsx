import React from 'react'
import DataTable from 'src/Components/Datagrid'

const UserList = () => {

    const CustomNoRowsOverlay = () => {
        return (
            <p>No Data Found</p>
        )
      }

    const columns = [
        { field: '#', headerName: '#' , width : 100  , editable: true },
        { field: 'id', headerName: 'ID' , width : 150 , editable: true },
        { field: 'user_name', headerName: 'User Name' ,width : 150 , editable: true },
        { field: 'email', headerName: 'Email ID' ,  width : 250  ,editable: true },
        { field: 'contact', headerName: 'Contact' ,width : 250 , editable: true},
        { field: 'role', headerName: 'Role', width : 250 , editable: true },
      ];
      const rows =  [
        {
            "#" : "1",
            "id" : "2",
            "user_name" : "pavan",
            "email" : "pavan@gmail.com",
            "contact" : "9700657710",
            "role" : "admin"

        },
        {
            "#" : "2",
            "id" : "3",
            "user_name" : "pavan",
            "email" : "pavan@gmail.com",
            "contact" : "9700657710",
            "role" : "admin"

        },
        {
            "#" : "3",
            "id" : "4",
            "user_name" : "pavan",
            "email" : "pavan@gmail.com",
            "contact" : "9700657710",
            "role" : "admin"

        }
      ]
  return (
    <React.Fragment>
         <DataTable checkboxSelection disableColumnFilter disableColumnMenu
        hideFooterPagination slots={{
          noRowsOverlay: CustomNoRowsOverlay,
        }}
        autoHeight  rows={rows} columns={columns} disableRowSelectionOnClick />
    </React.Fragment>    
  )
}

export default UserList