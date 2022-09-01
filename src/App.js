/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { fetchPurchaseRecords } from "./api/purchase.api";
import PurchaseTable from "./components/PurchaseTable/PurchaseTable";
import { useLoading } from "./hooks/useLoading";

//how to group by months?
//how to group by customerID?
//username + customerID must be the same
//reward system: 1pt = $50; 2pt = $100
//track 3 months
//reward points/customer per purchase
//total reward points/customer per month

export const purchaseRecordsGroupByMonth = (purchaseRecords) => {
  const months = new Array(12).fill(0).map((_) => []);
  // console.log("months", months);
  purchaseRecords.forEach((record) => {
    const month = new Date(record.purchaseDate).getMonth();
    months[month].push(record);
  });
  return months;
};

export const purchaseRecordsGroupByCustomer = (purchaseRecords) => {
  const customers = {};
  purchaseRecords.forEach((record) => {
    const customerId = record.customerID;
    // console.log("record", record);
    if (!customers[customerId]) {
      customers[customerId] = [record];
    } else {
      customers[customerId].push(record);
    }
  });
  return customers;
};

export const purchaseRecordsParser = (purchaseRecords) => {
  let monthsRecords = purchaseRecordsGroupByMonth(purchaseRecords);
  // console.log("monthsRecords", monthsRecords);
  monthsRecords = monthsRecords.map((records) => {
    return purchaseRecordsGroupByCustomer(records);
  });
  return monthsRecords;
};

export default function App() {
  const [isLoading, startLoading, endLoading] = useLoading();
  const [monthlyRecordsByCustomer, setMonthlyRecordsByCustomer] = useState(
    null
  );
  // console.log("monthlyRecordsByCustomer", monthlyRecordsByCustomer);

  useEffect(() => {
    startLoading();
    fetchPurchaseRecords().then((data) => {
      setMonthlyRecordsByCustomer(purchaseRecordsParser(data));
      endLoading();
    });
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <h3>isLoading...</h3>
      ) : (
        monthlyRecordsByCustomer?.map((monthlyRecords, MonthNum) => {
          // console.log("monthlyRecords", monthlyRecords);
          const customersRecords = Object.keys(monthlyRecords);
          // console.log("customersRecords", customersRecords);
          if (customersRecords.length > 0) {
            return customersRecords.map((customerID) => {
              return (
                <section key={monthlyRecords[customerID][0].id}>
                  <PurchaseTable
                    purchaseRecords={monthlyRecords[customerID]}
                    monthNum={MonthNum}
                    customerID={customerID}
                    customerName={monthlyRecords[customerID][0].customerName}
                  />
                </section>
              );
            });
          }
          return null;
        })
      )}
    </div>
  );
}

//how to render UI with the current data structure?
//current data structure: [{}..., object..., {}...]
//month = { key: [ob,ob,...]}
