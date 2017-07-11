const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let itemSchema = new Schema({
  itemId    : { type: String, required: true},
  name      : { type: String, required: true},
  cost      : { type: Number, required: true, min: 0},
  vendor    : { type: String, required: true},
  inventory : { type: Number, default: 0, min:0},
});

itemSchema.pre('validate', (next) => {
  this.itemId = mongoose.Types.ObjectId();
  next();
});


let item = mongoose.model('item', itemSchema);

export {item};
