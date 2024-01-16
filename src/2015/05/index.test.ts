import { isStringNice, isNice2, passRule1, passRule2 } from "./index";

describe('part 1 tests', () => {
    it("should expect isStringNice to return the correct value", () => {
        let input1 = "ugknbfddgicrmopn";
        let input2 = "aaa";
        let input3 = "jchzalrnumimnmhp";
        let input4 = "haegwjzuvuyypxyu";
        let input5 = "dvszwmarrgswjxmb";
        const result1 = isStringNice(input1);
        const result2 = isStringNice(input2);
        const result3 = isStringNice(input3);
        const result4 = isStringNice(input4);
        const result5 = isStringNice(input5);
        expect(result1).toEqual(true);
        expect(result2).toEqual(true);
        expect(result3).toEqual(false);
        expect(result4).toEqual(false);
        expect(result5).toEqual(false);
    })
})
describe('part 2 tests', () => {
    it("should expect isNice2 to return the correct value", () => {
        let input1 = "qjhvhtzxzqqjkmpb";
        let input2 = "uurcxstgmygtbstg";
        let input3 = "ieodomkazucvgmuy";
        let input4 = "xxyxx";
        let input5 = "zgsnvdmlfuplrubt";
        let input6 = "aaaa";
        let input7 = "xyxy";
        let input8 = "opmopgyabjjjoygt";
        const result1 = isNice2(input1);
        const result2 = isNice2(input2);
        const result3 = isNice2(input3);
        const result4 = isNice2(input4);
        const result5 = isNice2(input5);
        const result6 = isNice2(input6);
        const result7 = isNice2(input7);
        const result8 = isNice2(input8);
        expect(result1).toEqual(true);
        expect(result2).toEqual(false);
        expect(result3).toEqual(false);
        expect(result4).toEqual(true);
        expect(result5).toEqual(false);
        expect(result6).toEqual(true);
        expect(result7).toEqual(true);
        expect(result8).toEqual(true);
    })

    it("should expect passRule1 to return the correct value", () => {
        let input1 = "xyxy";
        let input2 = "aabcdefgaa";
        let input3 = "aaa";
        let input4 = "aaaa";
        let input5 = "opmopgyabjjjoygt";
        const result1 = passRule1(input1);
        const result2 = passRule1(input2);
        const result3 = passRule1(input3);
        const result4 = passRule1(input4);
        const result5 = passRule1(input5);
        expect(result1).toEqual(true);
        expect(result2).toEqual(true);
        expect(result3).toEqual(false);
        expect(result4).toEqual(true);
        expect(result5).toEqual(true);
    })
    it("should expect passRule2 to return the correct value", () => {
        let input1 = "xyx";
        let input2 = "abcdefeghi";
        let input3 = "aaa";
        let input4 = "abc";
        const result1 = passRule2(input1);
        const result2 = passRule2(input2);
        const result3 = passRule2(input3);
        const result4 = passRule2(input4);
        expect(result1).toEqual(true);
        expect(result2).toEqual(true);
        expect(result3).toEqual(true);
        expect(result4).toEqual(false);
    })
})