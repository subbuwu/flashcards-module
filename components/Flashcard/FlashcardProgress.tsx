import { useFlashcard } from "@/context/FlashcardContext";

export const FlashcardProgress = () => {
    const { deck, currentCard } = useFlashcard();
    
    if (!deck || !currentCard) return null;
    
    return (
      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
        <div 
          className="bg-purple-600 h-full transition-all duration-300"
          style={{ 
            width: `${(deck.currentCardIndex/ deck.totalCards) * 100}%` 
          }}
        />
      </div>
    );
  };