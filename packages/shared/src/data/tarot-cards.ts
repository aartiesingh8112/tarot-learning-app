import { TarotCard } from '../types/index';

// Major Arcana (0-21)
export const MAJOR_ARCANA: TarotCard[] = [
  {
    id: 'major-00',
    name: 'The Fool',
    cardType: 'major',
    arcana: 'major',
    suit: 'none',
    element: 'air',
    romanNumeral: '0',
    keywords: ['new beginnings', 'adventure', 'spontaneity', 'risk', 'innocence'],
    symbolism: ['cliff', 'dog', 'knapsack', 'mountains'],
    uprightMeaning:
      'The Fool represents new beginnings, infinite potential, and embarking on a journey with faith and enthusiasm. It suggests taking a leap of faith.',
    reversedMeaning:
      'Reversed, The Fool can indicate recklessness, naiveté, hesitation, or fear of taking necessary risks.',
    shortMeaning: 'New beginnings and taking risks.',
    numerology: {
      value: 0,
      meaning: 'Infinite potential, all possibilities',
      vibration: 'Unlimited',
      energySignature: 'Adventurous Spirit'
    },
    elementalAssociation: {
      primary: 'air',
      elementalAttributes: ['freedom', 'thought', 'communication', 'lightness'],
      astrological: 'Uranus'
    },
    suitAssociation: {
      suit: 'none',
      realm: 'spiritual',
      energy: 'Initiation'
    },
    commonCombinations: ['major-01', 'major-10', 'wands-01'],
    archetypal: 'The Hero',
    descriptionLong:
      'The Fool stands at the edge of a cliff, looking skyward, ready to step into the unknown. A white dog playfully nips at their heels, representing loyalty and protection. The Fool carries only a small knapsack, suggesting travel light with faith.'
  },
  {
    id: 'major-01',
    name: 'The Magician',
    cardType: 'major',
    arcana: 'major',
    suit: 'none',
    number: 1,
    element: 'air',
    romanNumeral: 'I',
    keywords: ['manifestation', 'willpower', 'skill', 'creation', 'power'],
    symbolism: ['wand', 'table', 'tools', 'white roses', 'infinity symbol'],
    uprightMeaning:
      'The Magician symbolizes personal power, focus, and the ability to shape reality through intention and action. It represents mastery of resources and manifestation.',
    reversedMeaning:
      'Reversed, The Magician can indicate manipulation, confusion, wasted potential, or lack of focus.',
    shortMeaning: 'Manifestation and personal power.',
    numerology: {
      value: 1,
      meaning: 'New beginnings, individuality, leadership',
      vibration: 'Initiative',
      energySignature: 'Creator'
    },
    elementalAssociation: {
      primary: 'air',
      secondary: 'fire',
      elementalAttributes: ['intellect', 'will', 'action', 'communication'],
      planetaryRuler: 'Mercury',
      astrological: 'Gemini'
    },
    suitAssociation: {
      suit: 'none',
      realm: 'spiritual',
      energy: 'Will and Action'
    },
    commonCombinations: ['major-00', 'major-02', 'cups-01'],
    archetypal: 'The Creator',
    descriptionLong:
      'The Magician stands before a table laden with the four tools of tarot: a wand, cup, sword, and pentacle. One hand points upward to heaven, the other downward to earth, channeling divine energy into material form. An infinity symbol hovers above his head.'
  },
  // Continue with remaining major arcana 2-21...
];

