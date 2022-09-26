const express = require('express');
const router = express.Router();

const aboutController = require('../../controller/AboutController')

router.get('/', aboutController.index);

module.exports = router