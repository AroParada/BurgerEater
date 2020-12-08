var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
var orm = {
    selectALL:(tableInput, done) => {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [tableInput], (err, result) => {
        if (err) throw err;
        done(result);
      });
    },
    insertOne:(tableInput, columInput, values, done) => {
      var queryString = "INSERT INTO ?? (???) VALUES (?)";
      connection.query(queryString, [tableInput, columInput, values], 
        (err, result) => {
        if (err) throw err;
        done(result);
      });
    },
    updateOne:(tableInput, columInput, id, done) => {
      var queryString =
        "UPDATE FROM ?? SET = ? WHERE id = ?";
  
      connection.query(
        queryString,
        [tableInput, columInput, id],
        (err, result) => {
          if (err) throw err;
          done(result);
        }
      );
    },
    deleteOne:(tableInput, columInput, id, done) => {
      var queryString =
         "DELETE FROM ?? WHERE ?? = ? "
         connection.query(queryString, [tableInput, columInput, id, ], 
           (err, result) => {
          if (err) throw err;
          done(result);
             
           }
    
         );
    },
}
  module.exports = orm;
  