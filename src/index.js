'use strict'

const queryString = require('query-string')

const filename = queryString.parse(window.location.search).s
const path = `./slides/${filename}.md`

remark.create({
  ratio: '16:9',
  highlightStyle: 'monokai',
  sourceUrl: path
})
