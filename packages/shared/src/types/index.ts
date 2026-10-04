// Core Tarot Types and Interfaces

export type Arcana = 'major' | 'minor';
export type CardType = 'major' | 'court' | 'minor';
export type Suit = 'wands' | 'cups' | 'swords' | 'pentacles' | 'none';
export type Element = 'fire' | 'water' | 'air' | 'earth' | 'none';
export type Court = 'page' | 'knight' | 'queen' | 'king';
export type Number = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface TarotCard {
  id: string;
  name: string;
  altName?: string;
  cardType: CardType;
  arcana: Arcana;
  suit: Suit;
  number?: Number;
  court?: Court;
  romanNumeral?: string;
  element: Element;
  keywords: string[];
  symbolism: string[];
  uprightMeaning: string;
  reversedMeaning?: string;
  shortMeaning: string;
  numerology: Numerology;
  elementalAssociation: ElementalAssociation;
  suitAssociation: SuitAssociation;
  commonCombinations: string[];
  archetypal?: string;
  descriptionLong?: string;
  imageUrl?: string;
}

export interface Numerology {
  value: number;
  meaning: string;
  vibration: string;
  lifeLesson?: string;
  energySignature: string;
}

export interface ElementalAssociation {
  primary: Element;
  secondary?: Element;
  elementalAttributes: string[];
  planetaryRuler?: string;
  astrological?: string;
}

export interface SuitAssociation {
  suit: Suit;
  realm: string; // thoughts, emotions, action, material
  energy: string;
  season?: string;
  direction?: string;
}

export interface CardPattern {
  id: string;
  name: string;
  description: string;
  category: PatternCategory;
  matchingCards: CardMatcher[];
  interpretation: string;
  examples: string[]; // card IDs
}

export type PatternCategory =
  | 'major-dominance'
  | 'court-cards'
  | 'elemental-balance'
  | 'numerical-sequence'
  | 'suit-repetition'
  | 'reversed-pattern'
  | 'archetypal'
  | 'symbolic';

export interface CardMatcher {
  criterion: 'arcana' | 'suit' | 'element' | 'number' | 'court' | 'symbolism' | 'keyword';
  value: string;
}

export interface CardInteraction {
  id: string;
  cardA: string; // card ID
  cardB: string; // card ID
  cardC?: string; // card ID for 3-card combinations
  interactionType: InteractionType;
  numerologicalSum?: number;
  elementalDynamics: ElementalDynamic[];
  suitDynamics: SuitDynamic[];
  interpretation: string;
  reading: CombinationReading[];
  themes: string[];
  context: ReadingContext[];
}

export type InteractionType =
  | 'opposition'
  | 'harmony'
  | 'challenge'
  | 'completion'
  | 'amplification'
  | 'balance'
  | 'progression'
  | 'reversal';

export interface ElementalDynamic {
  element: Element;
  cardsInvolved: string[]; // card IDs
  dynamic: string;
  meaning: string;
  example?: string;
}

export interface SuitDynamic {
  suit: Suit;
  cardsInvolved: string[]; // card IDs
  repetition: number;
  dynamics: string;
  meaning: string;
}

export interface CombinationReading {
  position: 'left' | 'center' | 'right' | 'past' | 'present' | 'future';
  cardId: string;
  role: string; // describes role in combination
  theme: string;
}

export type ReadingContext =
  | 'love'
  | 'career'
  | 'finances'
  | 'health'
  | 'spirituality'
  | 'personal-growth'
  | 'relationships'
  | 'creativity'
  | 'general';

export interface PatternRecognitionProfile {
  userId: string;
  recordedMajorCount: number;
  recordedCourtCount: number;
  recordedMinorCount: number;
  recordedNumbers: Map<Number, number>;
  recordedElements: Map<Element, number>;
  recordedSuits: Map<Suit, number>;
  recordedSymbols: Map<string, number>;
  patterns: PatternInstance[];
  interactions: InteractionInstance[];
  preferences: PatternPreferences;
}

export interface PatternInstance {
  patternId: string;
  occurrences: number;
  firstSeen: string; // ISO date
  lastSeen: string; // ISO date
  spreadType: string;
}

export interface InteractionInstance {
  interactionId: string;
  occurrences: number;
  contexts: ReadingContext[];
  notes?: string;
}

export interface PatternPreferences {
  reversalsEnabled: boolean;
  focusAreas: PatternCategory[];
  trackingLevel: 'basic' | 'intermediate' | 'advanced';
}

export interface UserSettings {
  reversalsEnabled: boolean;
  studyMode: 'beginner' | 'intermediate' | 'advanced';
  dailyGoal: number;
  preferredSpreads: string[];
  trackPatterns: boolean;
  elementalFocusAreas?: Element[];
  trackingLevel: 'basic' | 'intermediate' | 'advanced';
}

export interface StudyProgress {
  userId: string;
  cardId: string;
  mastery: number; // 0-100
  lastReviewedAt?: string;
  reviewCount: number;
  reversedSeen: boolean;
  patternsSeen: string[]; // pattern IDs
}

export interface Lesson {
  id: string;
  title: string;
  category: LessonCategory;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  content: string;
  relatedCards: string[]; // card IDs
  patterns?: string[]; // pattern IDs
  examples?: string[];
  followUpLessons?: string[];
}

export type LessonCategory =
  | 'card-meanings'
  | 'numerology'
  | 'elements'
  | 'suits'
  | 'combinations'
  | 'spread-reading'
  | 'pattern-recognition'
  | 'card-interactions';

export interface PracticeSession {
  id: string;
  type: PracticeType;
  settings: PracticeSettings;
  questions: PracticeQuestion[];
  score?: number;
  completedAt?: string;
  patterns?: PatternFinding[];
}

export type PracticeType =
  | 'flashcard'
  | 'quiz'
  | 'spread-practice'
  | 'pairing-game'
  | 'pattern-challenge'
  | 'interaction-study';

export interface PracticeSettings {
  reversalsEnabled: boolean;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  questionCount: number;
  focusArea?: PatternCategory | LessonCategory;
  includePatternRecognition: boolean;
}

export interface PracticeQuestion {
  id: string;
  type: QuestionType;
  prompt: string;
  cardIds?: string[]; // for combination questions
  options: string[];
  correctAnswer: string;
  explanation: string;
  patterns?: string[]; // pattern IDs relevant to question
  interactions?: string[]; // interaction IDs relevant to question
}

export type QuestionType =
  | 'single-card'
  | 'combination'
  | 'pattern-recognition'
  | 'elemental-interaction'
  | 'suit-interaction'
  | 'numerological-progression';

export interface PatternFinding {
  cardIds: string[];
  pattern: string;
  category: PatternCategory;
  confidence: number;
}

export interface Spread {
  id: string;
  name: string;
  description: string;
  cardCount: number;
  positions: SpreadPosition[];
  guidance: string;
  bestFor: ReadingContext[];
}

export interface SpreadPosition {
  position: number;
  name: string;
  meaning: string;
  cardId?: string;
}

export interface ElementalBalance {
  fire: number;
  water: number;
  air: number;
  earth: number;
  none: number;
  interpretation: string;
  imbalances?: ElementalImbalance[];
}

export interface ElementalImbalance {
  element: Element;
  meaning: string;
  guidance: string;
}

export interface NumerologicalProgression {
  cards: string[]; // card IDs in order
  numbers: Number[];
  pattern: string;
  meaning: string;
  lifeLesson?: string;
}

export interface SymbolicConnection {
  cardIds: string[];
  symbols: string[];
  theme: string;
  interpretation: string;
}