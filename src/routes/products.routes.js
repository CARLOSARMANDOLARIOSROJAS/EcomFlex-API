
const { Router } = require('express');
const { getAllProducts, getSingleProduct } = require('../controllers/products.controllers');

const router = Router();

router.get('/products', getAllProducts);

router.get('/products/:id', getSingleProduct);

router.post('/products', (req, res) => {
    res.send('Creating a product');
});
router.delete('/products', (req, res) => {
    res.send('Deleting a product');
});
router.put('/products', (req, res) => {
    res.send('Updating a product');
});
module.exports = router;