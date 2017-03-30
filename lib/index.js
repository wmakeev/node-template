/*
 * <%= projectName %>
<% if (pkg.homepage || pkg.repository) { -%>
 * <%= pkg.homepage || pkg.repository %>
<% } -%>
 *
 * Copyright (c) <%= (new Date).getFullYear() %>, <%= authorName %>
 * Licensed under <%= license %>.
 */

'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const log = require('debug')('index');

module.exports = {
  run: function run() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _asyncToGenerator(function* () {
      log.apply(undefined, _toConsumableArray(args));

      if (args[1] === 'foo') {
        log('uncovered code');
      }

      return 'first arg is - ' + args[0];
    })();
  }
};