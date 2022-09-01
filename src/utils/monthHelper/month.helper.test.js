import { convertMonthNumberToString } from './month.helper'

describe('App', () => { 
    it('should return a string value pertaining to the month of the year', () => {
        expect(convertMonthNumberToString(0)).toBe('January');
        expect(convertMonthNumberToString(1)).toBe('February');
        expect(convertMonthNumberToString(2)).toBe('March');
        expect(convertMonthNumberToString(3)).toBe('April');
        expect(convertMonthNumberToString(4)).toBe('May');
        expect(convertMonthNumberToString(5)).toBe('June');
        expect(convertMonthNumberToString(6)).toBe('July');
        expect(convertMonthNumberToString(7)).toBe('August');
        expect(convertMonthNumberToString(8)).toBe('September');
        expect(convertMonthNumberToString(9)).toBe('October');
        expect(convertMonthNumberToString(10)).toBe('November');
        expect(convertMonthNumberToString(11)).toBe('December');
    })
})