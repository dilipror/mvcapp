import {User} from '../models/user';
import {Order} from '../models/order';

export const createOrder = (req, res)=> {
  let userId = req.cookies.loginId;
  User.findById(userId, (err, user) => {
    if(err)
      console.error(err);
    console.log('New order Confirmed w.r.t user : ', user);

    //order contents are available here(in user.cart), since no transaction implementation is to be done as of now, dumping the data.

    User.update({id: userId}, {$set : {'cart.items': [], 'cart.quantity': [], 'cart.totalCost': 0, 'cart.state': 'empty'}}, {runValidators: true}, (err, raw) => {
      if (err)
        return console.error(err);
      console.log('mongo response : ', raw);
    });

    let newOrder = new Order({
      userId  : userId,
      state   : 'confirmed'
    });

    newOrder.create((err) => {
      if(err)
        console.error(err);
    });
  });
  res.render('pages/cart');
};

export const renderCart = (req, res) => {
  res.render('pages/cart');
};