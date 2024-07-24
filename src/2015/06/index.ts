// Initialize the Grid:
// Create a two - dimensional grid of size 1000x1000 to represent the lights.
// Initialize all elements in the grid to 0(representing lights being off).

export const initializeGrid = (x: number, y: number): number[][] => {
    return new Array(x)
        .fill(0).map(() => new Array(y).fill(0));
}

// Process Instructions:
// Loop through each instruction provided by Santa.
// Extract the operation(turn on, turn off, toggle) and the two coordinate pairs representing opposite corners of the rectangle.
export const extractOperation = (instruction: string): [string, number, number, number, number] => {
    const split = instruction.split(" ");

    const operation = split.length === 5 ? split[0] + " " + split[1] : split[0];
    const coordinates = split.length === 5 ? [split[2], split[4]] : [split[1], split[3]];

    const x1 = parseInt(coordinates[0].split(",")[0]);
    const y1 = parseInt(coordinates[0].split(",")[1]);
    const x2 = parseInt(coordinates[1].split(",")[0]);
    const y2 = parseInt(coordinates[1].split(",")[1]);


    return [operation, x1, y1, x2, y2]
}

// Update Grid based on Operation:

// For each operation:
// If turn on: Set all elements in the grid within the specified rectangle(inclusive of the corners) to 1(representing lights being turned on).
// If turn off: Set all elements in the grid within the specified rectangle to 0(representing lights being turned off).
// If toggle: Invert the values(0 to 1 and 1 to 0) of all elements in the grid within the specified rectangle.
// Calculate Lit Lights:

export const countOccurrences = (array: [], element: number) => {
    return array.flat().reduce((acc, curr) => acc + (curr === element ? 1 : 0), 0);
};
export const countBrightness = (array: []) => {
    return array.flat().reduce((acc, curr) => acc + curr, 0);
};

// After processing all instructions, iterate through the entire grid and count the number of elements with a value of 1. This represents the total number of lit lights.
//     Output:

// Print the final number of lit lights.


module.exports = { initializeGrid, extractOperation, countOccurrences, countBrightness };