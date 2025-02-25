'use client'
import { Flashcard, FlashcardDeck } from '@/types/Flashcard';
import { createContext, useContext, ReactNode } from 'react';

interface FlashcardContextType {
  deck: FlashcardDeck | null;
  currentCard: Flashcard | null;
  isFlipped: boolean;
  setIsFlipped: (flipped: boolean) => void;
  nextCard: () => void;
  previousCard: () => void;
  markAsLearnt: () => void;
  markAsSkipped: () => void;
  markAsKnew: () => void;
}

export const FlashcardContext = createContext<FlashcardContextType | null>(null);

export const useFlashcard = () => {
  const context = useContext(FlashcardContext);
  if (!context) throw new Error('useFlashcard must be used within FlashcardProvider');
  return context;
};