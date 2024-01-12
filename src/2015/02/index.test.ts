const { wrappingPaperNeeded } = require( "./index");

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
