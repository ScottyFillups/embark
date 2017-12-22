'use strict'
console.log('hi')
const queryString = require('query-string')

const filename = queryString.parse(window.location.search).s
const path = `/slides/${filename}.md`

console.log(path)

remark.create({
  sourceUrl: path
})
