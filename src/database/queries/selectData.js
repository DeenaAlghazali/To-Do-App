const connection = require('../config/connection');

const selectData = () => {
  const sql = {
    text: 'SELECT u.name,n.title FROM users u JOIN notes n ON (u.id = n.user_id);',
  };
  return connection.query(sql);
};

module.exports = selectData;
