const crypto = require('crypto')
export const md5XZeros = (secretKey: string,
    zeros: number,
    startingResult: number = 0,
): number => {
    let result = startingResult;
    let found = false;
    let zerosToMatch = "0".repeat(zeros);

    while (!found) {
        let hash = crypto.createHash('md5').update(`${secretKey}${result}`).digest("hex");
        if (hash.substr(0, zeros) === zerosToMatch) {
            found = true;
        }
        else {
            result++;
        }

    }
    return result;
}

module.exports = { md5XZeros };