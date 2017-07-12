const express = require('express');
const router = express.Router();
import * as home from '../controllers/home';

router.post('/home', home.addToCart);
router.get('/home', home.renderHome);

export {router};