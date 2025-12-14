export type TestLevel = "elementary" | "pre-intermediate" | "intermediate" | "advanced";

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // index of correct answer (0-based)
  section: "grammar" | "reading" | "listening";
}

export interface ReadingPassage {
  text: string;
  questions: Question[];
}

export interface ListeningAudio {
  url: string;
  transcript?: string;
  questions: Question[];
}

export interface TestData {
  level: TestLevel;
  grammar: Question[];
  reading: ReadingPassage;
  listening: ListeningAudio;
}

export interface TestAnswers {
  grammar: { [questionId: string]: number };
  reading: { [questionId: string]: number };
  listening: { [questionId: string]: number };
}

export interface TestResults {
  studentName: string;
  phone: string;
  testLevel: TestLevel;
  grammarScore: number;
  grammarTotal: number;
  readingScore: number;
  readingTotal: number;
  listeningScore: number;
  listeningTotal: number;
  totalScore: number;
  totalPossible: number;
  percentage: number;
  determinedLevel: string;
  switchedLevel: boolean;
  timeSpent: number;
}


