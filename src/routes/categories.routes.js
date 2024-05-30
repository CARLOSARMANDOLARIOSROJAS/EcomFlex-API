
const {Router} = require('express');

const {
   createCategory,
   getAllCategories,
} =
require('../controllers/categories.controllers');

const router = Router();

router.get('/categories', getAllCategories);
router.post('/categories', createCategory);

module.exports = router;