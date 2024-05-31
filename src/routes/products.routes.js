
const { Router } = require('express');
const {
    getAllProducts,
    getSingleProduct,
    createProduct,
    deleteProduct,
    updateProduct
} = require('../controllers/products.controllers');

const router = Router();

router.get('/products', getAllProducts);

router.get('/products/:id', getSingleProduct);

router.post('/products', createProduct);

router.delete('/products/:id', deleteProduct);

router.put('/products', updateProduct);

module.exports = router;