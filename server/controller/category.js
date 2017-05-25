const express = require('express'),
      router = express.Router(),
      category = require('../models/category.js');

router.get('/api/category', (req, res) => {
  category.getCategories((list) => {
    res.send(list);
  })
});

module.exports = router;
