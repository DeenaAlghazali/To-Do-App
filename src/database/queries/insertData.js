const connection = require('../config/connection');

const insertData = (title, id) => {
  const sql = {
    text: 'INSERT INTO notes (title, user_id ) VALUES ($1, $2);',
    values: [title, id],
  };
  return connection.query(sql);
};
module.exports = insertData;
