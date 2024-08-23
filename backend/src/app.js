const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const deckRoutes = require('./routes/deckRoutes');
app.use('/api', deckRoutes);

module.exports = app;
