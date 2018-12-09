const getQueryWords = require('./getQueryWords')

describe('Test of get query words', () => {
  const expected = ['test', 'query', 'string']
  test('Should return array of words in query', () => {
    expect(getQueryWords('test query string')).toEqual(expected)
  })
  test('Should make string lowercase', () => {
    expect(getQueryWords('Test QUERY stRing')).toEqual(expected)
  })
  test('Should trim if there is more than once space between words', () => {
    expect(getQueryWords('test    query   string')).toEqual(expected)
  })
  test('Should return empty array for empty string', () => {
    expect(getQueryWords('  ')).toEqual([])
  })
})
