const express = require('express');
const controller = require('../controller');

const router = express.Router();

router.get('/', controller.homePage);
router.get('/allData', controller.allData);

module.exports = router;
