import { purchaseRecords } from "../mock.data";

export const fetchPurchaseRecords = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(purchaseRecords);
    }, 2000);
  });

// console.log("fetch", fetchPurchaseRecords);
