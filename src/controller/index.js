const allData = require('./allData');
const addNote = require('./addNote');
const getUsers = require('./getUsers');
const { error404, error500 } = require('./error');

module.exports = {
  allData,
  addNote,
  getUsers,
  error404,
  error500,
};
