import { getLargest, getSmallest, rowDifference, checksum } from "./index";

describe('part 1 tests', () => {
    it('subtract largest from smallest', () => {
    expect(rowDifference([5, 1, 9, 5])).toBe(8);      
    });
    it('should select the largest', () => {
        expect(getLargest([5, 1, 9,5])).toBe(9);
    });
    it('should select the smallest', () => {
        expect(getSmallest([5, 1, 9,5])).toBe(1);
    });
    it('should find correct checksum', () => {
        expect(checksum([[5, 1, 9,5],[7,5,3],[2,4,6,8]])).toBe(18);
    });
    });