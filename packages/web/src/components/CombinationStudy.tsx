import { useMemo } from 'react';
import { ALL_TAROT_CARDS } from '@tarot/shared';
import { getPatternInsightForCards } from '@tarot/shared';

const sampleCards = ['major-00', 'major-01', 'wands-01', 'cups-01', 'swords-01'];

export default function PatternDashboard() {
  const cards = useMemo(
    () => sampleCards.map((id) => ALL_TAROT_CARDS.find((card) => card.id === id)).filter(Boolean) as typeof ALL_TAROT_CARDS,
    []
  );

  const insight = getPatternInsightForCards(cards);

  return (
    <section className="panel feature-panel">
      <h3>Pattern recognition dashboard</h3>
      <div className="dashboard-grid">
        <div>
          <strong>Major Arcana:</strong> {insight.majorCount}
        </div>
        <div>
          <strong>Court cards:</strong> {insight.courtCount}
        </div>
        <div>
          <strong>Dominant suit:</strong> {insight.dominantSuit?.[0] ?? 'none'}
        </div>
        <div>
          <strong>Dominant element:</strong> {insight.dominantElement?.[0] ?? 'none'}
        </div>
      </div>
      <div className="pattern-list">
        {insight.patterns.map((pattern) => (
          <div key={pattern.id} className="pattern-item">
            <strong>{pattern.name}</strong>
            <p>{pattern.interpretation}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
