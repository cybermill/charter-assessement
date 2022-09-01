//what is the data?
/*arr = [
  { 
    id: 1, 
    customerID: uniqueID, 
    customerName: 'John', 
    purchasePrice: $50, 
    purchaseDate: May 17, 2022 03:24:00
  }
]*/

export const purchaseRecords = [
  {
    id: (Math.random() * 100000).toString(16),
    customerID: 123,
    customerName: "John",
    purchasePrice: 120, //demonstration purposes
    purchaseDate: new Date("May 17, 2022 03:24:00").toLocaleDateString()
  },
  {
    id: (Math.random() * 100000).toString(16),
    customerID: 123,
    customerName: "John",
    purchasePrice: 99, //demonstration purposes
    purchaseDate: new Date("May 17, 2022 03:24:00").toLocaleDateString()
  },
  {
    id: (Math.random() * 100000).toString(16),
    customerID: 345,
    customerName: "Christina",
    purchasePrice: 49, //demonstration purposes
    purchaseDate: new Date("May 17, 2022 03:24:00").toLocaleDateString()
  },
  {
    id: (Math.random() * 100000).toString(16),
    customerID: 123,
    customerName: "John",
    purchasePrice: 50, //demonstration purposes
    purchaseDate: new Date("May 17, 2022 04:24:00").toLocaleDateString()
  },
  {
    id: (Math.random() * 100000).toString(16),
    customerID: 345,
    customerName: "Christina",
    purchasePrice: 150, //demonstration purposes
    purchaseDate: new Date("May 17, 2022 04:24:00").toLocaleDateString()
  },
  {
    id: (Math.random() * 100000).toString(16),
    customerID: 345,
    customerName: "Christina",
    purchasePrice: 70, //demonstration purposes
    purchaseDate: new Date("May 17, 2022 04:24:00").toLocaleDateString()
  },
  {
    id: (Math.random() * 100000).toString(16),
    customerID: 123,
    customerName: "John",
    purchasePrice: 51, //demonstration purposes
    purchaseDate: new Date("May 17, 2022 04:24:00").toLocaleDateString()
  },
  {
    id: (Math.random() * 100000).toString(16),
    customerID: 234,
    customerName: "Ashley",
    purchasePrice: getRandomInt(0, 200),
    purchaseDate: new Date("June 17, 2022 04:24:00").toLocaleDateString()
  },
  {
    id: (Math.random() * 100000).toString(16),
    customerID: 234,
    customerName: "Ashley",
    purchasePrice: getRandomInt(0, 200),
    purchaseDate: new Date("June 17, 2022 04:24:00").toLocaleDateString()
  },
  {
    id: (Math.random() * 100000).toString(16),
    customerID: 234,
    customerName: "Ashley",
    purchasePrice: getRandomInt(0, 200),
    purchaseDate: new Date("June 17, 2022 04:24:00").toLocaleDateString()
  },
  {
    id: (Math.random() * 100000).toString(16),
    customerID: 345,
    customerName: "Christina",
    purchasePrice: getRandomInt(0, 200),
    purchaseDate: new Date("June 17, 2022 04:24:00").toLocaleDateString()
  },
  {
    id: (Math.random() * 100000).toString(16),
    customerID: 345,
    customerName: "Christina",
    purchasePrice: getRandomInt(0, 200),
    purchaseDate: new Date("June 17, 2022 04:24:00").toLocaleDateString()
  },
  {
    id: (Math.random() * 100000).toString(16),
    customerID: 345,
    customerName: "Christina",
    purchasePrice: getRandomInt(0, 200),
    purchaseDate: new Date("June 17, 2022 04:24:00").toLocaleDateString()
  },
  {
    id: (Math.random() * 100000).toString(16),
    customerID: 123,
    customerName: "John",
    purchasePrice: getRandomInt(0, 200),
    purchaseDate: new Date("July 17, 2022 05:24:00").toLocaleDateString()
  },
  {
    id: (Math.random() * 100000).toString(16),
    customerID: 123,
    customerName: "John",
    purchasePrice: getRandomInt(0, 200),
    purchaseDate: new Date("July 17, 2022 05:24:00").toLocaleDateString()
  },
  {
    id: (Math.random() * 100000).toString(16),
    customerID: 123,
    customerName: "John",
    purchasePrice: getRandomInt(0, 200),
    purchaseDate: new Date("July 17, 2022 05:24:00").toLocaleDateString()
  },
  {
    id: (Math.random() * 100000).toString(16),
    customerID: 234,
    customerName: "Ashley",
    purchasePrice: getRandomInt(0, 200),
    purchaseDate: new Date("July 17, 2022 05:24:00").toLocaleDateString()
  },
  {
    id: (Math.random() * 100000).toString(16),
    customerID: 234,
    customerName: "Ashley",
    purchasePrice: getRandomInt(0, 200),
    purchaseDate: new Date("July 17, 2022 05:24:00").toLocaleDateString()
  },
  {
    id: (Math.random() * 100000).toString(16),
    customerID: 234,
    customerName: "Ashley",
    purchasePrice: getRandomInt(0, 200),
    purchaseDate: new Date("July 17, 2022 05:24:00").toLocaleDateString()
  },
  {
    id: (Math.random() * 100000).toString(16),
    customerID: 345,
    customerName: "Christina",
    purchasePrice: getRandomInt(0, 200),
    purchaseDate: new Date("July 17, 2022 05:24:00").toLocaleDateString()
  },
  {
    id: (Math.random() * 100000).toString(16),
    customerID: 345,
    customerName: "Christina",
    purchasePrice: getRandomInt(0, 200),
    purchaseDate: new Date("July 17, 2022 05:24:00").toLocaleDateString()
  },
  {
    id: (Math.random() * 100000).toString(16),
    customerID: 345,
    customerName: "Christina",
    purchasePrice: getRandomInt(0, 200),
    purchaseDate: new Date("July 17, 2022 05:24:00").toLocaleDateString()
  },
  {
    id: (Math.random() * 100000).toString(16),
    customerID: 234,
    customerName: "Ashley",
    purchasePrice: getRandomInt(0, 200),
    purchaseDate: new Date("May 17, 2022 05:24:00").toLocaleDateString()
  },
  {
    id: (Math.random() * 100000).toString(16),
    customerID: 234,
    customerName: "Ashley",
    purchasePrice: getRandomInt(0, 200),
    purchaseDate: new Date("May 17, 2022 05:24:00").toLocaleDateString()
  },
  {
    id: (Math.random() * 100000).toString(16),
    customerID: 456,
    customerName: "Mike",
    purchasePrice: getRandomInt(0, 200),
    purchaseDate: new Date("July 17, 2022 05:24:00").toLocaleDateString()
  },
  {
    id: (Math.random() * 100000).toString(16),
    customerID: 456,
    customerName: "Mike",
    purchasePrice: getRandomInt(0, 200),
    purchaseDate: new Date("July 17, 2022 05:24:00").toLocaleDateString()
  },
  {
    id: (Math.random() * 100000).toString(16),
    customerID: 456,
    customerName: "Mike",
    purchasePrice: getRandomInt(0, 200),
    purchaseDate: new Date("July 17, 2022 05:24:00").toLocaleDateString()
  },
  {
    id: (Math.random() * 100000).toString(16),
    customerID: 456,
    customerName: "Mike",
    purchasePrice: getRandomInt(0, 200),
    purchaseDate: new Date("July 17, 2022 05:24:00").toLocaleDateString()
  }
];
// console.log(purchaseRecords);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
