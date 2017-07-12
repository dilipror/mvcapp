import {User} from '../models/user';
import {Item} from '../models/items';
// needs itemId and quantity in post request
export const addToCart = (req, res)=> {
  let itemCost = 0;
  if(req.cookies.loggedIn) {
    let userId = req.cookies.loginId;
    Item.findById(req.body.itemId, (err, item) => {
      if(err)
        console.error(err);
      itemCost = item.cost;
    });
    User.findByIdAndUpdate(
      userId,
      {$push: {'cart.items.itemId': req.body.itemId, 'cart.items.quantity': req.body.quantity}, $inc:  {'cart.totalCost': itemCost*req.body.quantity}, 'cart.state': 'loaded'},
      {runValidators: true},
      (err, user) => {
        if (err)
          return console.error(err);
        Item.find({}, (err, items) => {
          if(err)
            console.error(err);
          res.render('pages/home', items, user);
        });
      });
  }
  else
    res.render('pages/login');
};

export const renderHome = (req, res) => {
  if(req.cookies.loggedin) {
    Item.find({}, (err, items) => {
      if (err)
        console.error(err);
      res.render('pages/home', items);
    });
  }
  else
    res.render('pages/login');
};