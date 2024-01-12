const { wrappingPaperNeeded, ribbonNeeded } = require("./index");

describe('part 1 tests', () => {
    it("should expect wrappingPaperNeeded to return the correct value", () => {
        let input1 = "2x3x4";
        let input2 = "1x1x10";
        const result1 = wrappingPaperNeeded(input1);
        const result2 = wrappingPaperNeeded(input2);
        expect(result1).toEqual(58);
        expect(result2).toEqual(43);
    })
})
describe('part 2 tests', () => {
    it("should expect ribbonNeeded to return the correct value", () => {
        let input1 = "2x3x4";
        let input2 = "1x1x10";
        let input3 = "1x2x1";
        const result1 = ribbonNeeded(input1);
        const result2 = ribbonNeeded(input2);
        const result3 = ribbonNeeded(input3);
        expect(result1).toEqual(34);
        expect(result2).toEqual(14);
        expect(result3).toEqual(6);
    })
})
