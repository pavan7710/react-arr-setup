import React from 'react'
import DataTable from 'src/Components/Datagrid'
import { useSelector } from 'react-redux'

const UserList = () => {

    const userData = useSelector((state) => state.dashboard )

    console.log(userData)

    const userList = userData.users.data

    const CustomNoRowsOverlay = () => {
        return (
            <p>No Data Found</p>
        )
      }

    const columns = [
        // { field: '#', headerName: '#' , width : 100   },
        { field: 'id', headerName: 'ID' , width : 150  },
        { field: 'full_name', headerName: 'User Name' ,width : 190  },
        { field: 'email', headerName: 'Email ID' ,  width : 250  },
        { field: 'contact', headerName: 'Contact' ,width : 250 },
        { field: 'role', headerName: 'Role', width : 250  },
      ];

    const rows = userList
     
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