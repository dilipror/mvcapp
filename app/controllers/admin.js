import {Item} from '../models/item';

export const addItem = (req, res) => {
  if(req.signedCookies['isAdmin']) {
    let path = req.file.path.replace('public', 'http://localhost:5000');
    let newItem = new Item({
      name      : req.body.name,
      cost      : req.body.cost,
      vendor    : req.body.vendor,
      inventory : req.body.inventory,
      imagePath : path
    });
    newItem.save((err) => {
      if(err)
        return console.error(err);
    });
    console.log('new item created :', req.body.name);
    res.redirect('/');
  }
  else
    res.redirect('/login');
};

export const renderAdmin = (req, res) => {
  if(req.signedCookies['isAdmin']) {
    res.render('pages/admin', {user: req.userData.username});
  }
  else
    res.redirect('/login');
};
