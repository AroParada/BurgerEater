var orm = require("../config/orm.js");

var burger = {
    selectAll: (cb) => {
      orm.selectAll("burgers", (res) => cb(res));
    },
  
    insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
}
  // Exports the database functions for the controller .
  module.exports = burger;