var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');



var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  defaults: {
    username: 'someusernamehere',
    password: 'somepasswordhere'
  }
});


module.exports = User;
