const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    attack: { type: Number },
    defense: { type: Number },
    level: { type: Number },
    attribute: { type: String },
    imageUrl: { type: String }
}, { timestamps: true });

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;

// This model represents a YU-GI-OH! card, including properties like name, type, description, and optional stats like attack, defense, level, and attribute.