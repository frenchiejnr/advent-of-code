const { initializeGrid, extractOperation } = require("./index");


describe('part 1 tests', () => {
    it("should expect  to return the correct value", () => {
        let input1 = "turn on 0,0 through 999,999";
        let input2 = "toggle 0,0 through 999,0";
        let input3 = "turn off 499,499 through 500,500";
        const resultGrid = initializeGrid(3, 3);
        const result1 = extractOperation(input1);
        const result2 = extractOperation(input2);
        const result3 = extractOperation(input3);
        expect(resultGrid).toEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
        expect(result1).toEqual(["turn on", 0, 0, 999, 999]);
        expect(result2).toEqual(["toggle", 0, 0, 999, 0]);
        expect(result3).toEqual(["turn off", 499, 499, 500, 500]);
    })
})
// describe('part 2 tests', () => {
//     it("should expect  to return the correct value", () => {
//         let input1 = "2x3x4";
//         let input2 = "1x1x10";
//         let input3 = "1x2x1";
//         const result1 = (input1);
//         const result2 = (input2);
//         const result3 = (input3);
//         expect(result1).toEqual(34);
//         expect(result2).toEqual(14);
//         expect(result3).toEqual(6);
//     })
// })