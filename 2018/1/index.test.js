const advent2018_1 = require("./index");

test('all positive', () => {
    let input = [+1, +1, +1]
    expect(advent2018_1.calculateFrequency(input)).toBe(3);
})
test('with negative', () => {
    let input = [+1, +1, -2]
    expect(advent2018_1.calculateFrequency(input)).toBe(0);
})
test('all negative', () => {
    let input = [-1, -2, -3]
    expect(advent2018_1.calculateFrequency(input)).toBe(-6);
})
test('mixture', () => {
    let input = [+1, -2, +3, +1]
    expect(advent2018_1.calculateFrequency(input)).toBe(3);
})

test('sameFrequency 1', () => {
    let input = [+1, -1]
    expect(advent2018_1.repeatedFrequency(input)).toBe(0);
})
test('sameFrequency 2', () => {
    let input = [+3, +3, +4, -2, -4]
    expect(advent2018_1.repeatedFrequency(input)).toBe(10);
})
test('sameFrequency 3', () => {
    let input = [-6, +3, +8, +5, -6]
    expect(advent2018_1.repeatedFrequency(input)).toBe(5);
})
test('sameFrequency 4', () => {
    let input = [+7, +7, -2, -7, -4]
    expect(advent2018_1.repeatedFrequency(input)).toBe(14);
})

