import React, { createContext, useContext, useEffect, useState } from 'react';
import { StorageService, UserProgress } from '../utils/storage';

interface ProgressContextType {
  progress: UserProgress;
  loading: boolean;
  markLetterCompleted: (letterId: string) => Promise<void>;
  markWordCompleted: (wordId: string) => Promise<void>;
  saveQuizScore: (quizType: string, score: number) => Promise<void>;
  updateFlashcardProgress: (cardId: string, progress: number) => Promise<void>;
  isLetterCompleted: (letterId: string) => boolean;
  isWordCompleted: (wordId: string) => boolean;
  refreshProgress: () => Promise<void>;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

interface ProgressProviderProps {
  children: React.ReactNode;
}

export const ProgressProvider: React.FC<ProgressProviderProps> = ({ children }) => {
  const [progress, setProgress] = useState<UserProgress>({
    completedLetters: [],
    completedWords: [],
    quizScores: {},
    flashcardProgress: {},
    lastActiveDate: new Date().toISOString(),
    totalStudyTime: 0,
    achievements: [],
    streakDays: 0,
  });
  const [loading, setLoading] = useState(true);

  const loadProgress = async () => {
    try {
      setLoading(true);
      const userProgress = await StorageService.getUserProgress();
      setProgress(userProgress);
      await StorageService.updateStudyStreak();
    } catch (error) {
      console.error('Error loading progress:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProgress();
  }, []);

  const markLetterCompleted = async (letterId: string) => {
    try {
      await StorageService.markLetterCompleted(letterId);
      const updatedProgress = await StorageService.getUserProgress();
      setProgress(updatedProgress);
    } catch (error) {
      console.error('Error marking letter completed:', error);
    }
  };

  const markWordCompleted = async (wordId: string) => {
    try {
      await StorageService.markWordCompleted(wordId);
      const updatedProgress = await StorageService.getUserProgress();
      setProgress(updatedProgress);
    } catch (error) {
      console.error('Error marking word completed:', error);
    }
  };

  const saveQuizScore = async (quizType: string, score: number) => {
    try {
      await StorageService.saveQuizScore(quizType, score);
      const updatedProgress = await StorageService.getUserProgress();
      setProgress(updatedProgress);
    } catch (error) {
      console.error('Error saving quiz score:', error);
    }
  };

  const updateFlashcardProgress = async (cardId: string, progressValue: number) => {
    try {
      await StorageService.updateFlashcardProgress(cardId, progressValue);
      const updatedProgress = await StorageService.getUserProgress();
      setProgress(updatedProgress);
    } catch (error) {
      console.error('Error updating flashcard progress:', error);
    }
  };

  const isLetterCompleted = (letterId: string): boolean => {
    return progress.completedLetters.includes(letterId);
  };

  const isWordCompleted = (wordId: string): boolean => {
    return progress.completedWords.includes(wordId);
  };

  const refreshProgress = async () => {
    await loadProgress();
  };

  const contextValue: ProgressContextType = {
    progress,
    loading,
    markLetterCompleted,
    markWordCompleted,
    saveQuizScore,
    updateFlashcardProgress,
    isLetterCompleted,
    isWordCompleted,
    refreshProgress,
  };

  return (
    <ProgressContext.Provider value={contextValue}>
      {children}
    </ProgressContext.Provider>
  );
};