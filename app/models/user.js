var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
 


var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  // defaults: {
  'username': this.username, //fix this
  'password': this.password //fix this
  // }
  //add table properties here;
  //collumns username and passwords
});

//add init function
  //this.on('creating' ...)

module.exports = User;
 