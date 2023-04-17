// import { makeStyles } from '@material-ui/core';

// import { DataGrid } from '@mui/x-data-grid';
// import { GridColDef } from '@mui/x-data-grid/models';
// const columns: GridColDef[] = [
//   { field: 'id', headerName: 'ID', cellClassName: 'first-column' },
//   { field: 'name', headerName: 'Name' },
//   { field: 'age', headerName: 'Age' },
// ];

// const rows = [
//   { id: 1, name: 'John Doe', age: 30 },
//   { id: 2, name: 'Jane Doe', age: 25 },
// ];

// const useStyles = makeStyles({
//   firstColumn: {
//     backgroundColor: 'red',
//     color: 'white',
//   },
// });

// function MyDataGrid() {
//   const classes = useStyles();

//   return (
//     <DataGrid
//       rows={rows}
//       columns={columns}
//       autoHeight
//       getCellClassName={(params) =>
//         params.field === 'id' ? classes.firstColumn : ''
//       }
//     />
//   );
// }
// export default MyDat
import { ThreeDRotation } from "@mui/icons-material";
import React from "react";
// import { ButtonWithIcon } from "../stories/molecules/ButtonWithIcon/ButtonWithIcon";
import { FilterIcon } from "./FilterIcon";
import { ThreeDot } from "./ThreeDot";

interface FilterButtonProps {
  onClick: () => void;
}

const Filter: React.FC<FilterButtonProps> = ({ onClick }) => {
  return (
    <FilterIcon
      label="Filter"
      icon={
        <svg
          width="20"
          height="15"
          viewBox="0 0 20 20"
          fill="blue"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.33333 15V13.75H11.6667V15H8.33333ZM5 10.625V9.375H15V10.625H5ZM2.5 6.25V5H17.5V6.25H2.5Z"
            fill="#696A6E"
          />
        </svg>
      }
      variant="outlined"
    />
  );
};

export default Filter;
