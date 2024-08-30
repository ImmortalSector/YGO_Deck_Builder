const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deckSchema = new Schema({
    name: { type: String, required: true },
    cards: [{ type: Schema.Types.ObjectId, ref: 'Card' }],
    description: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

const Deck = mongoose.model('Deck', deckSchema);
module.exports = Deck;

// The Deck model includes a name, an array of cards (which are references to the Card model), an optional description, and a userId to link the deck to a specific user.