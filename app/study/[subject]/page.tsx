'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { mockStudySections } from '@/data/mockData';

export default function StudySubjectPage({ params }: { params: { subject: string } }) {
  const [selectedSubsections, setSelectedSubsections] = useState<string[]>([]);
  const [selectedStudyOption, setSelectedStudyOption] = useState<string>("all-cards");
  const [selectedNoOfCards, setSelectedNoOfCards] = useState<number>(0);
  const router = useRouter();
  
  const handleSubsectionToggle = (id: string) => {
    setSelectedNoOfCards(prev => prev + 1);
    setSelectedSubsections(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="px-4 py-3 border-b flex items-center justify-between">
        <div className="flex items-center">
          <button className="mr-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h1 className="text-lg font-medium">Cardiovascular Disorders</h1>
        </div>
        <button>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/>
            <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" fill="currentColor"/>
            <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" fill="currentColor"/>
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-auto">
        {/* Overview Section */}
        <div className="px-4 pt-5 pb-4">
          <h2 className="text-xl font-medium mb-4">Overview</h2>
          <div className="flex border-b pb-6">
            <div className="flex-1 flex flex-col items-center">
              <span className="text-3xl font-bold">32</span>
              <span className="text-sm text-gray-600">Learnt</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <span className="text-3xl font-bold text-orange-500">21</span>
              <span className="text-sm text-gray-600">Skipped</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <span className="text-3xl font-bold text-green-600">11</span>
              <span className="text-sm text-gray-600">Knew</span>
            </div>
          </div>
        </div>

        {/* Study Using Section */}
        <div className="px-4 py-4 border-b">
          <h2 className="text-xl font-medium mb-4">Study Using</h2>
          <div className="flex gap-2 mb-2">
            <button 
              className="flex-1 py-3 px-4 rounded-full text-sm bg-purple-100 text-purple-700 border border-purple-300"
            >
              All Cards (20)
            </button>
            <button 
              className="flex-1 py-3 px-4 rounded-full text-sm bg-gray-100 border border-gray-200"
            >
              Question Bank (7)
            </button>
            <button 
              className="flex-1 py-3 px-4 rounded-full text-sm bg-gray-100 border border-gray-200"
            >
              Custom Cards
            </button>
          </div>
        </div>

        {/* Systems Section */}
        <div className="px-4 py-4">
          <h2 className="text-xl font-medium mb-4">Systems</h2>
          <div className="space-y-4">
            {mockStudySections && mockStudySections[0]?.subsections.map((subsection) => (
              <div 
                key={subsection.id}
                className="flex justify-between items-center"
                onClick={() => handleSubsectionToggle(subsection.id)}
              >
                <span>{subsection.title}</span>
                <div 
                  className={`h-6 w-6 border ${selectedSubsections.includes(subsection.id) ? 'bg-purple-600 border-purple-600' : 'border-gray-300'} rounded`}
                ></div>
              </div>
            ))}
            <div className="flex justify-between items-center">
              <span>All (20)</span>
              <div className="h-6 w-6 border border-gray-300 rounded"></div>
            </div>
            <div className="flex justify-between items-center">
              <span>Anatomy (10)</span>
              <div className="h-6 w-6 border border-gray-300 rounded"></div>
            </div>
            <div className="flex justify-between items-center">
              <span>Behavioral Science (4)</span>
              <div className="h-6 w-6 border border-gray-300 rounded"></div>
            </div>
            <div className="flex justify-between items-center">
              <span>Anatomy (8)</span>
              <div className="h-6 w-6 border border-gray-300 rounded"></div>
            </div>
            <div className="flex justify-between items-center">
              <span>Biochemitry (8)</span>
              <div className="h-6 w-6 border border-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-2 border-t">
        <div className="text-center py-2 text-base text-medium text-black">
          System: 0 · Selected Card: {selectedNoOfCards}
        </div>
        <Button 
          className="w-full py-3 rounded-md font-medium"
          onClick={() => router.push('/study/settings')}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
}