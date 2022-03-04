const allData = require('./allData');
const addNote = require('./addNote');
const { error404, error500 } = require('./error');

module.exports = {
  allData,
  addNote,
  error404,
  error500,
};
