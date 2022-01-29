var part1 = function(measurements) {
    const measurementArray = inputToIntArray(measurements);
    let increaseCount = 0;

    for (let i = 1; i < measurementArray.length; i++) {
        if (measurementArray[i] > measurementArray[i-1]) increaseCount++;
    }

    return increaseCount;
}

var part2 = function(measurements) {
    const measurementArray = inputToIntArray(measurements);
    let increaseCount = 0;
    const windowSize = 3;

    for (let i = 1; i <= measurementArray.length-windowSize; i++) {
        const sumCurrentWindow = sumOfArrayWindow(windowSize, measurementArray, i);
        const sumPreviousWindow = sumOfArrayWindow(windowSize, measurementArray, i-1);

        if (sumCurrentWindow > sumPreviousWindow) increaseCount++
    }

    return increaseCount;
}

function inputToIntArray(input) {
    return input.trim().split(/\r?\n/).map(Number);
}

function sumOfArrayWindow(windowSize, array, startIndex) {
    return array.slice(startIndex, startIndex + windowSize).reduce((a,b) => a+b);
}

module.exports = { part1, part2 };
