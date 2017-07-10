const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
  userId      : String
  name        : String,
  address     : String,
  username    : { type: String, required: true, unique: true, default: this.name},
  password    : { type: String, required: true, default: "password"},
  admin       : { type: Boolean, default: false},
  cartId      : String,
  dateCreated : Date,
});
userSchema.pre('save', function(next) {
  var currentDate = new Date();
  if (!this.dateCreated)
    this.dateCreated = currentDate;
  next();
});

userSchema.methods.newUser = ({name, address, username, password}) => {
  var name = new User({
    userId  : this._id,
    name    : name,
    address : address,
    username: username,
    password: password,
    admin   : password == 'master' ? true : false;
    });
};

var User = mongoose.model('User', userSchema);

module.exports = user;
