import { useFlashcard } from "@/context/FlashcardContext";

export const FlashcardHeader = () => {
    const { deck, currentCard } = useFlashcard();
    
    if (!deck || currentCard === null) return null;
    
    return (
      <div className="flex justify-between items-center py-3 border-b mb-4">
        <div className="flex items-center">
          <button className="mr-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span className="font-medium">Card {currentCard?.id + 1}/{deck.cards.length}</span>
        </div>
        <div className="flex gap-4">
          <button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 13a1 1 0 100-2 1 1 0 000 2z" fill="currentColor"/>
              <path d="M19 13a1 1 0 100-2 1 1 0 000 2z" fill="currentColor"/>
              <path d="M5 13a1 1 0 100-2 1 1 0 000 2z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    );
  };
  