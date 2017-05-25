const db = require('../database.js');

exports.getCategories = (cb) => {
  let sqlCategories = `SELECT * FROM categories WHERE 1`;

  db.get().query(sqlCategories).then(rows => {
    console.log(rows)
    return cb(rows);
  }).catch(error => {
    console.log(error);
    return cb(error);
  })
}


