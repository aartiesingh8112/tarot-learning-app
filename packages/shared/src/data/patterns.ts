import { CardPattern } from '../types/index';

export const CARD_PATTERNS: CardPattern[] = [
  {
    id: 'pattern-major-dominance',
    name: 'Major Arcana Dominance',
    description: 'Three or more Major Arcana cards in a single reading',
    category: 'major-dominance',
    matchingCards: [
      { criterion: 'arcana', value: 'major' },
      { criterion: 'arcana', value: 'major' },
      { criterion: 'arcana', value: 'major' }
    ],
    interpretation:
      'When multiple Major Arcana cards appear together, it indicates significant karmic lessons, spiritual themes, or major life transitions. This is a powerful pattern suggesting deep transformation and important soul growth.',
    examples: ['major-00', 'major-01', 'major-10']
  },

  {
    id: 'pattern-court-focus',
    name: 'Court Card Cluster',
    description: 'Multiple Court Cards appearing in the same spread',
    category: 'court-cards',
    matchingCards: [{ criterion: 'arcana', value: 'minor' }, { criterion: 'court', value: 'page' }],
    interpretation:
      'Court cards represent people, personalities, or aspects of self. Multiple court cards suggest relationship dynamics, personality interactions, or multiple perspectives on a situation.',
    examples: ['wands-page', 'cups-queen', 'swords-knight']
  },

  {
    id: 'pattern-elemental-balance',
    name: 'Elemental Balance',
    description: 'Balanced representation of all four elements',
    category: 'elemental-balance',
    matchingCards: [
      { criterion: 'element', value: 'fire' },
      { criterion: 'element', value: 'water' },
      { criterion: 'element', value: 'air' },
      { criterion: 'element', value: 'earth' }
    ],
    interpretation:
      'When all four elements appear in a reading, it suggests wholeness, balance, and complete understanding of a situation from all angles. All aspects of life are represented: action, emotion, thought, and material.',
    examples: ['wands-01', 'cups-01', 'swords-01', 'pentacles-01']
  },

  {
    id: 'pattern-same-number',
    name: 'Numerical Repetition',
    description: 'Multiple cards with the same numerical value',
    category: 'numerical-sequence',
    matchingCards: [{ criterion: 'number', value: '3' }, { criterion: 'number', value: '3' }],
    interpretation:
      'Repeating numbers amplify numerological significance. The meaning of that number is emphasized and intensified in the reading.',
    examples: ['wands-03', 'cups-03', 'swords-03']
  },

  {
    id: 'pattern-same-suit',
    name: 'Suit Repetition',
    description: 'Multiple cards from the same suit',
    category: 'suit-repetition',
    matchingCards: [{ criterion: 'suit', value: 'wands' }, { criterion: 'suit', value: 'wands' }],
    interpretation:
      'When many cards of the same suit appear, that suit\'s realm is heavily emphasized. The reading focuses strongly on that life area.',
    examples: ['wands-01', 'wands-03', 'wands-05']
  },

  {
    id: 'pattern-reversed-dominance',
    name: 'Reversed Card Dominance',
    description: 'Majority of cards appear in reversed position',
    category: 'reversed-pattern',
    matchingCards: [{ criterion: 'keyword', value: 'reversed' }],
    interpretation:
      'When most cards are reversed, it suggests blockages, challenges, internal work, or the need to look deeper. Energies are blocked or internalized.',
    examples: ['major-01', 'wands-01', 'cups-02']
  },

  {
    id: 'pattern-archetypal-journey',
    name: 'Archetypal Hero\'s Journey',
    description: 'Cards representing the Hero\'s Journey archetype sequence',
    category: 'archetypal',
    matchingCards: [
      { criterion: 'keyword', value: 'call' },
      { criterion: 'keyword', value: 'challenge' },
      { criterion: 'keyword', value: 'transformation' }
    ],
    interpretation:
      'A progression suggesting the classic hero\'s journey pattern: the call to adventure, facing challenges, and ultimate transformation. Personal growth through adversity.',
    examples: ['major-00', 'major-16', 'major-20']
  },

  {
    id: 'pattern-symbolic-alignment',
    name: 'Symbolic Resonance',
    description: 'Cards sharing common symbolic elements',
    category: 'symbolic',
    matchingCards: [{ criterion: 'symbolism', value: 'water' }, { criterion: 'symbolism', value: 'water' }],
    interpretation:
      'When cards share similar symbols, those symbols\'s meanings are emphasized. Look for the deeper connection and spiritual resonance between the cards.',
    examples: ['cups-02', 'major-02', 'swords-02']
  }
];
