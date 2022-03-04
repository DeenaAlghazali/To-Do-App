const postData = require('../database/queries/postData');

const addNote = (req, res) => {
  const { title, user_id } = req.body;
  postData(title, user_id)
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error));
};

module.exports = addNote;
