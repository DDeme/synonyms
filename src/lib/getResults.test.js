const getResults = require('./getResults')

describe('test of get results function', () => {
  const dictionary = {
    big: ['large'],
    large: ['huge', 'big'],
    huge: ['large'],
    small: ['little'],
    little: ['small'],
    apple: ['banana'],
    banana: ['apple'],
  }
  const queries = [
    'same same',
    'big huge',
    'huge big',
    'apple peach',
    'big tall',
    'peach PEACH',
  ]
  test('sample integration test for getResults', () => {
    expect(getResults(queries, dictionary)).toMatchSnapshot()
  })

  // TODO: cover more l
})
