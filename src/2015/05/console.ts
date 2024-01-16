import { isNice2, isStringNice } from "./index";

const fs = require('fs');

let wordFile = fs.readFileSync("./input.txt", "utf8");
let words = wordFile.split("\n");

let niceWords = 0;
let nicerWords = 0;

words.forEach((word: string) => {
    if (isStringNice(word) === true) {
        niceWords++;
    }
    if (isNice2(word) === true) {
        nicerWords++;
    }
});

console.log(niceWords, nicerWords);
