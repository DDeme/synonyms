const loadInput = require('./helpers/loadInput')
const makeDictionary = require('./helpers/makeDictionary')
const getResults = require('./lib/getResults')

const main = fileString => {
  const samples = loadInput(fileString)

  let results = []
  samples.forEach(({ queries, dictionary }) => {
    const result = getResults(queries, makeDictionary(dictionary))
    result.forEach(r => results.push(r))
  })
  return results.join('\n') + '\n'
}

module.exports = main
