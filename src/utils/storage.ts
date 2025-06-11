import AsyncStorage from '@react-native-async-storage/async-storage';

export interface UserProgress {
  completedLetters: string[];
  completedWords: string[];
  quizScores: { [key: string]: number };
  flashcardProgress: { [key: string]: number };
  lastActiveDate: string;
  totalStudyTime: number;
  achievements: string[];
  streakDays: number;
}

const STORAGE_KEYS = {
  USER_PROGRESS: '@malayalam_app_user_progress',
  SETTINGS: '@malayalam_app_settings',
} as const;

export class StorageService {
  static async saveUserProgress(progress: Partial<UserProgress>): Promise<void> {
    try {
      const existingProgress = await this.getUserProgress();
      const updatedProgress = { ...existingProgress, ...progress };
      await AsyncStorage.setItem(STORAGE_KEYS.USER_PROGRESS, JSON.stringify(updatedProgress));
    } catch (error) {
      console.error('Error saving user progress:', error);
      throw error;
    }
  }

  static async getUserProgress(): Promise<UserProgress> {
    try {
      const progressJson = await AsyncStorage.getItem(STORAGE_KEYS.USER_PROGRESS);
      if (progressJson) {
        return JSON.parse(progressJson);
      }
      return this.getDefaultProgress();
    } catch (error) {
      console.error('Error loading user progress:', error);
      return this.getDefaultProgress();
    }
  }

  static async markLetterCompleted(letterId: string): Promise<void> {
    try {
      const progress = await this.getUserProgress();
      const completedLetters = new Set(progress.completedLetters);
      completedLetters.add(letterId);
      
      await this.saveUserProgress({
        completedLetters: Array.from(completedLetters),
        lastActiveDate: new Date().toISOString(),
      });
    } catch (error) {
      console.error('Error marking letter completed:', error);
    }
  }

  static async markWordCompleted(wordId: string): Promise<void> {
    try {
      const progress = await this.getUserProgress();
      const completedWords = new Set(progress.completedWords);
      completedWords.add(wordId);
      
      await this.saveUserProgress({
        completedWords: Array.from(completedWords),
        lastActiveDate: new Date().toISOString(),
      });
    } catch (error) {
      console.error('Error marking word completed:', error);
    }
  }

  static async saveQuizScore(quizType: string, score: number): Promise<void> {
    try {
      const progress = await this.getUserProgress();
      const quizScores = { ...progress.quizScores };
      quizScores[quizType] = Math.max(quizScores[quizType] || 0, score);
      
      await this.saveUserProgress({
        quizScores,
        lastActiveDate: new Date().toISOString(),
      });
    } catch (error) {
      console.error('Error saving quiz score:', error);
    }
  }

  static async updateFlashcardProgress(cardId: string, progress: number): Promise<void> {
    try {
      const userProgress = await this.getUserProgress();
      const flashcardProgress = { ...userProgress.flashcardProgress };
      flashcardProgress[cardId] = progress;
      
      await this.saveUserProgress({
        flashcardProgress,
        lastActiveDate: new Date().toISOString(),
      });
    } catch (error) {
      console.error('Error updating flashcard progress:', error);
    }
  }

  static async updateStudyStreak(): Promise<void> {
    try {
      const progress = await this.getUserProgress();
      const today = new Date().toDateString();
      const lastActive = new Date(progress.lastActiveDate).toDateString();
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      
      let streakDays = progress.streakDays;
      
      if (lastActive === today) {
        // Already studied today, no change to streak
        return;
      } else if (lastActive === yesterday) {
        // Studied yesterday, increment streak
        streakDays += 1;
      } else {
        // Missed a day, reset streak
        streakDays = 1;
      }
      
      await this.saveUserProgress({
        streakDays,
        lastActiveDate: new Date().toISOString(),
      });
    } catch (error) {
      console.error('Error updating study streak:', error);
    }
  }

  static async clearAllProgress(): Promise<void> {
    try {
      await AsyncStorage.removeItem(STORAGE_KEYS.USER_PROGRESS);
    } catch (error) {
      console.error('Error clearing progress:', error);
    }
  }

  private static getDefaultProgress(): UserProgress {
    return {
      completedLetters: [],
      completedWords: [],
      quizScores: {},
      flashcardProgress: {},
      lastActiveDate: new Date().toISOString(),
      totalStudyTime: 0,
      achievements: [],
      streakDays: 0,
    };
  }
}