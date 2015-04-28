/* globals describe, before, beforeEach, it */
'use strict';
var Sequelize = require('sequelize');
var fs = require('fs');
var Q = require('q');
var path = require('path');
var chai = require('chai');
var expect = chai.expect;

var config = require('./supports/config');

describe(':::: MySQL ::::', function () {
  var sequelize;

  require('./supports/test-import')({
    updatePopulated: true,
    importerOptions: {
      updateOnDuplicate: true
    },
    createSequelize: function () {
      return new Sequelize(
        config.database,
        config.user,
        config.password,
        {
          logging: false
        }
      );
    }
  });
});
