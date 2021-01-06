const advent2018_2 = require('./index');

describe('part 1', () => {
    test('abcdef should return false', () => {
        expect(advent2018_2.testDouble('abcdef')).toBe(false);
        expect(advent2018_2.testTriple('abcdef')).toBe(false);
    });
    test('bababc should return true', () => {
        expect(advent2018_2.testDouble('bababc')).toBe(true);
        expect(advent2018_2.testTriple('bababc')).toBe(true);
    });
    test('abbcde should return true for 2, false for 3', () => {
        expect(advent2018_2.testDouble('abbcde')).toBe(true);
        expect(advent2018_2.testTriple('abbcde')).toBe(false);
    });
    test('abcccd should return false for 2, true for 3', () => {
        expect(advent2018_2.testDouble('abcccd')).toBe(false);
        expect(advent2018_2.testTriple('abcccd')).toBe(true);
    });
});