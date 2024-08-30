// This controller provides basic CRUD (Create, Read, Update, Delete) operations for managing individual cards.

const Card = require('../models/Card');

// Get all cards
exports.getCards = async (req, res) => {
    try {
        const cards = await Card.find();
        res.status(200).json(cards);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Create a new card
exports.createCard = async (req, res) => {
    const { name, type, description, attack, defense, level, attribute, imageUrl } = req.body;
    
    try {
        const newCard = new Card({ name, type, description, attack, defense, level, attribute, imageUrl });
        await newCard.save();
        res.status(201).json(newCard);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get a specific card by ID
exports.getCardById = async (req, res) => {
    try {
        const card = await Card.findById(req.params.id);
        if (!card) return res.status(404).json({ error: 'Card not found' });
        res.status(200).json(card);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Update a card by ID
exports.updateCard = async (req, res) => {
    try {
        const card = await Card.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!card) return res.status(404).json({ error: 'Card not found' });
        res.status(200).json(card);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete a card by ID
exports.deleteCard = async (req, res) => {
    try {
        const card = await Card.findByIdAndDelete(req.params.id);
        if (!card) return res.status(404).json({ error: 'Card not found' });
        res.status(200).json({ message: 'Card deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};
