const express = require('express');
const router = express.Router();
const passport = require('../config/passport');
const {checkPermission} = require('../middleware/rbac');
const {registerUser} = require('../controllers/authController');

router.post('/user', registerUser);

router.get('/protected', passport.authenticate('basic', {session: false}), checkPermission('read_product'), (req, res) => {
    res.send('This is a protected route');
});

module.exports = router;