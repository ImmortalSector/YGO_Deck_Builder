//This controller handles CRUD operations for managing decks, including linking decks to their associated cards.

const Deck = require('../models/Deck');
const Card = require('../models/Card');

// Get all decks
exports.getDecks = async (req, res) => {
    try {
        const decks = await Deck.find().populate('cards');
        res.status(200).json(decks);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Create a new deck
exports.createDeck = async (req, res) => {
    const { name, cards, description, userId } = req.body;

    try {
        const newDeck = new Deck({ name, cards, description, userId });
        await newDeck.save();
        res.status(201).json(newDeck);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get a specific deck by ID
exports.getDeckById = async (req, res) => {
    try {
        const deck = await Deck.findById(req.params.id).populate('cards');
        if (!deck) return res.status(404).json({ error: 'Deck not found' });
        res.status(200).json(deck);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Update a deck by ID
exports.updateDeck = async (req, res) => {
    try {
        const deck = await Deck.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('cards');
        if (!deck) return res.status(404).json({ error: 'Deck not found' });
        res.status(200).json(deck);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete a deck by ID
exports.deleteDeck = async (req, res) => {
    try {
        const deck = await Deck.findByIdAndDelete(req.params.id);
        if (!deck) return res.status(404).json({ error: 'Deck not found' });
        res.status(200).json({ message: 'Deck deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};
