import { lookSay } from "./utils";

describe('part 1 tests', () => {
    it("should expect  to return the correct value", () => {
        let input1 = "1";
        const result1 = lookSay(input1);
        expect(result1).toEqual("11");
    })
    it("should expect  to return the correct value", () => {
        let input1 = "11";
        const result1 = lookSay(input1);
        expect(result1).toEqual("21");
    })
    it("should expect  to return the correct value", () => {
        let input1 = "21";
        const result1 = lookSay(input1);
        expect(result1).toEqual("1211");
    })
    it("should expect  to return the correct value", () => {
        let input1 = "1211";
        const result1 = lookSay(input1);
        expect(result1).toEqual("111221");
    })
    it("should expect  to return the correct value", () => {
        let input1 = "111221";
        const result1 = lookSay(input1);
        expect(result1).toEqual("312211");
    })
})
describe('part 2 tests', () => {
    it("should expect  to return the correct value", () => {
        let input1 = "2x3x4";
        let input2 = "1x1x10";
        let input3 = "1x2x1";
        const result1 = (input1);
        const result2 = (input2);
        const result3 = (input3);
        expect(result1).toEqual(34);
        expect(result2).toEqual(14);
        expect(result3).toEqual(6);
    })
})