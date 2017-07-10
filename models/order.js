const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var orderSchema = new Schema({
  userId        : String,
  cartId        : String,
  State         : String,
  transactionId : String
});

var order = mongoose.model('order', userSchema);

module.exports = order;
