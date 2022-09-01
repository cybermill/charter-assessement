import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: "1rem",
    textAlign: "center"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "1rem",
    textAlign: "center",
    border: "2px solid black"
  }
}));