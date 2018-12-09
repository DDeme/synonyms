const main = require('./src/index.js')
const fs = require('fs')

const INPUT_FILE = './test.in'
const OUTPUT_FILE = './output.out'

const fileString = fs.readFileSync(INPUT_FILE, { encoding: 'utf-8' })
const result = main(fileString)
fs.writeFileSync(OUTPUT_FILE, result, { encoding: 'utf-8' })
