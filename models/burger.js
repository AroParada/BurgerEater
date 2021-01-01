var orm = require("../config/orm.js");

var burger = {
    selectAll: (cb) => {
      orm.selectAll("burgers", (res) => cb(res));
    },
  };
  
  // Exports the database functions for the controller .
  module.exports = burger;