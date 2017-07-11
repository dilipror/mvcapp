const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let orderSchema = new Schema({
  userId        : String,
  state         : { type: String, enum: ['confirmed', 'paid', 'delivered']},
  transactionId : { type: String, require: true}
});

orderSchema.pre('validate', (next) => {
  this.transactionId = mongoose.Types.ObjectId();
  next();
});


let order = mongoose.model('order', orderSchema);

export {order} ;