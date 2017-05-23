const express = require('express'),
      path = require('path'),
      db = require('./database.js');

const app = express();
const PORT = 8080;

app.use('/', express.static(path.join(__dirname, '../public')));
app.get('/home', require('./controller/home.js'));
app.get('/api/article/:id', require('./controller/articles.js'));
app.get('/api/list/:id', require('./controller/articles.js'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

db.connect((err) => {
  if(err) return console.log(err);
  
  app.listen(PORT, () => {
    console.log('server work on ' + PORT);
  });
});

