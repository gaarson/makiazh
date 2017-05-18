const mysql = require('promise-mysql');

let state = {
  database: null
}
module.exports = {
  connect: done => {
    if(state.database) {
      return done();
    }
    mysql.createConnection({
      host: 'localhost', 
      user: 'root',
      password: 'rustislav',
      database: 'makiazh'
    }).then(connection => {
      state.database = connection;
    });
    done();
  },
  get: () => (state.database)
}

