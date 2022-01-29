var part1 = function(commands) {
    const commandsArray = inputToArray(commands);
    let x = 0;
    let y = 0;

    for (let i = 0; i < commandsArray.length; i++) {

        let [direction, distance] = commandsArray[i].split(' ');
        distance = Number(distance);

        switch (direction) {
            case "forward":
                x += distance;
                break;
            case "down":
                y += distance;
                break;
            case "up":
                y -= distance;
                break;
        }
    }
    return x * y;
}

var part2 = function(commands) {
    const commandsArray = inputToArray(commands);
    let aim = 0;
    let x = 0;
    let y = 0;

    for (let i = 0; i < commandsArray.length; i++) {

        let [direction, distance] = commandsArray[i].split(' ');
        distance = Number(distance);

        switch (direction) {
            case "forward":
                x += distance;
                y += aim * distance;
                break;
            case "down":
                aim += distance;
                break;
            case "up":
                aim -= distance;
                break;
        }
    }
    return x * y;
}

function inputToArray(input) {
    return input.trim().split(/\r?\n/);
}

module.exports = { part1, part2 };
