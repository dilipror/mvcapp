const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var itemSchema = new Schema({
  itemId    : String,
  name      : String,
  cost      : Number,
  Vendor    : String,
  Inventory : Number
});

var item = mongoose.model('item', userSchema);

module.exports = item;
