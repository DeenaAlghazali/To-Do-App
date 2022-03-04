const getData = require('../database/queries/getData');

const allData = (req, res) => {
  getData()
    .then((data) => res.json(data.rows))
    .catch((error) => console.log(error));
};

module.exports = allData;
