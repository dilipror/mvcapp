const passwordHash = require('password-hash');
import {user} from '../models/user';

export const login = (req, res)=> {
  user.find({ username: req.body.username}, (err, user) => {
    if(err)
      console.error(err);
    if(user){
      if(passwordHash.verify(req.body.password, user.password)){
        res.cookie('loginId', user.userId, {httpOnly: true, secure: true});
        res.render('pages/home');
      }
    }
    else {
      console.error('Username is not registered with our site');
      res.render('pages/login');
      return(0);
    }
  });
};

export const renderLogin = (req, res) => {
  res.render('pages/login');
};