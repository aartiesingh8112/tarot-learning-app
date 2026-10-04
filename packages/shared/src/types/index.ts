export interface TarotCard {
  id: number;
  name: string;
  suit?: string;
  number?: number;
  meaning: string;
  reversedMeaning?: string;
  numerology?: number;
  element?: string;
  keywords: string[];
  description: string;
}

export interface CardCombination {
  id: string;
  cards: number[];
  interpretation: string;
  context: string;
}

export interface UserProgress {
  userId: string;
  cardId: number;
  learned: boolean;
  practiceCount: number;
  lastPracticed: Date;
}

export interface LessonTopic {
  id: string;
  title: string;
  content: string;
  cards: number[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}
