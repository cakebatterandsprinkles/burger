// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
  displayAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(table, cols, vals, cb) {
    var dbQuery = "INSERT INTO ?? (??) VALUES (?)";
    console.log(dbQuery);
    connection.query(dbQuery, [table, cols, vals], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  update: function(table, objColVals, id, cb) {

      console.log(arguments);
    var dbQuery = "UPDATE ?? SET ? WHERE id = ?";
    console.log(dbQuery);
    connection.query(dbQuery,[table, objColVals, id ], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result); 
    });
  },
  delete: function(table, id, cb) {
    var dbQuery = "DELETE FROM ?? WHERE id = ?";
    connection.query(dbQuery, [table, id], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;
