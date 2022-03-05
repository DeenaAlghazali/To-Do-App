const allUsers = require('../database/queries/allUsers');

const getUsers = (req, res) => {
  allUsers()
    .then((data) => {
      res.json(data.rows);
      console.log('getUsers ', data.rows);
    })
    .catch((error) => console.log(error));
};

module.exports = getUsers;
