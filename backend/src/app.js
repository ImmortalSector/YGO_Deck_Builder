const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const deckRoutes = require('./routes/deckRoutes');
const cardRoutes = require('./routes/cardRoutes');
const externalCardRoutes = require('./routes/externalCardRoutes');

app.use('/api', deckRoutes);
app.use('/api', cardRoutes);
app.use('/api/external', externalCardRoutes);

module.exports = app;
