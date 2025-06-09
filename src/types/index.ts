export interface MalayalamLetter {
  id: string;
  malayalam: string;
  transliteration: string;
  type: 'vowel' | 'consonant' | 'number' | 'symbol';
  audioUrl?: string;
}

export interface MalayalamWord {
  id: string;
  malayalam: string;
  transliteration: string;
  english: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  audioUrl?: string;
}

export interface Lesson {
  id: string;
  title: string;
  titleMalayalam: string;
  titleTransliteration: string;
  type: 'letters' | 'words' | 'grammar' | 'sentences';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  content: LessonContent[];
  progress: number;
}

export interface LessonContent {
  id: string;
  type: 'flashcard' | 'matching' | 'choice' | 'typing' | 'audio';
  data: any;
}

export interface UserProgress {
  userId: string;
  completedLessons: string[];
  currentLesson: string;
  streak: number;
  totalXp: number;
  achievements: string[];
  lastStudyDate: Date;
}

export interface FlashcardData {
  malayalam: string;
  transliteration: string;
  english: string;
  audioUrl?: string;
}

export interface MatchingData {
  pairs: Array<{
    left: string;
    right: string;
    type: 'malayalam-english' | 'malayalam-transliteration';
  }>;
}

export interface ChoiceData {
  question: string;
  questionMalayalam?: string;
  questionTransliteration?: string;
  options: string[];
  correctAnswer: number;
}