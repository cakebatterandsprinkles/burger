// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll();
  }
};

// Export the database functions for the controller (burger_controller.js).
module.exports = burger;
