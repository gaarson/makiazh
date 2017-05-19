const express = require('express'),
      router = express.Router(),
      article = require('../models/articles.js');  

router.get('/list/:id', (req, res) => {
  category_id = parseInt(req.params.id);
  article.allArticles(category_id, () => {
    console.log('try to get list of articles');
  })
})

router.get('/article/:id', (req, res) => {
  article_id = parseInt(req.params.id);
  article.getArticle(article_id, () => {
    console.log('try to get article');
  })
})

module.exports = router;
