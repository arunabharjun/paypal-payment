const express = require('express');
const router = express.Router();
const { api, createProduct } = require('../controllers/apiControllers');

router.get('/', api);
router.post('/create/product', createProduct);

module.exports = router;
