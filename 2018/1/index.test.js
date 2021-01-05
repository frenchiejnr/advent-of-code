const calculateFrequency = require("./index");

test('all positive', () => {
    let input = [+1, +1, +1]
    expect(calculateFrequency(input)).toBe(3);
})
test('with negative', () => {
    let input = [+1, +1, -2]
    expect(calculateFrequency(input)).toBe(0);
})
test('all negative', () => {
    let input = [-1, -2, -3]
    expect(calculateFrequency(input)).toBe(-6);
})
test('mixture', () => {
    let input = [+1, -2, +3, +1]
    expect(calculateFrequency(input)).toBe(3);
})

