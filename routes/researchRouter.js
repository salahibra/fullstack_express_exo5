const express = require('express');
const router = express.Router();
const researchController = require('../controllers/researchController');

router.get('/', researchController.research)

module.exports = router;