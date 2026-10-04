import { CardInteraction } from '../types/index';

export const CARD_INTERACTIONS: CardInteraction[] = [
  {
    id: 'interaction-fool-magician',
    cardA: 'major-00',
    cardB: 'major-01',
    interactionType: 'progression',
    numerologicalSum: 1,
    elementalDynamics: [
      {
        element: 'air',
        cardsInvolved: ['major-00', 'major-01'],
        dynamic: 'Potential meets manifestation',
        meaning:
          'The free-flowing potential of The Fool finds focus and direction through The Magician\'s will.',
        example: 'A dream idea becomes a concrete project'
      }
    ],
    suitDynamics: [],
    interpretation:
      'The Fool\'s infinite potential meets The Magician\'s focused will. This progression suggests taking an idea and making it real through focused intention and skill.',
    reading: [
      {
        position: 'left',
        cardId: 'major-00',
        role: 'Initial situation or potential',
        theme: 'Unlimited possibility'
      },
      {
        position: 'right',
        cardId: 'major-01',
        role: 'Outcome or solution',
        theme: 'Focused manifestation'
      }
    ],
    themes: ['manifestation', 'potential', 'will', 'action', 'creation'],
    context: [
      'career',
      'creative-projects',
      'personal-growth',
      'spirituality',
      'entrepreneurship'
    ]
  },

  {
    id: 'interaction-ace-combinations',
    cardA: 'wands-01',
    cardB: 'cups-01',
    cardC: 'pentacles-01',
    interactionType: 'harmony',
    numerologicalSum: 3,
    elementalDynamics: [
      {
        element: 'fire',
        cardsInvolved: ['wands-01'],
        dynamic: 'Inspiration and passion',
        meaning: 'Creative spark and motivation'
      },
      {
        element: 'water',
        cardsInvolved: ['cups-01'],
        dynamic: 'Emotional engagement',
        meaning: 'Heart connection and intuition'
      },
      {
        element: 'earth',
        cardsInvolved: ['pentacles-01'],
        dynamic: 'Material manifestation',
        meaning: 'Practical grounding and results'
      }
    ],
    suitDynamics: [
      {
        suit: 'wands',
        cardsInvolved: ['wands-01'],
        repetition: 1,
        dynamics: 'Creative energy',
        meaning: 'Action and initiative'
      },
      {
        suit: 'cups',
        cardsInvolved: ['cups-01'],
        repetition: 1,
        dynamics: 'Emotional investment',
        meaning: 'Love and compassion'
      },
      {
        suit: 'pentacles',
        cardsInvolved: ['pentacles-01'],
        repetition: 1,
        dynamics: 'Material reward',
        meaning: 'Success and abundance'
      }
    ],
    interpretation:
      'The three Aces together represent complete new beginning across all life areas. Inspiration (Wands) + emotional fulfillment (Cups) + material prosperity (Pentacles) = total life renewal and fresh starts in every realm.',
    reading: [
      {
        position: 'left',
        cardId: 'wands-01',
        role: 'Inspiration and creative energy',
        theme: 'New ventures'
      },
      {
        position: 'center',
        cardId: 'cups-01',
        role: 'Emotional engagement and fulfillment',
        theme: 'Meaningful connections'
      },
      {
        position: 'right',
        cardId: 'pentacles-01',
        role: 'Material manifestation and success',
        theme: 'Practical results'
      }
    ],
    themes: [
      'new beginnings',
      'abundance',
      'wholeness',
      'fulfillment',
      'complete renewal'
    ],
    context: ['general', 'personal-growth', 'career', 'love', 'finances']
  },

  {
    id: 'interaction-opposing-elements',
    cardA: 'wands-03',
    cardB: 'cups-03',
    interactionType: 'challenge',
    numerologicalSum: 6,
    elementalDynamics: [
      {
        element: 'fire',
        cardsInvolved: ['wands-03'],
        dynamic: 'Conflict and passion',
        meaning: 'Heated energy and friction'
      },
      {
        element: 'water',
        cardsInvolved: ['cups-03'],
        dynamic: 'Emotional depth',
        meaning: 'Feelings and relationships'
      }
    ],
    suitDynamics: [
      {
        suit: 'wands',
        cardsInvolved: ['wands-03'],
        repetition: 1,
        dynamics: 'External conflict',
        meaning: 'Disagreement and tension'
      },
      {
        suit: 'cups',
        cardsInvolved: ['cups-03'],
        repetition: 1,
        dynamics: 'Emotional expression',
        meaning: 'Celebration or emotional release after conflict'
      }
    ],
    interpretation:
      'Fire and Water create steam and turbulence. Conflict (Wands) meets emotion (Cups). There\'s tension between action and feeling, between what we want to do and what the heart needs. Resolution requires balance.',
    reading: [
      {
        position: 'left',
        cardId: 'wands-03',
        role: 'Challenge or conflict',
        theme: 'Tension'
      },
      {
        position: 'right',
        cardId: 'cups-03',
        role: 'Emotional outcome',
        theme: 'Resolution through feeling'
      }
    ],
    themes: ['conflict', 'resolution', 'balance', 'emotion', 'passion'],
    context: ['love', 'relationships', 'personal-growth', 'career']
  },

  {
    id: 'interaction-numerological-sequence-1-2-3',
    cardA: 'wands-01',
    cardB: 'wands-02',
    cardC: 'wands-03',
    interactionType: 'progression',
    numerologicalSum: 6,
    elementalDynamics: [
      {
        element: 'fire',
        cardsInvolved: ['wands-01', 'wands-02', 'wands-03'],
        dynamic: 'Increasing intensity',
        meaning: 'Building energy and momentum'
      }
    ],
    suitDynamics: [
      {
        suit: 'wands',
        cardsInvolved: ['wands-01', 'wands-02', 'wands-03'],
        repetition: 3,
        dynamics: 'Creative progression',
        meaning: 'Strong emphasis on creative action and development'
      }
    ],
    interpretation:
      'A numerical progression from 1 to 3 in the same suit shows clear development. The spark of an idea (1) develops partnership (2) leading to creative expression (3). This is strong natural flow and momentum.',
    reading: [
      {
        position: 'past',
        cardId: 'wands-01',
        role: 'Initial inspiration',
        theme: 'Spark'
      },
      {
        position: 'present',
        cardId: 'wands-02',
        role: 'Partnership and collaboration',
        theme: 'Development'
      },
      {
        position: 'future',
        cardId: 'wands-03',
        role: 'Creative celebration',
        theme: 'Expression'
      }
    ],
    themes: ['progression', 'development', 'growth', 'momentum', 'creative-expression'],
    context: ['career', 'creative-projects', 'relationships', 'personal-growth']
  },

  {
    id: 'interaction-mercury-connection',
    cardA: 'major-01',
    cardB: 'swords-01',
    interactionType: 'harmony',
    numerologicalSum: 2,
    elementalDynamics: [
      {
        element: 'air',
        cardsInvolved: ['major-01', 'swords-01'],
        dynamic: 'Mercury energy amplified',
        meaning: 'Communication, intellect, and clarity strengthened'
      }
    ],
    suitDynamics: [],
    interpretation:
      'Both ruled by Mercury. When The Magician meets the Ace of Swords, mental clarity and communicative power are at their peak. This is excellent for writing, speaking, negotiations, and clear thinking.',
    reading: [
      {
        position: 'left',
        cardId: 'major-01',
        role: 'Willpower and focus',
        theme: 'Intention'
      },
      {
        position: 'right',
        cardId: 'swords-01',
        role: 'Clear communication',
        theme: 'Truth and clarity'
      }
    ],
    themes: ['communication', 'clarity', 'intellect', 'speaking-truth', 'agreement'],
    context: ['career', 'communication', 'personal-growth', 'creativity']
  }
];
