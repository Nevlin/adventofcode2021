var part1 = function(report) {
    const reportArray = inputToArray(report);
    let binaryCount = stringToNumberArray(reportArray[0]);

    for (let i = 1; i < reportArray.length; i++) {
        for (let j = 0; j < binaryCount.length; j++) {

            let newBinary = Number(reportArray[i].charAt(j));
            if (newBinary === 0) newBinary = -1;
            binaryCount[j] += newBinary;
        }
    }

    let gammaBinary = countArrayToBinary(binaryCount);
    let epsilonBinary = flipBinary(gammaBinary);

    return binaryToDecimal(gammaBinary) * binaryToDecimal(epsilonBinary);
}

var part2 = function(report) {
    let reportArray = inputToArray(report);

    let oxygenBinary = getCommonBinary(reportArray, true);
    let co2 = getCommonBinary(reportArray, false);

    return binaryToDecimal(oxygenBinary) * binaryToDecimal(co2);
}

function inputToArray(input) {
    return input.trim().split(/\r?\n/);
}

function stringToNumberArray(string) {
    return Array.from(string).map(Number);
}

function countArrayToBinary(array) {
    return array.map(count => (count > 0) ? 1 : 0).join("");
}

function flipBinary(binary) {
    return Array.from(binary).map(bit => (bit === "1") ? "0" : "1").join("");
}

function binaryToDecimal(binary) {
    return parseInt(binary, 2);
}

function getCommonBinary(array, mostCommon) {
    let index = 0;

    while (array.length > 1 && index < array[0].length) {

        let [ zeroArray, oneArray ] = divideByBinaryAtChar(array, index);
    
        if (zeroArray.length > oneArray.length) {
            array = (mostCommon) ? zeroArray : oneArray;
        } else {
            array = (mostCommon) ? oneArray : zeroArray;
        }
        index++;
    }
    return array[0];
}

function divideByBinaryAtChar(combinedArray, charIndex) {
    let zeroArray = [];
    let oneArray = [];

    for (let i = 0; i < combinedArray.length; i++)  {
        if (combinedArray[i].charAt(charIndex) == "0") {
            zeroArray.push(combinedArray[i]);
        } else {
            oneArray.push(combinedArray[i]);
        }
    }

    return [zeroArray, oneArray];
}

module.exports = { part1, part2 };
