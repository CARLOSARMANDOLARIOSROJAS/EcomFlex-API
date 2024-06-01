
const {Router} = require('express');

const {
   createCategory,
   getAllCategories,
   getCategoryById,
} =
require('../controllers/categories.controllers');

const router = Router();

router.get('/categories', getAllCategories);
router.post('/categories', createCategory);
router.get('/categories/:id', getCategoryById);

module.exports = router;