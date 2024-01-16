export const isStringNice = (input: string): boolean => {
    let rule1, rule2, rule3 = false;

    //rule 1
    let count = (input.match(/[aeiou]/g)?.length ?? 0);
    if (count >= 3) {
        rule1 = true;
    }


    // rule 2 
    let currentChar;
    let previousChar = "";
    for (const char of input) {
        currentChar = char;
        if (currentChar === previousChar) {
            rule2 = true;
            break;
        }
        else {
            previousChar = currentChar;
            rule2 = false;
        }
    }

    // rule 3
    if (
        input.includes("ab") ||
        input.includes("cd") ||
        input.includes("pq") ||
        input.includes("xy")
    ) {
        rule3 = true;
    }


    return (rule1 === true && rule2 === true && rule3 === false);
}

export const isNice2 = (input: string): boolean => {
    let rule1, rule2 = false;
    //rule 1
    rule1 = passRule1(input);
    //rule 2
    rule2 = passRule2(input);

    return rule1 && rule2;
}
export const passRule1 = (input: string): boolean => {
    const pairs: string[] = [];
    const frequencyMap: { [value: string]: number } = {};
    let duplicateCount: number = 0
    for (let index = 0; index < input.length - 1; index++) {
        pairs.push(`${input[index]}${input[index + 1]}`)
    }
    for (const value of pairs) {
        frequencyMap[value] = (frequencyMap[value] || 0) + 1;
        if (frequencyMap[value] > 1) {
            duplicateCount++;
        }
    }
    if (duplicateCount === 0) {
        return false;
    }
    const hasConsecutive = pairs.some((value, index) => value === pairs[index + 1]);
    const has2Consecutive = pairs.some((value, index) => value === pairs[index + 2]);

    if (hasConsecutive && !has2Consecutive && duplicateCount < 2) {
        return false;
    }
    return true;
}
export const passRule2 = (input: string): boolean => {
    for (let index = 0; index < input.length; index++) {
        if (input[index] === input[index + 2]) {
            return true
        }
    }
    return false;
}

module.exports = { isStringNice, isNice2, passRule1, passRule2 };