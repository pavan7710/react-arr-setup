import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({rows, columns , sx ,hideFooterPagination, ...rest }) => {
  console.log(rest)
  return (
        <DataGrid
        sx={{
          "& .MuiDataGrid-row:hover": {
            cursor: "pointer",
          },
          "& .MuiDataGrid-cell:focus": {
            outline: "none",
          },
          "& .MuiDataGrid-columnHeader:focus": {
            outline: "none",
          },
          ".MuiDataGrid-cell": {
            color: "#111927",
            textTransform : 'capitalize',
            borderLeft  : "none",
            borderRight : "none"
          },
          ".MuiDataGrid-columnSeparator": {
            display: "none",
          },
          ".MuiDataGrid-footerContainer" : {
            display : hideFooterPagination ? 'none' : 'flex'
          },
          ".MuiDataGrid-virtualScroller" : {
              height :  rows.length > 0 ? '' : '590px'
          },

          ".MuiDataGrid-columnHeaders" : {
            // borderBottom: '1px solid #f2f4f7',
            borderBottom : "none",
            borderLeft : "none",
            backgroundColor: "#5AB95D",
            color: "#FFF",
            fontSize: 12,
            lineHeight: 1,
            letterSpacing: 0.5,
            textTransform: 'uppercase',
          },
          
          '&>.MuiDataGrid-main': {
            '&>.MuiDataGrid-columnHeaders': {
              borderBottom: 'none',
              borderLeft : "none",
              borderRight : 'none'
            },
          },
          
            '& div div div div >.MuiDataGrid-cell': {
              borderBottom: 'none',
              borderLeft : 'none',
              borderRight : 'none'
            },

          ".MuiDataGrid-columnHeaderTitle": {
            fontWeight : 'bold',
          },

          // ".MuiDataGrid-main" : {
          //   border : '1px solid #f2f4f7'
          // },

          ".MuiDataGrid-row" : {
            borderBottom : '1px solid #5AB95D',
            borderLeft : "",
            borderRight : "none"
          },
          '& .MuiDataGrid-mainGridContainer': {
            borderLeft: 'none',
            borderRight: 'none',
          },
          ...sx,
        }}
            {...rest }
            rows={rows}
            columns={columns}
        />
  )
}

export default DataTable