const db = require('../database.js');


exports.allArticles = (category, cb) => {
  let sqlArticles = `SELECT id, title FROM articles WHERE 1`; 
  if(category !== NaN)
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
