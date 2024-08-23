const API_BASE_URL = 'http://localhost:5000/api';

export const getDecks = async () => {
    const response = await fetch(`${API_BASE_URL}/decks`);
    const data = await response.json();
    return data;
};
