const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
  userId      : { type: String, required: true},
  name        : { type: String, required: true},
  address     : { type: String, required: true},
  username    : { type: String, required: true, unique: true, default: this.name},
  password    : { type: String, required: true, default: "password"},
  admin       : { type: Boolean, default: false},
  cart        : {
    items     : [{
                itemId  : { type: String, required: true},
                quantity: { type: Number, default: 0}
              }]
    totalCost : Number,
    State     : String
  }
  dateCreated : Date
});
userSchema.pre('save', function(next) {
  var currentDate = new Date();
  if (!this.dateCreated)
    this.dateCreated = currentDate;
  next();
});

var User = mongoose.model('User', userSchema);

module.exports = user;
