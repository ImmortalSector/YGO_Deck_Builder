// Routes to handle CRUD (Create, Read, Update, Delete) operations for cards

const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');

router.get('/cards', cardController.getCards);
router.post('/cards', cardController.createCard);
router.get('/cards/:id', cardController.getCardById);
router.put('/cards/:id', cardController.updateCard);
router.delete('/cards/:id', cardController.deleteCard);

module.exports = router;
