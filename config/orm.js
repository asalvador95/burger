var connection = require("../config/connection.js");

var orm = {
    selectAll: function(callback) {
        connection.query('SELECT * FROM burgers', function (err, result) {
            iff (err) throw err;
            callback(result);

        });
    },

    insertOne: function (burger_name callback){

    }
}

module.exports = orm;