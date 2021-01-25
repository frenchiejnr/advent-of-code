import { getLargest, getSmallest, rowDifference, checksum, evenlyDivisible } from "./index";

describe("part 1 tests", () => {
  it("subtract largest from smallest", () => {
    expect(rowDifference([5, 1, 9, 5])).toBe(8);
  });
  it("should select the largest", () => {
    expect(getLargest([5, 1, 9, 5])).toBe(9);
  });
  it("should select the smallest", () => {
    expect(getSmallest([5, 1, 9, 5])).toBe(1);
  });
  it("should find correct checksum", () => {
    expect(
      checksum([
        [5, 1, 9, 5],
        [7, 5, 3],
        [2, 4, 6, 8],
      ], rowDifference)
    ).toBe(18);
  });
});
describe("part 2 tests", () => {
  it("subtract largest from smallest", () => {
    expect(evenlyDivisible([5, 9, 2, 8])).toBe(4);
    expect(evenlyDivisible([9, 4, 7, 3])).toBe(3);
    expect(evenlyDivisible([3, 8, 6, 5])).toBe(2);
  });
  it("should find correct checksum", () => {
    expect(
      checksum([
        [5, 9, 2, 8],
        [9, 4, 7, 3],
        [3, 8, 6, 5],
      ], evenlyDivisible)
    ).toBe(9);
  });
});
