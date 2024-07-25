interface DistanceMatrix {
    [key: string]: {
        [key: string]: number;
    };
}
// 1. Create a matrix or graph
export const parseDistanceData = (inputData: string) => {

    const distances: DistanceMatrix = {}
    const lines = inputData.split('\n')
    for (const line of lines) {
        const [location1, location2, distanceString] = line.split(/ = | to /);
        const distance = parseInt(distanceString);

        if (!distances[location1]) {
            distances[location1] = {};
        }
        if (!distances[location2]) {
            distances[location2] = {};
        }
        distances[location1][location2] = distance;
        distances[location2][location1] = distance;
    }
    return distances;
};
// 2. Generate all possible routes
export const getUniqueLocations = (distanceMatrix: DistanceMatrix) => {
    return Object.keys(distanceMatrix);
}

export const generatePermutations = <T>(arr: T[]): T[][] => {
    const result: T[][] = [];

    const permute = (arr: T[], m: number = arr.length) => {
        if (m === 1) {
            result.push([...arr]);
        } else {
            for (let i = 0; i < m; i++) {
                permute(arr, m - 1);
                if (m % 2 === 1) {
                    [arr[0], arr[m - 1]] = [arr[m - 1], arr[0]];
                } else {
                    [arr[i], arr[m - 1]] = [arr[m - 1], arr[i]];
                }
            }
        }
    };

    permute(arr);
    return result;
};

// 3. Iterate through permutations

export const calculatePermuationDistance = (permutation: string[], distanceMatrix: DistanceMatrix) => {
    let distance = 0;
    for (let i = 0; i < permutation.length - 1; i++) {
        const currentElement = permutation[i];
        const nextElement = permutation[i + 1];
        // Do something with currentElement and nextElement
        distance += distanceMatrix[currentElement][nextElement];
    }
    return distance;
}
// 4. Compare Distances
