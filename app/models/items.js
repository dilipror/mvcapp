const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var itemSchema = new Schema({
  itemId    : { type: String, required: true},
  name      : { type: String, required: true},
  cost      : { type: Number, required: true},
  Vendor    : { type: String, required: true},
  Inventory : { type: String, default: 0},
}
);

var item = mongoose.model('item', userSchema);

module.exports = item;
