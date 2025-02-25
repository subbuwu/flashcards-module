'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { FlashcardSettings, mockFlashcardSettings } from '@/lib/flashcardsettings';


export default function StudySettingsPage() {
  const [settings, setSettings] = useState<FlashcardSettings>(mockFlashcardSettings);
  const router = useRouter();

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">Flashcard Settings</h1>
        <button className="p-2" onClick={() => router.back()}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <span>Shuffle Cards</span>
          <Switch
            checked={settings.shuffleCards}
            onCheckedChange={(checked) => 
              setSettings(prev => ({ ...prev, shuffleCards: checked }))
            }
          />
        </div>

        <div className="flex items-center justify-between">
          <span>Repeat After</span>
          <select 
            className="border rounded p-2"
            value={settings.repeatAfter}
            onChange={(e) => 
              setSettings(prev => ({ ...prev, repeatAfter: Number(e.target.value) }))
            }
          >
            <option value="4">4 cards</option>
            <option value="8">8 cards</option>
            <option value="12">12 cards</option>
          </select>
        </div>
      </div>

      <Button 
        className="w-full mt-8 bg-purple-600 text-white"
        onClick={() => router.push('/flashcards/study')}
      >
        Start Studying
      </Button>
    </div>
  );
}