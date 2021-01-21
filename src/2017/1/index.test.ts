import { sumNextDigit, sumCircularDigit } from "./index";
describe('part 1 tests', () => {
    it('should count all matching digits', () => {
    expect(sumNextDigit(1122)).toBe(3);      
    });
    it('should count each matching digit', () => {
        expect(sumNextDigit(1111)).toBe(4);
    });
    it('should not count non-matching digits', () => {
        expect(sumNextDigit(1234)).toBe(0);
    });
    it('should rollover from last digit to first', () => {
        expect(sumNextDigit(91212129)).toBe(9);
    });
});
describe('part 2 tests', () => {
    it('should', () => {
    expect(sumCircularDigit(1212)).toBe(6);      
    });
    it('should', () => {
        expect(sumCircularDigit(1221)).toBe(0);
    });
    it('should', () => {
        expect(sumCircularDigit(123425)).toBe(4);
    });
    it('should', () => {
        expect(sumCircularDigit(123123)).toBe(12);
    });
    it('should', () => {
        expect(sumCircularDigit(12131415)).toBe(4);
    });
});