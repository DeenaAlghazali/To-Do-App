const allData = require('./allData');
const addNote = require('./addNote');
const getUsers = require('./getUsers');
const deleteNote = require('./deleteNote');
const { error404, error500 } = require('./error');

module.exports = {
  allData,
  addNote,
  getUsers,
  deleteNote,
  error404,
  error500,
};
