const insertData = require('../database/queries/insertData');

const addNote = (req, res) => {
  const { title, user_id } = req.body;
  insertData(title, user_id)
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error));
};

module.exports = addNote;
