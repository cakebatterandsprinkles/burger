// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  displayAll: function(cb) {
    orm.displayAll("burgers",function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, id, cb) {
    orm.update("burgers", objColVals, id, function(res) {
      cb(res);
    });
  },
  delete: function(id, cb) {
    orm.delete("burgers", id, function(res) {
      cb(res);
    });
  }
};
// Export the database functions for the controller (burger_controller.js).
module.exports = burger;
