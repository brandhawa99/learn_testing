const capitalize = require('../programs/capitalize')

test('capitalize start to become Start', () =>{
    expect(capitalize('start')).toBe('Start')
})