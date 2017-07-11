const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let orderSchema = new Schema({
  userId        : String,
  state         : { type: String, enum: ['confirmed', 'paid', 'delivered']},
  transactionId : String
});

let order = mongoose.model('order', orderSchema);

module.exports = order;