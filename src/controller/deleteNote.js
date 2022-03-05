const deleteNoteQuery = require('../database/queries/deleteNoteQuery');

const deleteNote = (req, res) => {
  const noteId = req.params.id;
  deleteNoteQuery(noteId);
  res.redirect('/');
};

module.exports = deleteNote;
