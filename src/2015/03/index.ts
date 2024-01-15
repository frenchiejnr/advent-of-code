export const santaHousesVisited = (input: string): number => {
    let location: location = [0, 0]
    let visitedLocations: location[] = [[0, 0]];
    for (const char of input) {
        move(char, location);
        visitedLocations = checkVisited([...location], visitedLocations);
    }
    return visitedLocations.length;
}

export const roboSantaHousesVisited = (input: string): number => {
    let santaLocation: location = [0, 0];
    let roboLocation: location = [0, 0];
    let visitedLocations: location[] = [[0, 0]];
    let charIndex = 0
    for (const char of input) {
        if (charIndex % 2 === 0) {
            move(char, santaLocation);
            visitedLocations = checkVisited([...santaLocation], visitedLocations);
        }
        else {
            move(char, roboLocation);
            visitedLocations = checkVisited([...roboLocation], visitedLocations);
        }
        charIndex++;
    }
    return visitedLocations.length;
}


export const checkVisited = (location: location, visitedLocations: location[]): location[] => {
    const isFound = visitedLocations.some(subArray => JSON.stringify(subArray) === JSON.stringify(location));
    if (!isFound) {
        visitedLocations.push(location);
    }
    return visitedLocations;
}
const move = (char: string, location: location) => {
    if (char === "^") {
        location[0]++;
    }
    if (char === "v") {
        location[0]--;
    }
    if (char === ">") {
        location[1]++;
    }
    if (char === "<") {
        location[1]--;
    }

}

type location = [number, number];
module.exports = { santaHousesVisited, checkVisited, roboSantaHousesVisited }