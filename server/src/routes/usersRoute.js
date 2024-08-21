const express = require('express');
const router = express.Router();
const {authenticateUser} = require('../middlewares/authentication.js')
const {checkPermission} = require('../middlewares/rbac.js');
const {registerUser, findUsers} = require('../controllers/userController.js');

router.post('/', authenticateUser, checkPermission('create_user'), registerUser);

router.get('/', authenticateUser, checkPermission('read_user'), findUsers);

module.exports = router;