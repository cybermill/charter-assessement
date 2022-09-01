import React from "react";
import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import PurchaseTable from "./PurchaseTable";
import { calculateRewardPoints, calculateTotalRewardPoints} from "./PurchaseTable";
import { convertMonthNumberToString } from "../../utils/monthHelper/month.helper";

const mockData =  [
    {
        id: 1,
        customerID: 123,
        customerName: "John",
        purchasePrice: 120,
        purchaseDate: new Date("May 17, 2022 03:24:00").toLocaleDateString()
    },
    {
        id: 2,
        customerID: 234,
        customerName: "Ashley",
        purchasePrice: 100,
        purchaseDate: new Date("June 17, 2022 03:24:00").toLocaleDateString()
    },
    {
        id: 3,
        customerID: 345,
        customerName: "Christina",
        purchasePrice: 100,
        purchaseDate: new Date("July 17, 2022 03:24:00").toLocaleDateString()
    }
];

describe('PurchaseTable', () => { 

    it('should match snapshot', () => {
        const { asFragment } = render(<PurchaseTable/>);
        expect(asFragment()).toMatchSnapshot();
      });

      it('should pass', () => {
        expect('test').toBe('test');
    })

    it(`should render purchaseTable component`, () => {
        const purchaseTableProps = {
            monthNum: 6,
            purchaseRecords: [
                { 
                    id: "16a58.d4801e278",
                    customerID: 234,
                    customerName: "Ashley",
                    purchasePrice: 144,
                    purchaseDate: new Date("May 17, 2022 03:24:00").toLocaleDateString()
                },
                { 
                    id: "a97c.9cab99a75",
                    customerID: 345,
                    customerName: "Christina",
                    purchasePrice: 125,
                    purchaseDate:new Date("June 17, 2022 04:24:00").toLocaleDateString()
                },
                { 
                    id: "f8ac.fc58777ba8",
                    customerID: 456,
                    customerName: "Mike",
                    purchasePrice: 160,
                    purchaseDate:new Date("July 17, 2022 05:24:00").toLocaleDateString()
                },
            ]
        }
        
        render(<PurchaseTable {...purchaseTableProps}/>);
        const customerIDElement = screen.getByRole('columnheader', {name: 'customer ID'})
        expect(customerIDElement).toBeInTheDocument();
        expect(customerIDElement.tagName).toBe('TH');
        /*monthNum prop: month header: */
        const h1Element = screen.getByText(convertMonthNumberToString(purchaseTableProps.monthNum))
        expect(h1Element).toBeInTheDocument();
        expect(h1Element.tagName).toBe('H1');
        /*purchaseRecords prop: index position - 0*/
        const indexOneFirstTDElement = screen.getByRole('cell', {name: purchaseTableProps.purchaseRecords[0].id});
        expect(indexOneFirstTDElement).toBeInTheDocument();
        expect(indexOneFirstTDElement.tagName).toBe('TD');
        const indexOneSecondTDElement = screen.getByRole('cell', {name: purchaseTableProps.purchaseRecords[0].customerID});
        expect(indexOneSecondTDElement).toBeInTheDocument();
        expect(indexOneSecondTDElement.tagName).toBe('TD')
        const indexOneThirdTDElement = screen.getByRole('cell', {name: purchaseTableProps.purchaseRecords[0].customerName});
        expect(indexOneThirdTDElement).toBeInTheDocument();
        expect(indexOneThirdTDElement.tagName).toBe('TD');
        const indexOneFourthTDElement = screen.getByRole('cell', {name: purchaseTableProps.purchaseRecords[0].purchasePrice});
        expect(indexOneFourthTDElement).toBeInTheDocument();
        expect(indexOneFourthTDElement.tagName).toBe('TD');
        const indexOneFifthTDElement = screen.getByTitle(purchaseTableProps.purchaseRecords[0].purchaseDate);
        expect(indexOneFifthTDElement).toBeInTheDocument();
        expect(indexOneFifthTDElement.tagName).toBe('TD');
        expect(indexOneFifthTDElement).toHaveTextContent(purchaseTableProps.purchaseRecords[0].purchaseDate);
        /*purchaseRecords prop: index position - 1*/
        const indexTwoFirstTDElement = screen.getByRole('cell', { name: purchaseTableProps.purchaseRecords[1].id});
        expect(indexTwoFirstTDElement).toBeInTheDocument();
        expect(indexTwoFirstTDElement.tagName).toBe('TD');
        const indexTwoSecondTDElement = screen.getByRole('cell', { name: purchaseTableProps.purchaseRecords[1].customerID});
        expect(indexTwoSecondTDElement).toBeInTheDocument();
        expect(indexTwoSecondTDElement.tagName).toBe('TD');
        const indexTwoThirdTDElement = screen.getByRole('cell', { name: purchaseTableProps.purchaseRecords[1].customerName});
        expect(indexTwoThirdTDElement).toBeInTheDocument();
        expect(indexTwoThirdTDElement.tagName).toBe('TD');
        const indexTwoFourthTDElement = screen.getByRole('cell', { name: purchaseTableProps.purchaseRecords[1].purchasePrice});
        expect(indexTwoFourthTDElement).toBeInTheDocument();
        expect(indexTwoFourthTDElement.tagName).toBe('TD');
        const indexTwoFifthTDElement = screen.getByTitle(purchaseTableProps.purchaseRecords[1].purchaseDate);
        expect(indexTwoFifthTDElement).toBeInTheDocument();
        expect(indexTwoFifthTDElement.tagName).toBe('TD');
        expect(indexTwoFifthTDElement).toHaveTextContent(purchaseTableProps.purchaseRecords[1].purchaseDate);
        /*purchaseRecords prop: index position - 2*/
        const indexThreeFirstTDElement = screen.getByRole('cell', { name: purchaseTableProps.purchaseRecords[2].id});
        expect(indexThreeFirstTDElement).toBeInTheDocument();
        expect(indexThreeFirstTDElement.tagName).toBe('TD');
        const indexThreeSecondTDElement = screen.getByRole('cell', { name: purchaseTableProps.purchaseRecords[2].customerID});
        expect(indexThreeSecondTDElement).toBeInTheDocument();
        expect(indexThreeSecondTDElement.tagName).toBe('TD');
        const indexThreeThirdTDElement = screen.getByRole('cell', { name: purchaseTableProps.purchaseRecords[2].customerName});
        expect(indexThreeThirdTDElement).toBeInTheDocument();
        expect(indexThreeThirdTDElement.tagName).toBe('TD');
        const indexThreeFourthTDElement = screen.getByRole('cell', { name: purchaseTableProps.purchaseRecords[2].purchasePrice});
        expect(indexThreeFourthTDElement).toBeInTheDocument();
        expect(indexThreeFourthTDElement.tagName).toBe('TD');
        const indexThreeFifthTDElement = screen.getByTitle(purchaseTableProps.purchaseRecords[2].purchaseDate);
        expect(indexThreeFifthTDElement).toBeInTheDocument();
        expect(indexThreeFifthTDElement.tagName).toBe('TD');
        expect(indexThreeFifthTDElement).toHaveTextContent(purchaseTableProps.purchaseRecords[2].purchaseDate);
    });

    it('should return a number value', () => {
        expect(calculateRewardPoints(120)).toBe(90);
        expect(calculateRewardPoints(101)).toBe(52);
        expect(calculateRewardPoints(100)).toBe(50);
        expect(calculateRewardPoints(99)).toBe(49);
        expect(calculateRewardPoints(51)).toBe(1);
        expect(calculateRewardPoints(50)).toBe(0);
        expect(calculateRewardPoints(49)).toBe(0);
        expect(calculateRewardPoints(0)).toBe(0);
    });

    it('should return a total number value of reward points', () => {
        expect(calculateTotalRewardPoints(mockData)).toBe(190)
    })
});






