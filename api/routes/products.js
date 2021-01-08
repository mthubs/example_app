const express = require('express');
const router = express.Router();
const Products = require('../controllers/Products');

router.get('/', Products.all);
router.post('/', Products.store);
router.get('/:productId', Products.show);
router.patch('/:productId', Products.update);
router.delete('/:productId', Products.delete);

module.exports = router;