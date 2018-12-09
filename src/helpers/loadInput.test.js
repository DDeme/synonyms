const loadInput = require('./loadInput')

describe('Test of load input', () => {
  const exampleFileString = `2
    4
    big large
    large huge
    small little
    apple banana
    6
    same same
    big huge
    huge big
    apple peach
    big tall
    peach PEACH
    5   
    wood FORest
    meadoW PrAirIe
    WOOD Lumber
    lumber forest
    lumber forest
    2
    wood LUMBER
    mEADOw fire`

  test('should return parsed object', () => {
    expect(loadInput(exampleFileString)).toMatchSnapshot()
  })
})
