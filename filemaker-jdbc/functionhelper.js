'use strict';

module.exports = function(client) {

var FunctionHelper = require('../node_modules/knex/lib/functionhelper');

var FunctionHelper_FILEMAKER_JDBC = Object.create(FunctionHelper);
FunctionHelper_FILEMAKER_JDBC.client = client;

// Assign the newly extended `FunctionHelper` constructor to the client object.
client.FunctionHelper = FunctionHelper_FILEMAKER_JDBC;

};
