const express = require('express');
const router = express.Router();
const teachingController = require('../controllers/teachingController');


router.get('/', teachingController.teaching);
router.get('/javascript', teachingController.javascript);
router.get('/php', teachingController.php);
router.get('/node', teachingController.node);
router.get('/node/express', teachingController.express);

module.exports = router;