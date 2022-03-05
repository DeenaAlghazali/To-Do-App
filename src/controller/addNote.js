const insertData = require('../database/queries/insertData');

const addNote = (req, res) => {
  const { user_id, note } = req.body;
  console.log('req.body ', req.body);
  insertData(user_id, note)
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error));
};

module.exports = addNote;
