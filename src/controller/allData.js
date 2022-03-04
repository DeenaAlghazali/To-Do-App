const selectData = require('../database/queries/selectData');

const allData = (req, res) => {
  selectData()
    .then((data) => res.json(data.rows))
    .catch((error) => console.log(error));
};

module.exports = allData;
