//Service that handles requests to the YGOPRODeck API

const axios = require('axios');

const YGOPRO_API_BASE_URL = 'https://db.ygoprodeck.com/api/v7';

//Fetch card data by name
exports.getCardInfoByName = async (name) => {
    try {
        const response = await axios.get(`${YGOPRO_API_BASE_URL}/cardinfo.php`, {
            params: { name }
        });
        return response.data.data;
    } catch (error) {
        console.error('Error fetching card data:', error);
        throw error;
    }
};

//Fetch card data by ID
exports.getCardInfoById = async (id) => {
    try {
        const response = await axios.get(`${YGOPRO_API_BASE_URL}/cardinfo.php`, {
            params: { id }
        });
        return response.data.data;
    } catch (error) {
        console.error('Error fetching card data:', error);
        throw error;
    }
};
