/**
* App routes definitions.
*/
'use strict';

let express = require('express');
const router = express.Router();

router.get('/', function(req, res) { return res.send('Hello world!'); });


router.use('/users', require('./usersRoute'));
router.use('/products', require('./productRoute'));


module.exports = router;
