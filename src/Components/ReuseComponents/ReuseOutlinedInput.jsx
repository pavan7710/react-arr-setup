import React from 'react'
import { OutlinedInput } from "@mui/material"

 export  const ReuseOutlinedInput = ( {sx , ...rest} ) => {
  return (
    <OutlinedInput   sx={{
        "&.MuiInputBase-root" : {
          borderRadius : '40px',
          backgroundColor : '#F3F3F3',
          color: 'black',
          fontSize : '15px',
          fontStyle : 'normal',
          fontWeight : '400',
          marginBottom : '2.5rem'
        },
        ".MuiInputBase-input" : {
          padding : '1.5rem 2rem',
        },
        "& input::placeholder": {
          color: "#A1A1A1"
        },
        ...sx
      }}
            {...rest}
      />
  )
}

// export default ReuseOutlinedInput



// import React from 'react'
// import { DataGrid } from '@mui/x-data-grid';

// const CustomDataGrid = ({rows, columns , sx ,hideFooterPagination, ...rest }) => {
//   console.log(rest)
//   return (
//         <DataGrid
//         sx={{
//           "& .MuiDataGrid-row:hover": {
//             cursor: "pointer",
//           },
//           "& .MuiDataGrid-cell:focus": {
//             outline: "none",
//           },
//           "& .MuiDataGrid-columnHeader:focus": {
//             outline: "none",
//           },
//           ".MuiDataGrid-cell": {
//             color: "#111927",
//             textTransform : 'capitalize'
//           },
//           ".MuiDataGrid-columnSeparator": {
//             display: "none",
//           },
//           ".MuiDataGrid-footerContainer" : {
//             display : hideFooterPagination ? 'none' : 'flex'
//           },
//           ".MuiDataGrid-virtualScroller" : {
//               height :  rows.length > 0 ? '' : '590px'
//           },

//           ".MuiDataGrid-columnHeaders" : {
//             borderBottom: '1px solid #f2f4f7',
//             backgroundColor: "#F8F9FA",
//             color: "#2F3746",
//             fontSize: 12,
//             lineHeight: 1,
//             letterSpacing: 0.5,
//             textTransform: 'uppercase',
//           },

//           ".MuiDataGrid-columnHeaderTitle": {
//             fontWeight : 'bold',
//           },

//           ".MuiDataGrid-main" : {
//             border : '1px solid #f2f4f7'
//           },

//           ".MuiDataGrid-row" : {
//             borderBottom : '2px solid #f2f4f7'
//           },
//           ...sx,
//         }}
//             {...rest }
//             rows={rows}
//             columns={columns}
//         />
//   )
// }

// export default CustomDataGrid