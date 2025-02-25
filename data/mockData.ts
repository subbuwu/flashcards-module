import { StudySection } from "@/types/Study";

export const mockStudySections: StudySection[] = [
  {
    id: '1',
    title: 'Cardiovascular Disorders',
    subsections: [
      { id: '1-1', title: 'Heart Anatomy (25)', cards: 25, selected: false },
      { id: '1-2', title: 'Common Disorders (15)', cards: 15, selected: false },
      { id: '1-3', title: 'Treatments (20)', cards: 20, selected: false },
      { id: '1-4', title: 'Risk Factors (10)', cards: 10, selected: false },
      { id: '1-5', title: 'Prevention (8)', cards: 8, selected: false }
    ]
  }
];

export const mockFlashcards = {
  decks: [
    {
      id: 'cardiovascular',
      title: 'Cardiovascular Disorders',
      totalCards: 24,
      currentCard: 20,
      cards: [
        {
          id: 'card-1',
          prompt: 'What are the Three Rights of medication administration?',
          answer: 'The Six Rights of Medication Administration:\n\n1. Right Patient – Verify patient identity using two identifiers (e.g., name, DOB).\n2. Right Medication – Check the medication label against the prescription.\n3. Right Dose – Confirm the correct dosage per the order.',
          type: 'question-bank',
          lastEdited: '2025-02-12',
          stats: {
            learnt: 32,
            skipped: 21,
            knew: 11
          },
          difficulty: 40
        },
        {
          id: 'card-2',
          prompt: 'Describe the main symptoms of acute myocardial infarction',
          answer: '1. Chest pain/pressure (angina)\n2. Shortness of breath\n3. Radiating pain to arm/jaw\n4. Nausea/vomiting\n5. Cold sweats',
          type: 'curated',
          stats: {
            learnt: 28,
            skipped: 15,
            knew: 18
          },
          difficulty: 35
        },
        {
          id: 'card-3',
          prompt: 'What are the major risk factors for cardiovascular disease?',
          answer: '1. Hypertension\n2. High cholesterol\n3. Smoking\n4. Obesity\n5. Physical inactivity\n6. Diabetes\n7. Age\n8. Family history',
          type: 'custom',
          lastEdited: '2025-02-10',
          stats: {
            learnt: 45,
            skipped: 12,
            knew: 25
          },
          difficulty: 25
        }
      ]
    }
  ],
  settings: {
    shuffleCards: true,
    repeatAfter: 4,
    showProgress: true,
    autoFlip: false
  }
};