const connection = require('../config/connection');

const deleteNoteQuery = (id) => {
  const sql = {
    text: 'DELETE FROM notes WHERE id = $1',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = deleteNoteQuery;
