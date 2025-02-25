import { useFlashcard } from '@/context/FlashcardContext';
import { motion, AnimatePresence } from 'motion/react';

export const FlashcardCard = () => {
  const { currentCard, isFlipped, setIsFlipped } = useFlashcard();

  if (!currentCard) return null;

  return (
    <div className="lg:max-w-xl mx-auto w-full mb-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={isFlipped ? 'back' : 'front'}
          initial={{ rotateY: 90 }}
          animate={{ rotateY: 0 }}
          exit={{ rotateY: -90 }}
          transition={{ duration: 0.3 }}
          className="w-full aspect-[4/3] rounded-xl shadow-xl shadow-purple-300 bg-purple-600 text-white p-4 flex flex-col"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className="text-lg font-medium mb-2">
            {isFlipped ? 'Answer' : 'Prompt'}
          </div>
          <div className="flex-grow flex items-center justify-center text-center">
            <h3 className="text-2xl font-medium">
              {isFlipped ? currentCard.answer : currentCard.prompt}
            </h3>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};