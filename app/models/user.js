var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');



var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  defaults: {
    username: 'someusernamehere', //fix this
    password: 'somepasswordhere' //fix this
  }
  //add table properties here;
  //collumns username and passwords
});

//add init function
  //this.on('creating' ...)

module.exports = User;
