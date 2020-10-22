const express = require('express');
const router = express.Router();
const { api } = require('../controllers/apiControllers');

router.get('/', api);

module.exports = router;
