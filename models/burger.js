var orm = require("../config/orm.js");

var burger = {
    selectAll: (cb) => {
      orm.selectAll("burgers", (res) => cb(res));
    },
    // The variables cols and vals are arrays.
    insertOne: (cols, vals, cb) => {
      orm.insertOne("burgers", cols, vals, (res) => cb(res));
    },
    updateOne: (colToUpdate, condition, cb) => {
      orm.updateOne("burgers", colToUpdate, condition, cb, (res) => cb(res));
    },
  };
  
  // Exports the database functions for the controller .
  module.exports = burger;