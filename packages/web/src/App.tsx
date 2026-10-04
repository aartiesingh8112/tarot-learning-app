import { useMemo } from 'react';
import { ALL_TAROT_CARDS } from '@tarot/shared';
import { getCombinationReadForCards } from '@tarot/shared';

const sampleCards = ['wands-01', 'cups-01', 'pentacles-01'];

export default function CombinationStudy() {
  const cards = useMemo(
    () => sampleCards.map((id) => ALL_TAROT_CARDS.find((card) => card.id === id)).filter(Boolean) as typeof ALL_TAROT_CARDS,
    []
  );

  const reading = getCombinationReadForCards(cards);

  return (
    <section className="panel feature-panel">
      <h3>Combination study</h3>
      <p>{reading}</p>
      <div className="combination-row">
        {cards.map((card) => (
          <div key={card.id} className="combination-card">
            <strong>{card.name}</strong>
            <span>{card.suit}</span>
            <span>{card.element}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
