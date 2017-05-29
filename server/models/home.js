const db = require('../database.js');

const sqlHome = 'SELECT id, title, logo, category FROM articles';

exports.homeData = (cb) => {
  db.get().query(sqlHome).then(rows => {
    let categories = [...new Set(rows.map(item => item.category))];
    const sqlCategory = `SELECT title, id FROM categories WHERE id IN (${categories})`;

    db.get().query(sqlCategory).then(data => {
      
      let result = data;
      
      for(let i = 0; i < rows.length; i++) {
        for(let j = 0; j < data.length; j++) {
          if(rows[i].category == data[j].id) {
            if(!result[j]['articles']) result[j]['articles'] = [];
            result[j]['articles'].push(rows[i]);
          }
        }
      }
      result[0].head = true;
      console.log(result);
      return cb(result);
    })
  })
}
