const calc = require('./app')

test('Add 1 + 2 results 3', sumTest)
test('Add 1 - 2 results -1', subTest)
test('Add 2 x 2 results 4', mulTest)
test('Add 3 ^ 2 results 9', expTest)

function sumTest() {expect(calc.sum(1, 2)).toBe(3)}
function subTest() {expect(calc.sub(1, 2)).toBe(-1)}
// function mulTest() {expect(calc.mul(2, 2)).toBe(4)}
// function expTest() {expect(calc.exp(3, 2)).toBe(9)}