const express = require('express');
const router = express.Router();
const basicAuth = require('../middleware/auth');
const {registerUser} = require('../controllers/authController');

router.post('/user', registerUser);

router.get('/protected', basicAuth, (req, res) => {
    res.send('This is a protected route');
});

module.exports = router;