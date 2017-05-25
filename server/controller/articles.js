const express = require('express'),
      router = express.Router(),
      article = require('../models/articles.js');
      multer = require('multer');

const storage = multer.diskStorage({
  destinanation: (req, file, cb) => {
    console.log(req);
  },
  filaname: (req, file, cb) => {
    console.log(req);
  }
})

const upload = multer({storage: storage}).single();

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

router.post('/api/create', upload, (req, res) => {
  console.log(req.body);
  article.createArticle(req.body, success => {

    console.log('success');
  })
})

module.exports = router;
