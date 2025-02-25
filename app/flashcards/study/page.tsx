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

  if (!deckId) {
    return <p>Loading...</p>; // Handle case when params are not yet available
  }

  return (
    <FlashcardProvider deckId={deckId}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">FlashCards</h2>
          <FlashcardMenu />
        </div>
        <FlashcardHeader />
        <FlashcardStats />
        <FlashcardCard />
        <FlashcardControls />
      </div>
    </FlashcardProvider>
  );
}
