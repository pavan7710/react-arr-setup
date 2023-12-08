import React from 'react'
import DataTable from 'src/Components/Datagrid'
import { useSelector , useDispatch  } from 'react-redux'
import { ANALYTICS_ATIVE } from 'src/assests/index'


const UserList = () => {

    const dispatch = useDispatch()
    const filterData = useSelector( (state) => state.dashboard )

    const getId = (id) => {
    }
    const userData = useSelector((state) => state.dashboard )
    const userList = userData?.users?.data
    const CustomNoRowsOverlay = () => {
        return (
           <div style={{
            display : "flex",
            justifyContent : "center",
            alignItems : "center",
            flexDirection : "column"
          }} >
             <p >No Data Found</p>
           </div>
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
        dispatch({
          type : "DASHBOARD_FILTER",
          payload : {
            ...filterData.filterValues,
            offset :  params.page * 10,
            limit : '10'
          }
        })
      }

     


      const userWithSno =  userList?.length > 0 && userList.map((user , i) => ({'#' : i + 1 , ...user}))

    const rows = userWithSno?.length > 0 ? userWithSno :  []
  return (
    <React.Fragment>
         <DataTable
         
        sx={{
          ".MuiDataGrid-overlayWrapperInner" : {
            display : "flex",
            justifyContent : "center"
          }
        }}

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
        autoHeight  rows={rows} columns={columns} disableRowSelectionOnClick 
        loading ={filterData.isLoading}
        />
    </React.Fragment>    
  )
}

export default UserList