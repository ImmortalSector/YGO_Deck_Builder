//Route to access this controller.

const express = require('express');
const router = express.Router();
const externalCardController = require('../controllers/externalCardController');

router.get('/cards/name/:name', externalCardController.fetchCardByName);
router.get('/cards/id/:id', externalCardController.fetchCardById);

module.exports = router;
