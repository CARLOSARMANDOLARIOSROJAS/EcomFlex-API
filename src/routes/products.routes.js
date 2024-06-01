
const { Router } = require('express');
const {
    getAllProducts,
    createProduct,
    deleteProduct,
    updateProduct,
    countProductsByCategory
} = require('../controllers/products.controllers');

const router = Router();

router.get('/products', getAllProducts);


router.post('/products', createProduct);

router.delete('/products/:id', deleteProduct);

router.get('/products/by-category', countProductsByCategory);
router.put('/products', updateProduct);

module.exports = router;