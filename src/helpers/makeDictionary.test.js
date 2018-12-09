const makeDictionary = require('./makeDictionary')

describe('test of make ditionary', () => {
  const exampleDictionary = [
    'big large',
    'large huge',
    'small little',
    'apple banana',
  ]

  test('should return sample prepared dictionary with relations', () => {
    const dictionary = makeDictionary(exampleDictionary)
    expect(dictionary).toMatchSnapshot()
  })
})
