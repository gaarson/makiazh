const db = require('../database.js');


exports.allArticles = (category, cb) => {
  console.log(category);
  let sqlArticles = `SELECT id, title FROM articles WHERE 1`; 
  if(category !== 0)
    sqlArticles = `SELECT id, title, logo, discription FROM articles WHERE category_id=${category}`;

  db.get().query(sqlArticles).then(rows => {
    console.log(rows);
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

exports.createArticle = (newArticle, cb) => {
  console.log(newArticle.discription);
  sqlCreate = `INSERT INTO articles (title, logo, discription, created_at, category_id, is_published) VALUES ('${newArticle.title}', '/1.jpg', '${newArticle.discription}', '2017-05-14', ${newArticle.category}, 0)`;

  db.get().query(sqlCreate).then(rows => {
    return cb(rows);
  }).catch(error => {
    console.log(error)
  })
}

exports.deleteArticle = (id, cb) => {

  sqlDelete = `DELETE FROM articles WHERE articles.id = ${id}`;
  db.get().query(sqlDelete).then(rows => {
  
    return cb(rows);
  
  }).catch(error => {
    console.log(error);
    return cb(error);
  })

}
