
const calculator = require('../programs/calculator')

test('add 3 +2 = 5', () =>{
    expect(calculator.add(3,2)).toBe(5)
})

test('subtract 3 +2 = 1', () =>{
    expect(calculator.subtract(3,2)).toBe(1)
})

test('multiply 3 * 2 = 6', () =>{
    expect(calculator.multiply(3,2)).toBe(6)
})

test('divide 4/2 = 2', () =>{
    expect(calculator.divide(4,2)).toBe(2)
})