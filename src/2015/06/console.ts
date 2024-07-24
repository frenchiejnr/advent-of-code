import { countBrightness, countOccurrences, extractOperation, initializeGrid } from "./index";

const fs = require('fs');

const grid = initializeGrid(1000, 1000);

let instructionFile = fs.readFileSync("src/2015/06/input.txt", "utf8");
let instructions = instructionFile.split("\n");

for (const instruction of instructions) {
    const [operation, x1, y1, x2, y2] = extractOperation(instruction);
    for (let x = x1; x <= x2; x++) {

        for (let y = y1; y <= y2; y++) {
            switch (operation) {
                case "turn on":
                    grid[x][y] = 1;
                    break;
                case "turn off":
                    grid[x][y] = 0;
                    break;
                case "toggle":
                    grid[x][y] = 1 - grid[x][y];
                    break;
            }

        }
    }
}

console.log(countOccurrences(grid, 1));

const grid2 = initializeGrid(1000, 1000);

for (const instruction of instructions) {
    const [operation, x1, y1, x2, y2] = extractOperation(instruction);
    for (let x = x1; x <= x2; x++) {

        for (let y = y1; y <= y2; y++) {
            switch (operation) {
                case "turn on":
                    grid2[x][y] += 1;
                    break;
                case "turn off":
                    if (grid2[x][y] !== 0) {
                        grid2[x][y] -= 1;
                    }
                    break;
                case "toggle":
                    grid2[x][y] += 2;
                    break;
            }

        }
    }
}

console.log(countBrightness(grid2));
