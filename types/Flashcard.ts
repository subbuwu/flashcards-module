// Main Flashcard types for the module

export interface Flashcard {
    id: string;
    prompt: string;
    answer: string;
    type: 'custom' | 'curated' | 'question-bank';
    lastEdited?: Date;
    stats: {
      learnt: number;
      skipped: number;
      knew: number;
    };
    difficulty?: number; // Percentage of users facing trouble
  }
  
  export interface FlashcardDeck {
    id: string;
    title: string;
    cards: Flashcard[];
    currentCardIndex: number;
    totalCards: number;
  }