const { Router } = require('express');
const ProductImageController = require('../controllers/productImageController');

const router = Router();

router.post('/product-images', ProductImageController.create);
router.get('/product-images', ProductImageController.index);

module.exports = router;
