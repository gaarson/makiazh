const express = require('express'),
      router = express.Router(),
      article = require('../models/articles.js');  

router.get('/api/list/:id', (req, res) => {
  category_id = parseInt(req.params.id);
  article.allArticles(category_id, (list) => {
    console.log('try to get list of articles');
    res.send(list);
  })
})

router.get('/api/article/:id', (req, res) => {
  article_id = parseInt(req.params.id);
  article.getArticle(article_id, (article) => {
    console.log('try to get article');
    res.send(article);
  });
})

module.exports = router;
