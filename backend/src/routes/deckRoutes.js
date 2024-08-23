const express = require('express');
const router = express.Router();

router.get('/decks', (req, res) => {
    res.json({ message: 'Get all decks' });
});

router.post('/decks', (req, res) => {
    res.json({ message: 'Create a new deck' });
});

module.exports = router;
