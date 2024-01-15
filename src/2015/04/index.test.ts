import { md5XZeros } from "./index"

describe('part 1 tests', () => {
    it("should expect md5XZeros to return the correct value", () => {
        let input1 = "abcdef";
        let input2 = "pqrstuv";
        const result1 = md5XZeros(input1, 5, 609042);
        const result2 = md5XZeros(input2, 5, 1048968);
        expect(result1).toEqual(609043);
        expect(result2).toEqual(1048970);
    })
})
// describe('part 2 tests', () => {
//     it("should expect md6Zeros to return the correct value", () => {
//         let input1 = "2x3x4";
//         let input2 = "1x1x10";
//         let input3 = "1x2x1";
//         const result1 = md6Zeros(input1);
//         const result2 = md6Zeros(input2);
//         const result3 = md6Zeros(input3);
//         expect(result1).toEqual(34);
//         expect(result2).toEqual(14);
//         expect(result3).toEqual(6);
//     })
// })