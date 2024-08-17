const express = require('express');
const router = express.Router();
const basicAuth = require('../middleware/auth');

router.get('/protected', basicAuth, (req, res) => {
    res.send('This is a protected route');
});

module.exports = router;