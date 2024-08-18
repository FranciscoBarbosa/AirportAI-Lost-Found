/**
* App entrypoint.
*/
'use strict';

var app = require('express')();
const PORT = 3000;

// Set up Express.
require('./server/src/setup/express')(app);

// Set up MongoDB.
require('./server/src/setup/mongoose')();

// Set up routes.
app.use('/api', require('./server/src/routes'));

// Start app.
app.listen(PORT, function() {
  console.log('App now listening on port ' + PORT);
});

module.exports = app;
