import { useFlashcard } from "@/context/FlashcardContext";


export const FlashcardStats = () => {
  const { currentCard } = useFlashcard();

  if (!currentCard) return null;

  return (
    <div className="flex justify-between border-b py-4 mb-6 px-4">
      <div className="text-center flex-1">
        <div className="text-2xl font-bold">{currentCard.stats.learnt}</div>
        <div className="text-sm text-gray-600">Learnt</div>
      </div>
      <div className="text-center flex-1 border-l border-r">
        <div className="text-2xl font-bold text-orange-500">{currentCard.stats.skipped}</div>
        <div className="text-sm text-gray-600">Skipped</div>
      </div>
      <div className="text-center flex-1">
        <div className="text-2xl font-bold text-green-600">{currentCard.stats.knew}</div>
        <div className="text-sm text-gray-600">Knew</div>
      </div>
    </div>
  );
};

