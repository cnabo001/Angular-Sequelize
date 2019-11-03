const express = require('express');
const db = require('./server/models/db');
const app = express();
//const Sequelize = require('sequelize');
const port = 3000;

// setup the Express middlware
require('./server/middleware/middleware')(app);

// setup the api
require('./server/api')(app);

//connecting db to server
db.sequelize.sync({
  force: true
}).then(() => {
  app.listen(port, () => {
         console.log('running server on port ' + port);
       })
});
