import React, { useEffect, useState } from 'react';
import './styles/App.css';
import { getDecks } from './services/api';

function App() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getDecks();
      setDecks(result);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>YU-GI-OH Deck Builder</h1>
        <p>Start building your deck!</p>
      </header>
      <section>
        <h2>Your Decks</h2>
        <ul>
          {decks.map((deck, index) => (
            <li key={index}>{deck.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
