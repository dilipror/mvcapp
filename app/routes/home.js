const express = require('express');
const router = express.Router();
import * as home from '../controllers/home';

router.post('/home', home.addToCart);
router.get('/home', home.renderHome);
router.post('/', home.addToCart);
router.get('/', home.renderHome);

export {router};