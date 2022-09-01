import React from "react";
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

const PurchaseTable = ({
  purchaseRecords,
  monthNum,
  customerID,
  customerName
}) => {
  // console.log("purchaseRecords", purchaseRecords);

  return (
    <section>
      <header>
        <h1>{convertMonthNumberToString(monthNum)}</h1>
        <h4>
          Name: {customerName}, ID: {customerID}, Total Reward Points:{" "}
          {calculateTotalRewardPoints(purchaseRecords)}
        </h4>
      </header>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>customer ID</th>
            <th>Customer Name</th>
            <th>Purchase Price</th>
            <th>Purchase Date</th>
            <th>Reward Points</th>
          </tr>
        </thead>
        <tbody>
          {purchaseRecords?.map((purchase) => {
            return (
              <tr key={purchase.id}>
                <td>{purchase.id}</td>
                <td>{purchase.customerID}</td>
                <td>{purchase.customerName}</td>
                <td>{purchase.purchasePrice}</td>
                <td title={purchase.purchaseDate}>{purchase.purchaseDate}</td>
                <td>{calculateRewardPoints(purchase.purchasePrice)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default PurchaseTable;
