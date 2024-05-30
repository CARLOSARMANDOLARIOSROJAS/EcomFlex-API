
const express = require('express');
const router = express.Router();
const { authenticate } = require('../middlewares/auth.middleware');

router.get("/admin/login", authenticate, (req, res) => {
res.json({ message: "Bienvenido a la sección de administración" });
});

module.exports = router;