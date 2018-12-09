const getQueryWords = require('../helpers/getQueryWords')

const DICTIONARY_RESULTS = {
  SYNONYMS: 'synonyms',
  DIFFERENT: 'different',
}

const loadAllWordsRelations = (word, dictionary, excludes = []) => {
  excludes.push(word)
  const words = dictionary[word].filter(w => !excludes.includes(w))
  if (words.length > 0) {
    words.forEach(word => {
      loadAllWordsRelations(word, dictionary, excludes).forEach(wr => {
        if (!excludes.includes(wr)) {
          excludes.push(wr)
        }
      })
    })
  }
  return excludes
}

const areEq = words => words.every(word => word === words[0])

const existInDictionary = (words, dictionary) =>
  words.every(word => dictionary.hasOwnProperty(word))

const explicitRelation = (words, dictionary) =>
  words.some(
    (word, i) => (i === 0 ? false : dictionary[words[i - 1]].includes(word))
  )

const implicitRelation = (words, dictionary) =>
  words.some(
    (word, i) =>
      i === 0
        ? false
        : loadAllWordsRelations(words[i - 1], dictionary).some(w => w === word)
  )

const hasRelation = (...args) =>
  explicitRelation(...args) || implicitRelation(...args)

const inDictionary = (...args) =>
  existInDictionary(...args) && hasRelation(...args)

const verifySynonyms = (...args) => areEq(...args) || inDictionary(...args)

const getResults = (queries, dictionary) =>
  queries.map(
    query =>
      verifySynonyms(getQueryWords(query), dictionary)
        ? DICTIONARY_RESULTS.SYNONYMS
        : DICTIONARY_RESULTS.DIFFERENT
  )

module.exports = getResults
