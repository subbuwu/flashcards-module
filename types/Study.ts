export interface StudySection {
    id: string;
    title: string;
    subsections: StudySubsection[];
  }
  
  export interface StudySubsection {
    id: string;
    title: string;
    selected?: boolean;
    cards: number;
  }