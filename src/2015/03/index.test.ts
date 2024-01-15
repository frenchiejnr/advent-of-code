const { santaHousesVisited, checkVisited, roboSantaHousesVisited } = require("./index");

describe('part 1 tests', () => {
    it("should expect santaHousesVisited to return the correct value", () => {
        let input1 = ">";
        let input2 = "^>v<";
        let input3 = "^v^v^v^v^v";
        const result1 = santaHousesVisited(input1);
        const result2 = santaHousesVisited(input2);
        const result3 = santaHousesVisited(input3);
        expect(result1).toEqual(2);
        expect(result2).toEqual(4);
        expect(result3).toEqual(2);
    }),
        it("check visited should work", () => {
            const result1 = checkVisited([0, 1], [[0, 0], [0, 2]], 2);
            const result2 = checkVisited([0, 1], [[0, 0], [0, 1]], 2);
            expect(result1).toEqual([3, [[0, 0], [0, 2], [0, 1]]])
            expect(result2).toEqual([2, [[0, 0], [0, 1]]])
        })
})

describe('part 2 tests', () => {
    it("should expect santaHousesVisited to return the correct value", () => {
        let input1 = "^v";
        let input2 = "^>v<";
        let input3 = "^v^v^v^v^v";
        const result1 = roboSantaHousesVisited(input1);
        const result2 = roboSantaHousesVisited(input2);
        const result3 = roboSantaHousesVisited(input3);
        expect(result1).toEqual(3);
        expect(result2).toEqual(3);
        expect(result3).toEqual(11);
    })

})
