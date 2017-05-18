const express = require('express'),
      path = require('path'),
      db = require('./database.js');

const app = express();
const PORT = 8080;

app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.get('/home', require('./controller/home.js'));

db.connect((err) => {
  if(err) return console.log(err);
  
  app.listen(PORT, () => {
    console.log('server work on ' + PORT);
  });
});

