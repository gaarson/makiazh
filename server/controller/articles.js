const express = require('express'),
      fs = require('fs'),
      shell = require('shelljs'),
      path = require('path'),
      router = express.Router(),
      article = require('../models/articles.js'),
      multer = require('multer');

router.get('/api/list/:id', (req, res) => {
  category_id = parseInt(req.params.id);
  article.allArticles(category_id, (list) => {
    console.log('try to get list of articles');
    res.send(list);
  });
});

router.get('/api/search', (req, res) => {
  console.log(req.query.string);
  article.findArticles(req.query.string, success => {

    console.log(success);
    res.send(success);
  })
});

router.get('/api/article/:id', (req, res) => {
  article_id = parseInt(req.params.id);
  article.getArticle(article_id, (article) => {
    console.log('try to get article');
    res.send(article);
  });
});

router.delete('/api/article/:id', (req, res) => {
  const id = req.params.id;
  article.deleteArticle(id, (success) => {
    res.send(id);
  })
});

router.post('/api/create', (req, res) => {
  const getDirectory = (file) => {
    return new Promise((resolve, reject) => {
      article.createArticle(file.fieldname, null, success => {
        let articleId = success.insertId;
        let mimetype = file.mimetype.split('/')[1];
        let directory = path.join(__dirname, `../../public/img/${file.fieldname}/${articleId}/`);
        
        res.send({
          articleId,
          directory: `/img/${file.fieldname}/${articleId}/logo.${mimetype}`
        });
        resolve(directory);
      });
    });
  }
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      getDirectory(file).then(directory => {
        shell.mkdir('-p', directory);
        cb(null, directory);
      })
    },
    filename: (req, file, cb) => {
      let mimetype = file.mimetype.split('/')[1];
      cb(null, file.originalname + '.' + mimetype);
    }
  });
  const uploadMiddleware = multer({ storage }).any();
  
  if(!Object.keys(req.body).length) {
    uploadMiddleware(req, res, err => {
      console.log('wqfqfqf');
    })
  } else  
    article.createArticle(null, req.body, success => {

      console.log(success);
      res.send(success);
    });
  

});

module.exports = router;
