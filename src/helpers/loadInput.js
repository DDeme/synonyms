const loadInput = fileString => {
  const array = fileString.split('\n')
  let sampleIndex = 0
  let isDictionary = true
  let samples = []

  array.forEach((elm, i) => {
    if (i === 0) {
      const numOfSamples = parseInt(elm)
      for (let index = 0; index < numOfSamples; index++) {
        samples.push({ dictionary: [], queries: [] })
      }
      return
    } else if (elm !== '') {
      const number = parseInt(elm)
      const isString = isNaN(number)
      if (isString) {
        if (isDictionary) {
          samples[sampleIndex].dictionary.push(elm)
        } else {
          samples[sampleIndex].queries.push(elm)
        }
      }

      if (isString === false && i !== 1) {
        if (isDictionary === false) {
          sampleIndex++
        }

        isDictionary = !isDictionary
      }
    }
  })
  return samples
}

module.exports = loadInput
