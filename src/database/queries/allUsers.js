const connection = require('../config/connection');

const allUsers = () => {
  const sql = {
    text: 'SELECT * FROM users;',
  };
  return connection.query(sql);
};

module.exports = allUsers;
