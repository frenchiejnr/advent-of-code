/*
--- Day 2: Corruption Checksum ---
As you walk through the door, a glowing humanoid shape yells in your direction. "You there! Your state appears to be idle. Come help us repair the corruption in this spreadsheet - if we take another millisecond, we'll have to display an hourglass cursor!"

The spreadsheet consists of rows of apparently-random numbers. To make sure the recovery process is on the right track, they need you to calculate the spreadsheet's checksum. For each row, determine the difference between the largest value and the smallest value; the checksum is the sum of all of these differences.

For example, given the following spreadsheet:

5 1 9 5
7 5 3
2 4 6 8
The first row's largest and smallest values are 9 and 1, and their difference is 8.
The second row's largest and smallest values are 7 and 3, and their difference is 4.
The third row's difference is 6.
In this example, the spreadsheet's checksum would be 8 + 4 + 6 = 18.

What is the checksum for the spreadsheet in your puzzle input?
*/
import * as readline from "readline";
import * as fs from "fs";

let input: number[][] = convertFileToArray("src/2017/2/input.txt");

function convertFileToArray(filePath: string) {
    let input: number[][] = []
    let file = fs.readFileSync(filePath, 'utf-8');
    let fileWithLines = file.split(/\r?\n/);
    fileWithLines.forEach(line => {
        let splitLine = line.split("\t").map(Number);
        input.push(splitLine);
    });
    return input;
}

export function getLargest(list: number[]): number {
  return list.sort((a, b) => (a < b ? 1 : -1))[0];
}

export function getSmallest(list: number[]): number {
  return list.sort((a, b) => (a > b ? 1 : -1))[0];
}

export function rowDifference(list: number[]): number {
  return getLargest(list) - getSmallest(list);
}

export function checksum(rows: number[][]): number {
  let total: number = 0;
  rows.forEach((row) => {
    total += rowDifference(row);
  });
  return total;
}

const answer1 = checksum(input);
