import { useEffect, useMemo, useState } from 'react';
import './styles.css';

interface TarotCard {
  id: string;
  name: string;
  suit: string;
  arcana: 'major' | 'minor';
  keywords: string[];
  uprightMeaning: string;
  reversedMeaning: string;
  shortMeaning: string;
  symbolism: string[];
  numerology: string;
}

const apiBase = 'http://localhost:3001/api';

function App() {
  const [cards, setCards] = useState<TarotCard[]>([]);
  const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${apiBase}/cards`)
      .then((res) => res.json())
      .then((data) => {
        setCards(data.cards.slice(0, 30));
        setSelectedCard(data.cards[0]);
      })
      .catch(() => setCards([]))
      .finally(() => setLoading(false));
  }, []);

  const majorCount = useMemo(
    () => cards.filter((card) => card.arcana === 'major').length,
    [cards]
  );

  return (
    <div className="app-shell">
      <header className="header">
        <div>
          <p className="eyebrow">Tarot study companion</p>
          <h1>Tarot Learning App</h1>
        </div>
        <div className="pill-row">
          <span className="pill">{cards.length} cards</span>
          <span className="pill">{majorCount} major arcana</span>
        </div>
      </header>

      <main className="layout">
        <aside className="panel sidebar">
          <h2>Deck</h2>
          {loading ? (
            <p>Loading deck...</p>
          ) : (
            <div className="card-list">
              {cards.map((card) => (
                <button
                  key={card.id}
                  className={`card-button ${selectedCard?.id === card.id ? 'active' : ''}`}
                  onClick={() => setSelectedCard(card)}
                >
                  <span>{card.name}</span>
                  <small>{card.suit}</small>
                </button>
              ))}
            </div>
          )}
        </aside>

        <section className="panel detail-panel">
          {selectedCard ? (
            <>
              <div className="card-hero">
                <div className="card-art">
                  <span>{selectedCard.name.slice(0, 1)}</span>
                </div>
                <div>
                  <p className="small-label">{selectedCard.arcana} arcana</p>
                  <h2>{selectedCard.name}</h2>
                  <p className="suit-line">{selectedCard.suit}</p>
                </div>
              </div>

              <div className="info-grid">
                <div>
                  <h3>Upright</h3>
                  <p>{selectedCard.uprightMeaning}</p>
                </div>
                <div>
                  <h3>Reversed</h3>
                  <p>{selectedCard.reversedMeaning}</p>
                </div>
              </div>

              <div className="meta-boxes">
                <div>
                  <h4>Keywords</h4>
                  <div className="tag-box">
                    {selectedCard.keywords.map((keyword) => (
                      <span key={keyword} className="tag">{keyword}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4>Symbolism</h4>
                  <div className="tag-box">
                    {selectedCard.symbolism.map((symbol) => (
                      <span key={symbol} className="tag subtle">{symbol}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4>Numerology</h4>
                  <p>{selectedCard.numerology}</p>
                </div>
              </div>
            </>
          ) : (
            <p>Select a card to see its meaning.</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
