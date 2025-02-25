'use client'
import { FlashcardContext } from '@/context/FlashcardContext';
import { mockFlashcards } from '@/data/mockData';
import { FlashcardDeck } from '@/types/Flashcard';
import { useState, useCallback, ReactNode } from 'react';

export const FlashcardProvider = ({ children , deckId }: { children: ReactNode , deckId: string }) => {
  
  const [deck, setDeck] = useState(() => {
    const foundDeck = mockFlashcards.decks.find(d => d.id === deckId);
    const deckData = foundDeck || mockFlashcards.decks[0];
    
    if (!deckData) return null;
    
    return {
      ...deckData,
      currentCardIndex: deckData.currentCard,
    } as FlashcardDeck;
  });
  
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const currentCard = deck?.cards[currentCardIndex] ?? null;

  const nextCard = useCallback(() => {
    if (!deck) return;
    setCurrentCardIndex((prev) => (prev + 1) % deck.cards.length);
    setIsFlipped(false);
  }, [deck]);

  const previousCard = useCallback(() => {
    if (!deck) return;
    setCurrentCardIndex((prev) => (prev - 1 + deck.cards.length) % deck.cards.length);
    setIsFlipped(false);
  }, [deck]);

  const updateCardStatus = useCallback((status: 'learnt' | 'skipped' | 'knew') => {
    if (!deck || !currentCard) return;
    // Update card stats logic here
    nextCard();
  }, [deck, currentCard, nextCard]);

  const value = {
    deck,
    currentCard,
    isFlipped,
    setIsFlipped,
    nextCard,
    previousCard,
    markAsLearnt: () => updateCardStatus('learnt'),
    markAsSkipped: () => updateCardStatus('skipped'),
    markAsKnew: () => updateCardStatus('knew'),
  };

  return (
    <FlashcardContext.Provider value={value}>
      {children}
    </FlashcardContext.Provider>
  );
};
