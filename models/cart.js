const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var cartSchema = new Schema({
  cartId    : { type: String, unique: true }
  items     : [{
    itemId  : String,
    quantity: Number
  }]
  totalCost : Number,
  State     : String
});


var cart = mongoose.model('Cart', userSchema);

module.exports = cart;
