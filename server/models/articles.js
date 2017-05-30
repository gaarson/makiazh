const db = require('../database.js');


exports.allArticles = (category, cb) => {
  console.log(category);
  let sqlArticles = `SELECT id, title FROM articles WHERE 1`; 
  if(category !== 0)
    sqlArticles = `SELECT id, title, logo, discription FROM articles WHERE category=${category}`;

  db.get().query(sqlArticles).then(rows => {
    return cb(rows);
  }).catch(error => {
    console.log(error);
    return cb(error);
  })
}

exports.getArticle = (id, cb) => {
  const sqlArticle = `SELECT * FROM articles WHERE id=${id}`;
  db.get().query(sqlArticle).then(rows => {
    return cb(rows);
  }).catch(error => {
    console.log(error);
    return cb(error);
  })
}

exports.findArticles = (text, cb) => {
  const sqlFind = `SELECT id, title, logo, discription FROM articles WHERE title LIKE ('%${text}%')`;
  db.get().query(sqlFind).then(rows => {
    return cb(rows);
  }).catch(error => {
    console.log(error);
    return cb(error);
  })
}

exports.createArticle = (category, newArticle, cb) => {
  if(category)
    sqlCreate = `INSERT INTO articles (category, is_published) VALUES (${category}, 0)`;
  if(newArticle)
    sqlCreate = `UPDATE articles SET title = '${newArticle.title}', logo = '${newArticle.directory}', discription = '${newArticle.discription}', created_at = '2017-05-24' WHERE articles.id = ${newArticle.articleId}`;

  db.get().query(sqlCreate).then(rows => {
    return cb(rows);
  }).catch(error => {
    console.log(error)
  })
}

exports.deleteArticle = (id, cb) => {
  sqlDelete = `DELETE FROM articles WHERE articles.id = ${id}`;
  db.get().query(sqlDelete).then(rows => {
    console.log(rows);
    return cb(rows);
  }).catch(error => {
    console.log(error);
    return cb(error);
  });
}
