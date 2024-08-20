const express = require('express');
const router = express.Router();
const {checkPermission} = require('../middlewares/rbac');
const {authenticateUser} = require('../middlewares/authentication.js');
const {registerUser} = require('../controllers/userController');

router.post('/user', registerUser);

router.get('/protected', authenticateUser, checkPermission('read_product'));

module.exports = router;