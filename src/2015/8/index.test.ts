import { codeCharacters, stringCharacters } from ".";

describe('part 1 tests', () => {
    it('should count double quotes as code, not characters', () => {
        let input = "";
        expect(stringCharacters(input)).toBe(0);
        expect(codeCharacters(input)).toBe(2);
    });
    it('should count double quotes as code, other characters as string characters', () => {
        let input = '"abc"';
        expect(stringCharacters(input)).toBe(3);
        expect(codeCharacters(input)).toBe(5);
    });
    it('should count \ as code, but \" as single character', () => {
        let input = "aaa\"aaa";
        expect(stringCharacters(input)).toBe(7);
        expect(codeCharacters(input)).toBe(10);
    });
    it('should count \x27 as code, but \' as single character', () => {
        let input = "\x27";
        expect(stringCharacters(input)).toBe(1);
        expect(codeCharacters(input)).toBe(6);
    });
});