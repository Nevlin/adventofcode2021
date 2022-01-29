const { part1, part2 } = require('./solution.js');
const { promises } = require('fs');
const { resolve } = require('path');

const inputExample = promises.readFile(resolve(__dirname, 'input-example.txt'), 'utf8');
const input = promises.readFile(resolve(__dirname, 'input.txt'), 'utf8')

describe('Part 1', () => {
    it('should pass the example', async () => {
        expect(part1(await inputExample)).toBe(1);
    })
    it('should pass the input', async() => {
        expect(part1(await input)).toBe(1);
    })
})

describe('Part 2', () => {
    it('should pass the example', async () => {
        expect(part2(await inputExample)).toBe(1);
    })
    it('should pass the input', async() => {
        expect(part2(await input)).toBe(1);
    })
})