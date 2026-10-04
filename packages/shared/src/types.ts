export type Suit = 'Wands' | 'Cups' | 'Swords' | 'Pentacles' | 'Major Arcana';
export type Element = 'Fire' | 'Water' | 'Air' | 'Earth';

export interface TarotCard {
  id: string;
  name: string;
  suit: Suit;
  number?: number;
  element: Element;
  arcana: 'major' | 'minor';
  keywords: string[];
  uprightMeaning: string;
  reversedMeaning: string;
  shortMeaning: string;
  symbolism: string[];
  numerology: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  answer: string;
}

export interface LessonSection {
  title: string;
  points: string[];
}
