var connection = require("../config/connection.js");
// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
var orm = {
    selectAll:(tableInput, cb) => {
      var queryString = "SELECT * FROM" + tableInput + ";";
      connection.query(queryString, (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
  
    insertOne: function(tableInput, column, cb) {
      var colString = column.toString();
      var queryString = "INSERT INTO " + tableInput + "(burger_name, devoured) VALUES ('" + colString + "', false)";
      console.log(queryString);
      connection.query(queryString, function (err, result) {
        if (err) throw err;
        cb(result);
      });
    },

    updateOne:(tableInput, columInput, condition, cb) => {
      var queryString = "UPDATE" + tableInput;
  
      connection.query(queryString,
        [tableInput, columInput, condition, id],
        (err, result) => {
          if (err) throw err;
          cb(result);
        }
      );
    },
}
  module.exports = orm;
  