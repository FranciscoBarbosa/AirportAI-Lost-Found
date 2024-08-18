const express = require('express');
const router = express.Router();
const {checkPermission} = require('../middleware/rbac');
const {registerUser, authenticateUser} = require('../controllers/userController');

router.post('/user', registerUser);

router.get('/protected', authenticateUser, checkPermission('read_product'));

module.exports = router;