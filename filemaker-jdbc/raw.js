'use strict';

module.exports = function(client) {

var Raw = require('../../raw');
var inherits = require('inherits');

// Inherit from the `Raw` constructor's prototype,
// so we can add the correct `then` method.
function Raw_FMJDBC() {
  this.client = client;
  Raw.apply(this, arguments);
}
inherits(Raw_FMJDBC, Raw);

// Assign the newly extended `Raw` constructor to the client object.
client.Raw = Raw_FMJDBC;

};