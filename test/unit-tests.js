var assert = require('assert');
var sequelize = exports.sequelize = require('../conn.js');
var People = require('../models/peoples.js');

describe('Peoples Tests', function() {

  it('should create an people', function(done) {
    People
      .create({name: 'gabo1'})
      .then(function(record){
        assert.ok(record.get('name') === 'gabo1', 'Email does not match');
        done();
      })
      .catch(function (err) {
        done(err);
      });
  });

});