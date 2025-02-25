import { useFlashcard } from '@/context/FlashcardContext';
import { motion, AnimatePresence } from 'motion/react';

export const FlashcardCard = () => {
  const { currentCard, isFlipped, setIsFlipped } = useFlashcard();

  if (!currentCard) return null;

  return (
    <div className="lg:max-w-xl mx-auto w-full mb-6 px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={isFlipped ? 'back' : 'front'}
          initial={{ rotateY: 90 }}
          animate={{ rotateY: 0 }}
          exit={{ rotateY: -90 }}
          transition={{ duration: 0.3 }}
          className={`w-full aspect-[4/3] rounded-xl shadow-xl shadow-purple-300 border p-4 flex flex-col ${!isFlipped ? "bg-purple-600   text-white" : "bg-[#FFFFFF] border-[#D6BBFB]"} text-black `}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className="text-lg font-medium mb-4">
            {isFlipped ? 'Answer' : 'Prompt'}
          </div>
          <div className={` ${isFlipped ? "text-sm" : "text-lg"} flex items-center justify-center  `}>
            <h3 className={` ${isFlipped ? "font-normal text-justify " : "font-medium text-center mt-6"} `}>
              {isFlipped ? currentCard.answer : currentCard.prompt}
            </h3>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};