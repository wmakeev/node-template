/*
 * <%= projectName %>
<% if (pkg.homepage || pkg.repository) { -%>
 * <%= pkg.homepage || pkg.repository %>
<% } -%>
 *
 * Copyright (c) <%= (new Date).getFullYear() %>, <%= authorName %>
 * Licensed under <%= license %>.
 */

// @ts-check

'use strict'

const log = require('debug')('index')

async function addOk (msg) {
  return Promise.resolve(msg + ' ok!')
}

module.exports = {
  async run (...args) {
    // @ts-ignore
    log(...args)

    let arg1 = args[0]

    if (arg1 === 'foo') {
      log('uncovered code')
    } else {
      arg1 = await addOk(arg1)
    }

    return 'first arg is - ' + arg1
  }
}
