import * as fs from "fs";

let file1 = fs.readFileSync("src/2015/8/input.txt", "utf-8").split(/\r?\n/);
let codeTotal = 0;
let stringTotal = 0;
let encodedTotal = 0;
file1.forEach(line => {
    codeTotal+= codeCharacters(line);
    let line2 = JSON.stringify(line)
    encodedTotal += stringCharacters(line2);
    line = eval(line);
    stringTotal += stringCharacters(line);

});

console.log(codeTotal - stringTotal, encodedTotal-stringTotal);

export function stringCharacters(input:string) {
    return input.length;
}

export function codeCharacters(input: any) {
    return input.length;
    }