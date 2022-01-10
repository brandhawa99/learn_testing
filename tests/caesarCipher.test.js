const caesarCipher = require('../programs/caesarCipher')

test('shift string by one char',() =>{
    expect(caesarCipher.encrypt("hello how, are you doing.")).toBe('ifmmp ipx, bsf zpv epjoh.')
})