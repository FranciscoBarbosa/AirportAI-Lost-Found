/**
* App routes definitions.
*/
'use strict';

let express = require('express');
const router = express.Router();

router.use('/auth', require('./authRoute'));
router.use('/products', require('./productRoute'));


module.exports = router;
