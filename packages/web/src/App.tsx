import { useMemo, useState } from 'react';
import { ALL_TAROT_CARDS, CARD_INTERACTIONS, CARD_PATTERNS } from '@tarot/shared';

function App() {
  const [reversalsEnabled, setReversalsEnabled] = useState(false);

  const summary = useMemo(() => {
    return {
      totalCards: ALL_TAROT_CARDS.length,
      majors: ALL_TAROT_CARDS.filter((card) => card.arcana === 'major').length,
      minors: ALL_TAROT_CARDS.filter((card) => card.arcana === 'minor').length,
      patterns: CARD_PATTERNS.length,
      interactions: CARD_INTERACTIONS.length
    };
  }, []);

  return (
    <div className="app-shell">
      <header className="hero">
        <div>
          <p className="eyebrow">Tarot Learning</p>
          <h1>Study tarot patterns, suits, numerology, and combinations</h1>
          <p className="subtitle">
            Learn major arcana, court cards, minors, number symbolism, elemental balance, and card interaction dynamics.
          </p>
          <div className="cta-row">
            <button className="primary">Start learning</button>
            <button className="secondary">Browse deck</button>
          </div>
        </div>
      </header>

      <section className="settings-card">
        <div>
          <h2>Study settings</h2>
          <p>Reversed meanings can be enabled or disabled at any time.</p>
        </div>
        <label className="toggle-row">
          <span>Use reversed meanings</span>
          <input
            type="checkbox"
            checked={reversalsEnabled}
            onChange={(event) => setReversalsEnabled(event.target.checked)}
          />
        </label>
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <span>Total cards</span>
          <strong>{summary.totalCards}</strong>
        </div>
        <div className="stat-card">
          <span>Major arcana</span>
          <strong>{summary.majors}</strong>
        </div>
        <div className="stat-card">
          <span>Minor arcana</span>
          <strong>{summary.minors}</strong>
        </div>
        <div className="stat-card">
          <span>Pattern models</span>
          <strong>{summary.patterns}</strong>
        </div>
      </section>

      <section className="content-grid">
        <article className="panel">
          <h3>Pattern recognition</h3>
          <ul>
            <li>Major Arcana dominance</li>
            <li>Suit repetition</li>
            <li>Elemental balance</li>
            <li>Numerical sequences</li>
            <li>Court card clusters</li>
          </ul>
        </article>

        <article className="panel">
          <h3>Card interaction focus</h3>
          <ul>
            <li>Elemental dynamics</li>
            <li>Suit-based pairing</li>
            <li>Numerological integration</li>
            <li>Spread interpretation</li>
            <li>Combination study</li>
          </ul>
        </article>

        <article className="panel">
          <h3>Reversals behavior</h3>
          <p>
            {reversalsEnabled
              ? 'Reversed meanings are active, including reversed prompts in practice and readings.'
              : 'Reversals are off. The app shows upright meanings only, and practice prompts avoid reversed interpretations.'}
          </p>
        </article>
      </section>

      <section className="panel feature-panel">
        <h3>Sample study flow</h3>
        <ol>
          <li>Learn card meaning, numerology, and elemental role</li>
          <li>Review card interactions and suit dynamics</li>
          <li>Practice with combinations and spread prompts</li>
          <li>Track pattern recognition across your readings</li>
        </ol>
      </section>
    </div>
  );
}

export default App;
