/*
 * <%= projectName %>
<% if (pkg.homepage || pkg.repository) { -%>
 * <%= pkg.homepage || pkg.repository %>
<% } -%>
 *
 * Copyright (c) <%= (new Date).getFullYear() %>, <%= authorName %>
 * Licensed under <%= license %>.
 */

'use strict'

const log = require('debug')('index')

module.exports = {
  async run (...args) {
    log(...args)

    if (args[1] === 'foo') {
      log('uncovered code')
    }

    return 'first arg is - ' + args[0]
  }
}
