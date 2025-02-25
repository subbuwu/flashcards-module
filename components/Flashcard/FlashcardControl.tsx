import { useFlashcard } from '@/context/FlashcardContext';


export const FlashcardControls = () => {
  const { markAsLearnt, markAsSkipped, markAsKnew, currentCard } = useFlashcard();

  if (!currentCard) return null;

  return (
    <div className="mt-auto">
      <div className="text-[#6941C6] text-sm mb-4 py-2 text-center bg-[#F9F5FF]">
        40% users face trouble mastering this card
      </div>
      <div className="flex gap-3 px-4">
        <button 
          onClick={markAsLearnt}
          className="flex-1 lg:py-3 lg:px-4 p-3 rounded-lg border border-purple-200 text-purple-600 font-medium"
        >
          Did not Know
        </button>
        <button 
          onClick={markAsSkipped}
          className="flex-1 lg:py-3 lg:px-4 p-3 rounded-lg border border-orange-300 text-orange-600 font-medium"
        >
          Skip
        </button>
        <button 
          onClick={markAsKnew}
          className="flex-1 lg:py-3 lg:px-4 p-3 rounded-lg bg-purple-600 text-white font-medium"
        >
          Knew This
        </button>
      </div>
    </div>
  );
};