// Minor Arcana - Wands (Fire suit)
export const WANDS: TarotCard[] = [
  {
    id: 'wands-01',
    name: 'Ace of Wands',
    cardType: 'minor',
    arcana: 'minor',
    suit: 'wands',
    number: 1,
    element: 'fire',
    keywords: ['new opportunities', 'growth', 'potential', 'inspiration', 'passion'],
    symbolism: ['wand', 'flame', 'hand', 'leaves', 'castle'],
    uprightMeaning:
      'The Ace of Wands represents new creative opportunities, spiritual inspiration, and the spark of passion. It indicates growth and the beginning of an exciting venture.',
    reversedMeaning:
      'Reversed, it can suggest blocked creativity, lack of inspiration, hesitation, or delays in projects.',
    shortMeaning: 'New creative opportunities and inspiration.',
    numerology: {
      value: 1,
      meaning: 'Beginnings, potential, unity',
      vibration: 'Initiation',
      energySignature: 'Divine Spark'
    },
    elementalAssociation: {
      primary: 'fire',
      elementalAttributes: ['energy', 'passion', 'creativity', 'action'],
      planetaryRuler: 'Mars'
    },
    suitAssociation: {
      suit: 'wands',
      realm: 'action, creativity, passion',
      energy: 'Inspiration',
      season: 'Spring',
      direction: 'South'
    },
    commonCombinations: ['wands-02', 'major-01', 'pentacles-01'],
    descriptionLong:
      'A hand emerges from clouds, grasping a budding wand. Fire and sparks dance around it, indicating potential energy. In the distance, a castle stands, representing achievement.'
  },
  // Continue with remaining Wands 2-10...
];

// Minor Arcana - Cups (Water suit)
export const CUPS: TarotCard[] = [
  {
    id: 'cups-01',
    name: 'Ace of Cups',
    cardType: 'minor',
    arcana: 'minor',
    suit: 'cups',
    number: 1,
    element: 'water',
    keywords: ['love', 'new relationships', 'emotional fulfillment', 'compassion', 'intuition'],
    symbolism: ['cup', 'water', 'hand', 'dove', 'lily'],
    uprightMeaning:
      'The Ace of Cups represents new emotional beginnings, love, compassion, and fulfillment. It indicates opening the heart to new experiences and relationships.',
    reversedMeaning:
      'Reversed, it can suggest emotional blockages, closed heart, or difficulty expressing feelings.',
    shortMeaning: 'New emotional beginnings and love.',
    numerology: {
      value: 1,
      meaning: 'Beginnings, potential, unity',
      vibration: 'Initiation',
      energySignature: 'Heart Opening'
    },
    elementalAssociation: {
      primary: 'water',
      elementalAttributes: ['emotion', 'intuition', 'love', 'relationships'],
      planetaryRuler: 'Venus'
    },
    suitAssociation: {
      suit: 'cups',
      realm: 'emotions, relationships, intuition',
      energy: 'Love',
      season: 'Autumn',
      direction: 'West'
    },
    commonCombinations: ['cups-02', 'major-02', 'hearts'],
    descriptionLong:
      'A hand offers a golden cup overflowing with water. A white dove hovers above, symbolizing peace and love. Water flows from the cup into the ground below, suggesting emotional abundance.'
  },
  // Continue with remaining Cups 2-10...
];

// Minor Arcana - Swords (Air suit)
export const SWORDS: TarotCard[] = [
  {
    id: 'swords-01',
    name: 'Ace of Swords',
    cardType: 'minor',
    arcana: 'minor',
    suit: 'swords',
    number: 1,
    element: 'air',
    keywords: ['truth', 'clarity', 'new ideas', 'mental clarity', 'justice'],
    symbolism: ['sword', 'crown', 'clouds', 'palm branch', 'clarity'],
    uprightMeaning:
      'The Ace of Swords represents truth, clarity, and breakthrough ideas. It suggests clear thinking and the power of the mind to cut through confusion.',
    reversedMeaning:
      'Reversed, it can indicate confusion, miscommunication, lack of clarity, or mental fog.',
    shortMeaning: 'Truth and mental clarity.',
    numerology: {
      value: 1,
      meaning: 'Beginnings, potential, unity',
      vibration: 'Initiation',
      energySignature: 'Clear Mind'
    },
    elementalAssociation: {
      primary: 'air',
      elementalAttributes: ['intellect', 'communication', 'truth', 'clarity'],
      planetaryRuler: 'Mercury'
    },
    suitAssociation: {
      suit: 'swords',
      realm: 'thought, intellect, conflict',
      energy: 'Truth',
      season: 'Winter',
      direction: 'East'
    },
    commonCombinations: ['swords-02', 'major-11', 'pentacles-01'],
    descriptionLong:
      'A sword pierces through clouds, crowned with a wreath of victory. A palm branch and olive branch cross beneath, symbolizing victory and peace through truth.'
  },
  // Continue with remaining Swords 2-10...
];

