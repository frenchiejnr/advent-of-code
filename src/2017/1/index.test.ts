import { sumNextDigit } from "./index";
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