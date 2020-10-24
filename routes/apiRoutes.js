const express = require('express');
const router = express.Router();
const { api, createProduct, listProducts } = require('../controllers/catalogApi');

router.get('/', api);
router.post('/create/product', createProduct);
router.get('/list/products', listProducts);

module.exports = router;
