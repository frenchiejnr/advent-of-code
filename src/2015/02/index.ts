const fs = require('fs');
export const wrappingPaperNeeded = (input: string): number => {
    let feet = 0;
    let [l, w, h] = input.split('x').map(Number);
    let sideAreas = [(2 * l * w), (2 * w * h), (2 * h * l)]
    let smallestSide = Math.min(...sideAreas) / 2;
    feet = sideAreas.reduce((accumulator, currentValue) => accumulator + currentValue, 0,) + smallestSide;
    return feet;
}

const totalsNeeded = (path: string): number[] => {
    let wrappingPaper = 0;
    let ribbon = 0;
    let presents = fs.readFileSync(path, "utf8");
    let presentsArray = presents.split("\n");

    presentsArray.forEach((present: string) => {
        wrappingPaper += wrappingPaperNeeded(present)
        ribbon += ribbonNeeded(present);
    });
    return [wrappingPaper, ribbon];
}

export const ribbonNeeded = (input: string): number => {
    let feet = 0
    let [l, w, h] = input.split('x').map(Number);
    let smallestSides = [l, w, h].sort((a, b) => a - b);
    let wrap = (smallestSides[0] * 2) + (smallestSides[1] * 2);
    let bow = l * w * h;
    feet = wrap + bow;
    return feet;
}



module.exports = { wrappingPaperNeeded, ribbonNeeded, totalsNeeded };