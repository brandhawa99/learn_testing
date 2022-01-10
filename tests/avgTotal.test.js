
const values = require('../programs/avgTotal')

test('find average total max min of array', () =>{
    expect(values.getValues([1,8,3,4,2,6])).toEqual({  average: 4,
        min: 1,
        max: 8,
        length: 6})
})