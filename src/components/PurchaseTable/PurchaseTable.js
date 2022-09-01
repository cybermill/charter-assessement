import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell } from "../StyledTableCell";
import { convertMonthNumberToString } from "../../utils/monthHelper/month.helper";

//reward points/customer per purchase
export const calculateRewardPoints = (purchasePrice) => {
  if (purchasePrice < 50) {
    return 0;
  } else if (purchasePrice > 100) {
    return (purchasePrice - 100) * 2 + 50;
  } else {
    return (purchasePrice - 50);
  }
};

//total reward points/customer per month
export const calculateTotalRewardPoints = (purchaseRecords) => {
  const totalPoints = purchaseRecords?.reduce((previous, item) => {
    previous += calculateRewardPoints(item.purchasePrice);
    return previous;
  }, 0);
  return totalPoints;
};

export default function PurchaseTable({
  purchaseRecords,
  monthNum,
  customerID,
  customerName
}) {
  // console.log(purchaseRecords);

  return (
    <TableContainer component={Paper}>
      <header>
        <h1>{convertMonthNumberToString(monthNum)}</h1>
        <h3>
          Name: {customerName}, ID: {customerID}, Total Reward Points:{" "}
          {calculateTotalRewardPoints(purchaseRecords)}
        </h3>
      </header>
      <Table sx={{ minWidth: 650, border: 2 }} aria-label="purchase-table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>customer ID</StyledTableCell>
            <StyledTableCell>Customer Name</StyledTableCell>
            <StyledTableCell>Purchase Price</StyledTableCell>
            <StyledTableCell>Purchase Date</StyledTableCell>
            <StyledTableCell>Reward Points</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {purchaseRecords?.map((purchase) => {
            return (
              <TableRow key={purchase.id}>
                <StyledTableCell>{purchase.id}</StyledTableCell>
                <StyledTableCell>{purchase.customerID}</StyledTableCell>
                <StyledTableCell>{purchase.customerName}</StyledTableCell>
                <StyledTableCell>{purchase.purchasePrice}</StyledTableCell>
                <StyledTableCell title={purchase.purchaseDate}>{purchase.purchaseDate}</StyledTableCell>
                <StyledTableCell>
                  {calculateRewardPoints(purchase.purchasePrice)}
                </StyledTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
