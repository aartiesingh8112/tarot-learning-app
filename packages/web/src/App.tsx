import { useState, useEffect } from 'react';
import axios from 'axios';

interface Card {
  id: number;
  name: string;
  meaning: string;
}

function App() {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/cards');
        setCards(response.data.cards);
      } catch (err) {
        setError('Failed to load cards. Make sure the API is running on port 3001');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-2 text-center">🎴 Tarot Learning App</h1>
        <p className="text-center text-purple-200 mb-8">Master the cards with interactive lessons and practice</p>

        {error && (
          <div className="bg-red-500 p-4 rounded-lg mb-6 text-center">
            {error}
          </div>
        )}

        {loading && (
          <div className="text-center">
            <p className="text-lg">Loading cards...</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((card) => (
              <div key={card.id} className="bg-purple-800 p-4 rounded-lg hover:bg-purple-700 transition">
                <h3 className="text-xl font-bold mb-2">{card.name}</h3>
                <p className="text-purple-200">{card.meaning}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 bg-indigo-800 p-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Getting Started</h2>
          <ol className="list-decimal list-inside space-y-2 text-purple-200">
            <li>Ensure the API is running on port 3001</li>
            <li>Browse the tarot cards and their meanings</li>
            <li>Practice with interactive lessons</li>
            <li>Track your learning progress</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
