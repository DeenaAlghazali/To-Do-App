const express = require('express');
const controller = require('../controller');

const router = express.Router();

router.get('/allData', controller.allData);

// router.use(controller.error404);
// router.use(controller.error500);

module.exports = router;
