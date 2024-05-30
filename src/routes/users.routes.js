
const { Router } = require('express');
const { createUser, loginUser, allUsers } = require('../controllers/users.controllers');

const router = Router();

router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/users', allUsers);

module.exports = router;