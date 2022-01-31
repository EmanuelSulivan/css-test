import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  Paper,
} from "@mui/material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import { User } from "../../interfaces/user.interfaces";
import { UserItem } from "./UserItem";

const rows: User[] = [
  {
    id: 1,
    image: "",
    name: "Emanuel Campos Jasso",
    birthdate: "1994-01-30",
    rfc: "CAJE940130HU8",
  },
  {
    id: 2,
    image: "",
    name: "Emanuel Campos Jasso",
    birthdate: "1994-01-30",
    rfc: "CAJE940130HU8",
  },
  {
    id: 3,
    image: "",
    name: "Emanuel Campos Jasso",
    birthdate: "1994-01-30",
    rfc: "CAJE940130HU8",
  },
  {
    id: 4,
    image: "",
    name: "Emanuel Campos Jasso",
    birthdate: "1994-01-30",
    rfc: "CAJE940130HU8",
  },
  {
    id: 5,
    image: "",
    name: "Emanuel Campos Jasso",
    birthdate: "1994-01-30",
    rfc: "CAJE940130HU8",
  },
  {
    id: 6,
    image: "",
    name: "Emanuel Campos Jasso",
    birthdate: "1994-01-30",
    rfc: "CAJE940130HU8",
  },
  {
    id: 7,
    image: "",
    name: "Emanuel Campos Jasso",
    birthdate: "1994-01-30",
    rfc: "CAJE940130HU8",
  },
  {
    id: 8,
    image: "",
    name: "Emanuel Campos Jasso",
    birthdate: "1994-01-30",
    rfc: "CAJE940130HU8",
  },
  {
    id: 9,
    image: "",
    name: "Emanuel Campos Jasso",
    birthdate: "1994-01-30",
    rfc: "CAJE940130HU8",
  },
];

export const UsersTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((user) => (
            <UserItem user={user} key={`user-${user.id}`} />
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
