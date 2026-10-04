import { TarotCard } from '../types';
import { ALL_TAROT_CARDS, CARD_INTERACTIONS, CARD_PATTERNS } from '../data';

export function getPatternInsightForCards(cards: TarotCard[]) {
  const majors = cards.filter((card) => card.arcana === 'major');
  const courts = cards.filter((card) => card.cardType === 'court');
  const minors = cards.filter((card) => card.arcana === 'minor');

  const suits = new Map<string, number>();
  const elements = new Map<string, number>();
  const numbers = new Map<number, number>();
  const symbols = new Map<string, number>();

  cards.forEach((card) => {
    suits.set(card.suit, (suits.get(card.suit) ?? 0) + 1);
    elements.set(card.element, (elements.get(card.element) ?? 0) + 1);
    const value = Number(card.number ?? card.numerology.value);
    numbers.set(value, (numbers.get(value) ?? 0) + 1);
    card.symbolism.forEach((symbol) => {
      symbols.set(symbol, (symbols.get(symbol) ?? 0) + 1);
    });
  });

  const dominantSuit = [...suits.entries()].sort((a, b) => b[1] - a[1])[0];
  const dominantElement = [...elements.entries()].sort((a, b) => b[1] - a[1])[0];
  const repeatedNumber = [...numbers.entries()].filter(([, count]) => count > 1).sort((a, b) => b[1] - a[1])[0];

  return {
    majorCount: majors.length,
    courtCount: courts.length,
    minorCount: minors.length,
    dominantSuit,
    dominantElement,
    repeatedNumber,
    symbolFocus: [...symbols.entries()].sort((a, b) => b[1] - a[1]).slice(0, 4),
    patterns: CARD_PATTERNS.filter((pattern) => {
      if (pattern.id === 'pattern-major-dominance') return majors.length >= 2;
      if (pattern.id === 'pattern-court-focus') return courts.length >= 2;
      if (pattern.id === 'pattern-elemental-balance') return elements.size >= 4;
      if (pattern.id === 'pattern-same-suit') return dominantSuit && dominantSuit[1] >= 2;
      if (pattern.id === 'pattern-same-number') return Boolean(repeatedNumber);
      return false;
    }),
    interactions: CARD_INTERACTIONS.filter((interaction) => {
      const ids = [interaction.cardA, interaction.cardB, interaction.cardC].filter(Boolean) as string[];
      return ids.some((id) => cards.some((card) => card.id === id));
    })
  };
}

export function buildReadingInterpretation(cards: TarotCard[]) {
  const insight = getPatternInsightForCards(cards);
  const cardNames = cards.map((card) => card.name).join(', ');

  const narrative = [
    `This spread highlights ${insight.majorCount} Major Arcana cards and ${insight.courtCount} Court cards, suggesting a reading centered on major life themes and people or roles in the situation.`,
    insight.dominantSuit
      ? `The strongest suit focus is ${insight.dominantSuit[0]}, which emphasizes ${insight.dominantSuit[0]}-driven themes like action, emotion, thought, or material matters.`
      : 'No dominant suit emerges; the spread is more balanced and mixed in its emphasis.',
    insight.dominantElement
      ? `The leading elemental energy is ${insight.dominantElement[0]}, shaping the overall feel of the reading.`
      : 'There is no clear elemental dominance, suggesting an even, nuanced reading.',
    insight.repeatedNumber
      ? `A repeated number pattern appears at ${insight.repeatedNumber[0]}, intensifying the numerological lesson in the reading.`
      : 'No repeating number pattern appears, so the reading is more varied and less numerically synchronized.'
  ].join(' ');

  return {
    title: 'Reading Pattern Summary',
    cards: cardNames,
    narrative,
    insight
  };
}

export function getCombinationReadForCards(cards: TarotCard[]) {
  const primary = cards[0];
  const secondary = cards[1] ?? cards[0];
  const tertiary = cards[2] ?? cards[1] ?? cards[0];

  const fromSameSuit = primary.suit === secondary.suit;
  const sameElement = primary.element === secondary.element;
  const numericSum = [primary, secondary, tertiary].reduce((sum, card) => sum + Number(card.number ?? card.numerology.value), 0);

  if (fromSameSuit) {
    return `The combination is heavily focused on ${primary.suit} energy. This suggests a repeated life theme centered on ${primary.suit}.`;
  }

  if (sameElement) {
    return `The cards share the same elemental vibration, amplifying ${primary.element} themes such as ${primary.keywords[0]} and ${primary.keywords[1]}.`;
  }

  return `The combination balances ${primary.element} and ${secondary.element} energies, with an overall numerological total of ${numericSum}, which suggests a dynamic mix of transformation and integration.`;
}

export function getStudyModeForReversals(reversalsEnabled: boolean) {
  return reversalsEnabled
    ? 'Reversed card meanings are active in lessons, quizzes, and readings.'
    : 'Reversals are disabled. Cards are interpreted upright only to simplify learning and focus on foundational meanings.';
}
