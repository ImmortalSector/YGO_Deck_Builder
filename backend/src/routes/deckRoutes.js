const express = require('express');
const router = express.Router();
const deckController = require('../controllers/deckController');

router.get('/decks', deckController.getDecks);
router.post('/decks', deckController.createDeck);
router.get('/decks/:id', deckController.getDeckById);
router.put('/decks/:id', deckController.updateDeck);
router.delete('/decks/:id', deckController.deleteDeck);

module.exports = router;
