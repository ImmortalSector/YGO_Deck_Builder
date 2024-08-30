//A controller to handle incoming requests that uses the YGOPRODeck API service.
//It provides endpoints to fetch card data by name or ID.

const ygoprodeckService = require('../services/ygoprodeckService');

exports.fetchCardByName = async (req, res) => {
    const { name } = req.params;
    try {
        const cardData = await ygoprodeckService.getCardInfoByName(name);
        res.status(200).json(cardData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch card data' });
    }
};

exports.fetchCardById = async (req, res) => {
    const { id } = req.params;
    try {
        const cardData = await ygoprodeckService.getCardInfoById(id);
        res.status(200).json(cardData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch card data' });
    }
};
