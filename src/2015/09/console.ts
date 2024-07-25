import { calculatePermuationDistance, generatePermutations, getUniqueLocations, parseDistanceData } from ".";

const fs = require('fs');

let instructionFile = fs.readFileSync("src/2015/09/input.txt", "utf8")

const distanceMatrix = parseDistanceData(instructionFile);
const locations = getUniqueLocations(distanceMatrix);

const permutations = generatePermutations(locations);

const distances = []

for (const permutation of permutations) {
    distances.push(calculatePermuationDistance(permutation, distanceMatrix));
}

console.log(Math.min(...distances));
console.log(Math.max(...distances));


