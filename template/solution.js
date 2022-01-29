var part1 = function(commands) {
    const commandsArray = inputToArray(commands);
    return commandsArray;
}

var part2 = function(commands) {
    const commandsArray = inputToArray(commands);
    return commandsArray;
}

function inputToArray(input) {
    return input.trim().split(/\r?\n/);
}

module.exports = { part1, part2 };
