import React from 'react';
import '@testing-library/jest-dom';
import { render, screen} from '@testing-library/react';
import App from './App';
import * as api from './api/purchase.api'
import { act } from 'react-dom/test-utils';
import { purchaseRecordsGroupByMonth, purchaseRecordsParser, purchaseRecordsGroupByCustomer } from "./App"

const mockData = [
    {
        id: 1,
        customerID: 123,
        customerName: "John",
        purchasePrice: 100,
        purchaseDate: new Date("May 17, 2022 03:24:00").toLocaleDateString()
    },
    {
        id: 2,
        customerID: 234,
        customerName: "Ashley",
        purchasePrice: 200,
        purchaseDate: new Date("June 17, 2022 03:24:00").toLocaleDateString()
    },
    {
        id: 3,
        customerID: 345,
        customerName: "Christina",
        purchasePrice: 300,
        purchaseDate: new Date("July 17, 2022 03:24:00").toLocaleDateString()
    }
]

describe('App', () => {
    beforeAll(() => {
        // we're using fake timers because we don't want to
        // wait a full second for this test to run.
        jest.useFakeTimers()
    })
    afterAll(() => {
        jest.useRealTimers()
    })
    it('should match snapshot', () => {
        const { asFragment } = render(<App />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should fetch purchase records when component did mount', async () => {
        jest.spyOn(api, 'fetchPurchaseRecords').mockResolvedValue([])
        render(<App />);
        await act(async () => jest.advanceTimersByTime(1000))
        expect(api.fetchPurchaseRecords).toBeCalledTimes(1);
    })
    it('should show loading when fetching the data', async () => {
        jest.spyOn(api, 'fetchPurchaseRecords').mockResolvedValue([])
        render(<App />);
        const paragraphElement = screen.getByText(/isLoading.../i);
        expect(paragraphElement).toBeInTheDocument();
        expect(paragraphElement.tagName).toBe('H3')
        await act(async () => jest.advanceTimersByTime(1000))
        expect(paragraphElement).not.toBeInTheDocument();
    });
    
    it('should return an array of arrays', () => {
        const output = [[],[],[],[],[mockData[0]],[mockData[1]],[mockData[2]],[],[],[],[],[]]
        expect(purchaseRecordsGroupByMonth(mockData)).toEqual(output);
        
    })

    it('should return an array of objects', () => {
        const output = [{},{},{},{},{ 123 : [ mockData[0] ] },{ 234: [ mockData[1] ] },{ 345: [ mockData[2] ]},{},{},{},{},{}]
        expect(purchaseRecordsParser(mockData)).toEqual(output);
    })

    it('should return an object with customerID as keys', () => {
        const output = { 
            123 : [
                    {   id: 1,
                        customerID: 123,
                        customerName: "John",
                        purchasePrice: 100,
                        purchaseDate: new Date("May 17, 2022 03:24:00").toLocaleDateString()
                    }
            ],
            234 : [
                    {   id: 2,
                        customerID: 234,
                        customerName: "Ashley",
                        purchasePrice: 200,
                        purchaseDate: new Date("June 17, 2022 03:24:00").toLocaleDateString()
                    }
            ],
            345 : [
                    {
                        id: 3,
                        customerID: 345,
                        customerName: "Christina",
                        purchasePrice: 300,
                        purchaseDate: new Date("July 17, 2022 03:24:00").toLocaleDateString()
                    }
            ]
        }
        expect(purchaseRecordsGroupByCustomer(mockData)).toEqual(output)
    })
});