// Minor Arcana - Pentacles (Earth suit)
export const PENTACLES: TarotCard[] = [
  {
    id: 'pentacles-01',
    name: 'Ace of Pentacles',
    cardType: 'minor',
    arcana: 'minor',
    suit: 'pentacles',
    number: 1,
    element: 'earth',
    keywords: ['new opportunity', 'prosperity', 'abundance', 'material gain', 'security'],
    symbolism: ['pentacle', 'hand', 'garden', 'coins', 'prosperity'],
    uprightMeaning:
      'The Ace of Pentacles represents new financial opportunities, material abundance, and prosperous beginnings. It indicates a promise of material security and prosperity.',
    reversedMeaning:
      'Reversed, it can suggest missed opportunities, lack of abundance, or financial difficulties.',
    shortMeaning: 'New material opportunities and prosperity.',
    numerology: {
      value: 1,
      meaning: 'Beginnings, potential, unity',
      vibration: 'Initiation',
      energySignature: 'Material Manifestation'
    },
    elementalAssociation: {
      primary: 'earth',
      elementalAttributes: ['material', 'practical', 'abundance', 'stability'],
      planetaryRuler: 'Saturn'
    },
    suitAssociation: {
      suit: 'pentacles',
      realm: 'material, practical, financial',
      energy: 'Abundance',
      season: 'Summer',
      direction: 'North'
    },
    commonCombinations: ['pentacles-02', 'major-10', 'wands-01'],
    descriptionLong:
      'A hand presents a golden pentacle in a lush garden. Ivy grows around it, and mountains are visible in the distance. The ground is fertile and abundant, suggesting material growth.'
  },
  // Continue with remaining Pentacles 2-10...
];

// Court Cards
export const COURT_CARDS: TarotCard[] = [
  // Wands Court
  {
    id: 'wands-page',
    name: 'Page of Wands',
    cardType: 'court',
    arcana: 'minor',
    suit: 'wands',
    court: 'page',
    element: 'fire',
    keywords: ['enthusiasm', 'curiosity', 'youthful energy', 'exploration', 'inspiration'],
    symbolism: ['young person', 'wand', 'salamander', 'desert landscape', 'exploration'],
    uprightMeaning:
      'The Page of Wands represents enthusiasm, curiosity, and youthful energy. It suggests excitement about new ventures and a thirst for knowledge.',
    reversedMeaning:
      'Reversed, it can indicate lack of direction, restlessness, or inability to focus.',
    shortMeaning: 'Youthful enthusiasm and curiosity.',
    numerology: {
      value: 11,
      meaning: 'Intuition, illumination, idealism',
      vibration: 'Messenger',
      energySignature: 'Youthful Fire'
    },
    elementalAssociation: {
      primary: 'fire',
      elementalAttributes: ['passion', 'courage', 'creativity', 'communication'],
      astrological: 'Aries, Leo, Sagittarius'
    },
    suitAssociation: {
      suit: 'wands',
      realm: 'action, creativity, passion',
      energy: 'Messenger'
    },
    commonCombinations: ['wands-knight', 'major-01', 'cups-page'],
    descriptionLong:
      'A young figure holds a wand aloft, dressed in vibrant colors. A salamander crawls nearby, representing fire energy. The landscape is desert-like, suggesting expansion and adventure.'
  },
  // Continue with other Court cards...
];

export const ALL_TAROT_CARDS: TarotCard[] = [
  ...MAJOR_ARCANA,
  ...WANDS,
  ...CUPS,
  ...SWORDS,
  ...PENTACLES,
  ...COURT_CARDS
];
