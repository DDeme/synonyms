const sanitilize = query => query.trim().replace(/\s\s+/g, ' ')
const getQueryWords = query => {
  const sanitilized = sanitilize(query)
  return sanitilized ? sanitilized.toLowerCase().split(' ') : []
}

module.exports = getQueryWords
