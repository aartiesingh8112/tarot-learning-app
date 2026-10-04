// App Constants

export const ELEMENTS = {
  FIRE: 'fire',
  WATER: 'water',
  AIR: 'air',
  EARTH: 'earth',
  NONE: 'none'
} as const;

export const SUITS = {
  WANDS: 'wands', // Fire - Action, Creativity
  CUPS: 'cups', // Water - Emotion, Relationships
  SWORDS: 'swords', // Air - Thought, Conflict
  PENTACLES: 'pentacles', // Earth - Material, Practical
  NONE: 'none'
} as const;

export const ARCANA = {
  MAJOR: 'major',
  MINOR: 'minor'
} as const;

export const CARD_TYPES = {
  MAJOR: 'major',
  COURT: 'court',
  MINOR: 'minor'
} as const;

export const COURT_RANKS = {
  PAGE: 'page', // Ages 0-16 or students/messengers
  KNIGHT: 'knight', // Ages 16-32 or adventurers
  QUEEN: 'queen', // Ages 32-48 or nurturers
  KING: 'king' // Ages 48+ or authority figures
} as const;

export const ELEMENT_MEANINGS = {
  fire: {
    realm: 'Action, Passion, Creativity',
    keywords: ['energy', 'passion', 'action', 'creativity', 'courage', 'willpower'],
    season: 'Spring',
    direction: 'South',
    planet: 'Mars',
    challenge: 'Burning out, aggression'
  },
  water: {
    realm: 'Emotion, Intuition, Relationships',
    keywords: ['emotion', 'intuition', 'love', 'relationships', 'compassion', 'flow'],
    season: 'Autumn',
    direction: 'West',
    planet: 'Venus',
    challenge: 'Overwhelm, drowning in emotion'
  },
  air: {
    realm: 'Thought, Communication, Intellect',
    keywords: ['thought', 'communication', 'intellect', 'clarity', 'truth', 'conflict'],
    season: 'Winter',
    direction: 'East',
    planet: 'Mercury',
    challenge: 'Overthinking, scattered thoughts'
  },
  earth: {
    realm: 'Material, Practical, Physical',
    keywords: ['material', 'practical', 'physical', 'stability', 'abundance', 'growth'],
    season: 'Summer',
    direction: 'North',
    planet: 'Saturn',
    challenge: 'Stagnation, materialism'
  }
} as const;

export const SUIT_MEANINGS = {
  wands: {
    realm: 'Action, Passion, Creativity',
    element: 'fire',
    keywords: ['action', 'passion', 'creativity', 'enterprise', 'energy'],
    lifeArea: 'Career, passion projects, creativity'
  },
  cups: {
    realm: 'Emotion, Intuition, Relationships',
    element: 'water',
    keywords: ['emotion', 'intuition', 'love', 'relationships', 'pleasure'],
    lifeArea: 'Relationships, emotions, intuition'
  },
  swords: {
    realm: 'Thought, Intellect, Conflict',
    element: 'air',
    keywords: ['thought', 'intellect', 'conflict', 'truth', 'clarity'],
    lifeArea: 'Communication, mental clarity, challenges'
  },
  pentacles: {
    realm: 'Material, Physical, Practical',
    element: 'earth',
    keywords: ['material', 'physical', 'practical', 'abundance', 'stability'],
    lifeArea: 'Finances, work, material security'
  }
} as const;

export const NUMBER_MEANINGS = {
  1: {
    meaning: 'New beginnings, potential, unity, individuality',
    keywords: ['initiation', 'beginning', 'leadership', 'independence'],
    challenge: 'Selfishness, impulsiveness'
  },
  2: {
    meaning: 'Duality, partnership, balance, intuition',
    keywords: ['partnership', 'balance', 'duality', 'cooperation', 'intuition'],
    challenge: 'Indecision, codependency'
  },
  3: {
    meaning: 'Creativity, expression, joy, celebration',
    keywords: ['creativity', 'expression', 'joy', 'celebration', 'communication'],
    challenge: 'Scattered energy, overspending'
  },
  4: {
    meaning: 'Stability, foundation, structure, security',
    keywords: ['stability', 'foundation', 'structure', 'security', 'hard work'],
    challenge: 'Rigidity, limitation, boredom'
  },
  5: {
    meaning: 'Challenge, conflict, change, growth through adversity',
    keywords: ['challenge', 'conflict', 'change', 'struggle', 'transformation'],
    challenge: 'Chaos, tension, discord'
  },
  6: {
    meaning: 'Harmony, balance, love, communication',
    keywords: ['harmony', 'balance', 'love', 'communication', 'compromise'],
    challenge: 'Imbalance, indecision'
  },
  7: {
    meaning: 'Reflection, wisdom, mystery, spiritual insight',
    keywords: ['reflection', 'wisdom', 'mystery', 'spiritual', 'analysis'],
    challenge: 'Overthinking, isolation, doubt'
  },
  8: {
    meaning: 'Power, manifestation, achievement, authority',
    keywords: ['power', 'manifestation', 'achievement', 'authority', 'abundance'],
    challenge: 'Powerlessness, loss of control'
  },
  9: {
    meaning: 'Completion, wisdom, spiritual fulfillment, humanitarianism',
    keywords: ['completion', 'wisdom', 'fulfillment', 'humanitarianism', 'enlightenment'],
    challenge: 'Endings, loss, letting go'
  },
  10: {
    meaning: 'Completion, fulfillment, cycles end and restart',
    keywords: ['completion', 'fulfillment', 'wholeness', 'integration'],
    challenge: 'Overload, pressure, burden'
  }
} as const;

export const STUDY_MODES = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced'
} as const;

export const PRACTICE_TYPES = {
  FLASHCARD: 'flashcard',
  QUIZ: 'quiz',
  SPREAD_PRACTICE: 'spread-practice',
  PAIRING_GAME: 'pairing-game',
  PATTERN_CHALLENGE: 'pattern-challenge',
  INTERACTION_STUDY: 'interaction-study'
} as const;

export const PATTERN_CATEGORIES = {
  MAJOR_DOMINANCE: 'major-dominance',
  COURT_CARDS: 'court-cards',
  ELEMENTAL_BALANCE: 'elemental-balance',
  NUMERICAL_SEQUENCE: 'numerical-sequence',
  SUIT_REPETITION: 'suit-repetition',
  REVERSED_PATTERN: 'reversed-pattern',
  ARCHETYPAL: 'archetypal',
  SYMBOLIC: 'symbolic'
} as const;

export const INTERACTION_TYPES = {
  OPPOSITION: 'opposition',
  HARMONY: 'harmony',
  CHALLENGE: 'challenge',
  COMPLETION: 'completion',
  AMPLIFICATION: 'amplification',
  BALANCE: 'balance',
  PROGRESSION: 'progression',
  REVERSAL: 'reversal'
} as const;
