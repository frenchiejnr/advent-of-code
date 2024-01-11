import { getFloor, enterBasement } from "./index";

describe('part 1 tests', () => {
    it("should expect input to equal 0", () => {
        let input1 = "(())";
        let input2 = "()()";
        const result1 = getFloor(input1);
        const result2 = getFloor(input2);
        expect(result1).toEqual(0);
        expect(result2).toEqual(0);
    })
    it("should expect input to equal 3", () => {
        let input1 = "(((";
        let input2 = "(()(()(";
        let input3 = "))(((((";
        const result1 = getFloor(input1);
        const result2 = getFloor(input2);
        const result3 = getFloor(input3);
        expect(result1).toEqual(3);
        expect(result2).toEqual(3);
        expect(result3).toEqual(3);
    })
    it("should expect input to equal -1", () => {
        let input1 = "())";
        let input2 = "))(";
        const result1 = getFloor(input1);
        const result2 = getFloor(input2);
        expect(result1).toEqual(-1);
        expect(result2).toEqual(-1);
    })
    it("should expect input to equal -3", () => {
        let input1 = ")))";
        let input2 = ")())())";
        const result1 = getFloor(input1);
        const result2 = getFloor(input2);
        expect(result1).toEqual(-3);
        expect(result2).toEqual(-3);
    })
})

describe("part 2 tests", () => {
    it("should expect input to equal 1", () => {
        let input = ")";
        const result = enterBasement(input);
        expect(result).toEqual(1);
    })
    it("should expect input to equal 5", () => {
        let input = "()())";
        const result = enterBasement(input);
        expect(result).toEqual(5);
    })
})