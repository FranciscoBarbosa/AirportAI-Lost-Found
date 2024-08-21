/**
* App routes definitions.
*/
'use strict';

let express = require('express');
const router = express.Router();

router.use('/users', require('./usersRoute'));
router.use('/products', require('./productRoute'));


module.exports = router;
