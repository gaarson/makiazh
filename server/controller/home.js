const express = require('express'),
      router = express.Router(),
      Home = require('../models/home.js');

router.get('/home', (req, res) => {
  Home.homeData((data) => {
    res.send(data); 
  });
})

module.exports = router;
