const fs = require('fs');
export const wrappingPaperNeeded = (input: string) => {
    let feet = 0;
    let [l, w, h] = input.split('x').map(Number);
    let sideAreas = [(2 * l * w), (2 * w * h), (2 * h * l)]
    let smallestSide = Math.min(...sideAreas) / 2;
    feet = sideAreas.reduce((accumulator, currentValue) => accumulator + currentValue, 0,) + smallestSide;
    return feet;
}

const totalWrappingPaperNeeded = (path: string) => {
    let total = 0;
    let lines = fs.readFileSync(path, "utf8");
    let linesArray = lines.split("\n");

    linesArray.forEach((line: string) => {
        total += wrappingPaperNeeded(line)
    });
    return total;
}

module.exports = { wrappingPaperNeeded, totalWrappingPaperNeeded };