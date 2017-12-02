'use strict'

const test = require('blue-tape')
const nodeTemplate = require('..')

test('index', t => {
  t.equal(typeof nodeTemplate, 'object', 'should be object')
  t.end()
})

test('index.run', async t => {
  t.equal(typeof nodeTemplate.run, 'function', 'should be function')
  let result = await nodeTemplate.run('one', 2)
  t.equal(result, 'first arg is - one ok!', 'should return "one"')
})
