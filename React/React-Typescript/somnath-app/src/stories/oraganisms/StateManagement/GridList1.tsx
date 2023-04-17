import Chip from "@material-ui/core/Chip";

import { Card, Pagination, styled } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";

import Typograpy from "../../atoms/Typography";

import theme from "../../../utils/theme";
import Manual from "../../molecules/ButtonWithIcon/Manual";
import Export from "../../molecules/ButtonWithIcon/Export";
import Filter from "../../molecules/ButtonWithIcon/Filter";
import Three from "../../molecules/ButtonWithIcon/Three";
console.log("Hello i am in greet 2");
interface Column {
  id: "NAME" | "ADUJUCATION" | "STATUS" | "LOCATION" | "DATE";
  label: string;
  minWidth?: number;
  align?: "center";
  TableCellComponent?: any;
  format?: (value: number) => string;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: "aliceblue",
  color: "blue",
}));
const columns: readonly Column[] = [
  {
    id: "NAME",
    label: "NAME",
    minWidth: 170,
    TableCellComponent: StyledTableCell,
  },
  {
    id: "ADUJUCATION",
    label: "ADUJUCATION",
    minWidth: 100,
  },
  {
    id: "STATUS",
    label: "STATUS",
    minWidth: 170,
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "LOCATION",
    label: "LOCATION",
    minWidth: 170,
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "DATE",
    label: "DATE",
    minWidth: 170,
    align: "center",
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  NAME: string;
  ADUJUCATION: string;
  STATUS: string;
  LOCATION: string;
  DATE: string;
}

function createData(
  NAME: string,
  ADUJUCATION: string,
  STATUS: string,
  LOCATION: string,
  DATE: string
): Data {
  return { NAME, ADUJUCATION, STATUS, LOCATION, DATE };
}

// filteredRows !==""
const rows = [
  createData("Jon", "-", "CLEAR", "Shhnghai", "23/03/3025"),
  createData("ABD", "-", "CONSIDER", "vyunha", "23/03/3025"),
  createData("Chris", "-", "CLEAR", "Shhnghai", "23/03/3025"),
  createData("Fadhl", "-", "CONSIDER", "Shhnghai", "23/03/3025"),
  createData("Abur", "-", "CLEAR", "Shhnghai", "23/03/3025"),
  createData("Sandy", "-", "CONSIDER", "Shhnghai", "23/03/3025"),
  createData("India", "-", "CLEAR", "Shhnghai", "23/03/3025"),
  createData("India", "-", "CONSIDER", "Shhnghai", "23/03/3025"),
  createData("India", "-", "CLEAR", "Shhnghai", "23/03/3025"),
  createData("India", "-", "CONSIDER", "Shhnghai", "23/03/3025"),
  createData("India", "-", "CLEAR", "Shhnghai", "23/03/3025"),
  createData("India", "-", "CONSIDER", "Shhnghai", "23/03/3025"),
  createData("India", "-", "CONSIDER", "Shhnghai", "23/03/3025"),
  createData("India", "-", "CLEAR", "Shhnghai", "23/03/3025"),
  createData("India", "-", "CLEAR", "Shhnghai", "23/03/3025"),
  createData("India", "-", "CONSIDER", "Shhnghai", "23/03/3025"),
  createData("I am", "-", "CLEAR", "Shhnghai", "23/03/3025"),
  createData("India", "-", "CLEAR", "Shhnghai", "23/03/3025"),
  createData("India", "-", "CONSIDER", "Shhnghai", "23/03/3025"),
  createData("I am last", "-", "CLEAR", "Shhnghai", "23/03/3025"),
  createData("I am last3", "-", "CLEAR", "Shhnghai", "23/03/3025"),
];
export default function GridList1() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  ///////////////////////
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const filteredRows = rows.filter((row) =>
    Object.values(row).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(searchValue.toLowerCase())
    )
  );
  console.log(filteredRows);

  ///////////////////
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 700 }}>
        <Stack justifyContent={"space-between"} direction={"row"}>
          <Typograpy variant="header">Candidates</Typograpy>
          <Stack justifyContent={"end"} direction={"row"} alignContent={"end"}>
            <Stack
              justifyContent={"space-between"}
              direction={"row"}
              spacing="10px"
              alignContent={"space-between"}
              marginLeft="569px"
            >
              <Export
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
              <br />
              <br />
              <Manual
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </Stack>
          </Stack>
          <br />
        </Stack>
        <br />
        <Card>
          <br />
          <Stack justifyContent={"space-between"} direction={"row"}>
            <Typograpy>Candidate Information</Typograpy>
            <Stack justifyContent={"end"} direction={"row"} spacing={"8px"}>
              <input
                type="text"
                placeholder={"Search any candidate"}
                value={searchValue}
                onChange={handleSearchChange}
              />
              {/* Filter Componenet */}
              <Filter
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
              <Three
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </Stack>
          </Stack>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow sx={{ color: theme.palette.primary.light }}>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredRows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) //slicing for pagin
                .map((row) => {
                  // console.log(searchedRows + "Hello there");
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.ADUJUCATION}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        // console.log(value);
                        //when user click

                        return column.id === "NAME" ? (
                          <StatusChip2 label={value} />
                        ) : (
                          <TableCell key={column.id} align={column.align}>
                            {row.STATUS === "CLEAR" ? (
                              <StatusChip label={value} />
                            ) : (
                              <StatusChip1 label={value} />
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </Card>
      </TableContainer>
      <Stack direction={"row"} alignContent={"space-between"}>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100, 125]}
          count={rows.length}
          // component="div"
          labelRowsPerPage="Rows per page:Hello"
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <Pagination count={3} />
      </Stack>
    </Paper>
  );
}

interface StatusChipProp {
  label: string;
}

const StatusChip = styled(Chip)((props: StatusChipProp) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: props.label === "CLEAR" ? "#F2FCFB" : "white",
  border: "1px solid #F2FCFB",
  color: props.label === "CLEAR" ? "#17A076" : "black",
  borderRadius: "4px",
  gap: "10px",
}));

const StatusChip1 = styled(Chip)((props: StatusChipProp) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: props.label === "CONSIDER" ? "#FAF8EB" : "White",
  border: "1px solid #F2FCFB",
  color: props.label === "CONSIDER" ? "#A08817" : "black",
  borderRadius: "4px",
  gap: "10px",
}));

const StatusChip2 = styled(Chip)((props: StatusChipProp) => ({
  color: "#224DFF",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "14px",
  border: "1px solid #F2FCFB",

  borderRadius: "4px",
  gap: "10px",
}));
