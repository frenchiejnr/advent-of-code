import { bitwiseAnd, bitwiseOr, leftShift, rightShift, storeInVariable, wires, bitwiseNot } from "./index";

describe("part 1 tests", () => {
  it("should store in variable ", () => {
    let wires: wires = {};
    storeInVariable(123, wires, "x");
    storeInVariable(456, wires, "y");
    expect(wires["x"]).toBe(123);
    expect(wires["y"]).toBe(456);
  });
  it("bitwise and ", () => {
    let wires: wires = { x: 123, y: 456 };
    let d = bitwiseAnd(wires["x"], wires["y"]);
    expect(d).toBe(72);
  });
  it("bitwise or ", () => {
    let wires: wires = { x: 123, y: 456 };
    let e = bitwiseOr(wires["x"], wires["y"]);
    expect(e).toBe(507);
  });
  it("leftshift ", () => {
    let wires: wires = { x: 123};
    let f = leftShift(wires["x"], 2);
    expect(f).toBe(492);
  });
  it("rightshift ", () => {
    let wires: wires = { y: 456};
    let g = rightShift(wires["y"], 2);
    expect(g).toBe(114);
  });
  it("not ", () => {
    let wires: wires = { x: 123, y: 456 };
    let h = bitwiseNot(wires["x"]);
    let i = bitwiseNot(wires["y"]);
    expect(h).toBe(65412);
    expect(i).toBe(65079);
  });
});
