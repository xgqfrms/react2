/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

'use strict';

const React = require('./src/React');

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
module.exports = React.default || React;

// react 入口文件， 导出 commonjs2 module

