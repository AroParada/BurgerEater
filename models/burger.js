var orm = require("../config/orm.js");

var burger = {
    all: (cb) => {
      orm.all("burgers", (res) => cb(res));
    },
    // The variables cols and vals are arrays.
    create: (cols, vals, cb) => {
      orm.create("burgers", cols, vals, (res) => cb(res));
    },
    update: (colToUpdate, valToUpdate, id, cb) => {
      orm.update("burgers", colToUpdate, valToUpdate, id, cb, (res) => cb(res));
    },
    delete: (colInput, id, cb) => {
      orm.delete("burgers", colInput, id, (res) =>  cb(res));
    }
  };
  
  // Exports the database functions for the controller .
  module.exports = burger;