const express = require('express');
const path = require('path');
const db = require('./database.js');

const app = express();
const PORT = 8080;

app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

db.connect((err) => {
  if(err) return console.log(err);
  
  app.listen(PORT, () => {
    console.log('server work on ' + PORT);
  });
});

