/**
* App routes definitions.
*/
'use strict';

let express = require('express');
const router = express.Router();

// To confirm setup only.
router.get('/', function(req, res) { return res.send('Hello world!'); });

router.use('/auth', require('./authRoutes'));

module.exports = router;
