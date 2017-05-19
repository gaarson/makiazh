const db = require('../database.js');


exports.allArticles = (category, cb) => {
  const sqlArticles = `SELECT * FROM articles WHERE category_id=${category}`;
  db.get().query(sqlArticles).then(rows => {
    console.log(rows);
  });
}

exports.getArticle = (id, cb) => {
  const sqlArticle = `SELECT * FROM articles WHERE id=${id}`;
  db.get().query(sqlArticle).then(rows => {
    console.log(rows);
  });
}
