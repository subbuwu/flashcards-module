'use client'

import { FlashcardProvider } from '@/components/Flashcard/FlashcardProvider';
import { FlashcardCard } from '@/components/Flashcard/Flashcard';
import { FlashcardControls } from '@/components/Flashcard/FlashcardControl';
import { FlashcardStats } from '@/components/Flashcard/FlashcardStats';
import { FlashcardMenu } from '@/components/Flashcard/FlashcardMenu';
import { FlashcardHeader } from '@/components/Flashcard/Header';
import { useParams } from 'next/navigation';

export default function FlashcardPage() {
  const params = useParams();
  const deckId = params?.deckId as string;
  
  return (
    <FlashcardProvider deckId={deckId}>
      {/* Change this to a flex column that takes full height */}
      <div className="flex flex-col h-screen">
        {/* Main content area with padding */}
        <div className="container mx-auto  py-8 flex-1 flex flex-col">
          <div className="flex justify-between items-center mb-6 px-4">
            <h2 className="text-xl font-semibold">FlashCards</h2>
            <FlashcardMenu />
          </div>
          <FlashcardHeader />
          <FlashcardStats />
          <FlashcardCard />
          {/* Spacer to push controls to bottom */}
          <div className="flex-1"></div>
          {/* Controls are now at the bottom of the container */}
          <FlashcardControls />
        </div>
      </div>
    </FlashcardProvider>
  );
}