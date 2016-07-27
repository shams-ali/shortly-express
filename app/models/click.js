var db = require('../config');
var Link = require('./link.js');

var Click = db.Model.extend({
  tableName: 'clicks',
  hasTimestamps: true,
  user: function() {
    return this.belongsTo(Link, 'linkId');
  }
});

module.exports = Click;
