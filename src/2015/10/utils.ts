export const lookSay = (input: string) => {
    let newInput = "";
    const splitInput = input.match(/(\d)\1*/g);
    for (const digit of splitInput!) {
        const length = digit.length;
        newInput += length;
        newInput += digit[0];
    }
    return newInput;
}
export const lookSayRecursive = (input: string, iterations: number = 1): number => {

    if (iterations === 0) {
        return input.length;
    }


    return lookSayRecursive(lookSay(input), iterations - 1);
};