const getQueryWords = require('../helpers/getQueryWords')

const makeDictionary = dictionary =>
  dictionary.reduce((acc, currentValue) => {
    const pairs = getQueryWords(currentValue)
    pairs.forEach(e => {
      if (acc.hasOwnProperty(e) === false) {
        acc[e] = []
      }

      const arrayToInsert = pairs.filter(p => p !== e)
      acc[e].splice(acc.length - 1, 0, ...arrayToInsert)
    })
    return acc
  }, {})

module.exports = makeDictionary
