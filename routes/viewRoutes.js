const express = require('express');
const router = express.Router();
const {
	indexPage,
	createProductPage
} = require('../controllers/viewControllers');

router.get('/', indexPage);
router.get('/create/product', createProductPage);

module.exports = router;
