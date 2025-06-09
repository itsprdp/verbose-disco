import { MalayalamWord } from '../types';
import { expandedVocabulary } from './expandedVocabulary';
import { commonPhrases } from './commonPhrases';
import { culturalContent } from './culturalContent';

export const originalBasicWords: MalayalamWord[] = [
  {
    id: 'w1',
    malayalam: 'അമ്മ',
    transliteration: 'amma',
    english: 'mother',
    category: 'family',
    difficulty: 'beginner'
  },
  {
    id: 'w2',
    malayalam: 'അച്ഛൻ',
    transliteration: 'achchan',
    english: 'father',
    category: 'family',
    difficulty: 'beginner'
  },
  {
    id: 'w3',
    malayalam: 'വീട്',
    transliteration: 'veed',
    english: 'house',
    category: 'places',
    difficulty: 'beginner'
  },
  {
    id: 'w4',
    malayalam: 'പാൽ',
    transliteration: 'paal',
    english: 'milk',
    category: 'food',
    difficulty: 'beginner'
  },
  {
    id: 'w5',
    malayalam: 'വെള്ളം',
    transliteration: 'vellam',
    english: 'water',
    category: 'food',
    difficulty: 'beginner'
  },
  {
    id: 'w6',
    malayalam: 'ചോറ്',
    transliteration: 'choru',
    english: 'rice',
    category: 'food',
    difficulty: 'beginner'
  },
  {
    id: 'w7',
    malayalam: 'മീൻ',
    transliteration: 'meen',
    english: 'fish',
    category: 'food',
    difficulty: 'beginner'
  },
  {
    id: 'w8',
    malayalam: 'പുസ്തകം',
    transliteration: 'pusthakam',
    english: 'book',
    category: 'objects',
    difficulty: 'beginner'
  },
  {
    id: 'w9',
    malayalam: 'കാർ',
    transliteration: 'kaar',
    english: 'car',
    category: 'vehicles',
    difficulty: 'beginner'
  },
  {
    id: 'w10',
    malayalam: 'സ്കൂൾ',
    transliteration: 'school',
    english: 'school',
    category: 'places',
    difficulty: 'beginner'
  }
];

// Combine all vocabulary
export const basicWords = [...originalBasicWords, ...expandedVocabulary, ...commonPhrases, ...culturalContent];

// Helper function to get words by category
export const getWordsByCategory = (category: string): MalayalamWord[] => {
  return basicWords.filter(word => word.category === category);
};

// All available categories
export const availableCategories = [
  'family', 'food', 'places', 'objects', 'vehicles', 'colors', 'body', 'animals', 
  'fruits', 'vegetables', 'nature', 'clothing', 'emotions', 'weather', 'transport', 
  'time', 'greetings', 'polite', 'questions', 'responses', 'feelings', 'activities', 
  'directions', 'shopping', 'festivals', 'cuisine', 'art', 'geography', 'sport'
];

// Organized by category for easy access
export const wordsByCategory = {
  family: getWordsByCategory('family'),
  food: getWordsByCategory('food'),
  places: getWordsByCategory('places'),
  objects: getWordsByCategory('objects'),
  vehicles: getWordsByCategory('vehicles'),
  colors: getWordsByCategory('colors'),
  body: getWordsByCategory('body'),
  animals: getWordsByCategory('animals'),
  fruits: getWordsByCategory('fruits'),
  vegetables: getWordsByCategory('vegetables'),
  nature: getWordsByCategory('nature'),
  clothing: getWordsByCategory('clothing'),
  emotions: getWordsByCategory('emotions'),
  weather: getWordsByCategory('weather'),
  transport: getWordsByCategory('transport'),
  time: getWordsByCategory('time'),
  greetings: getWordsByCategory('greetings'),
  polite: getWordsByCategory('polite'),
  questions: getWordsByCategory('questions'),
  responses: getWordsByCategory('responses'),
  feelings: getWordsByCategory('feelings'),
  activities: getWordsByCategory('activities'),
  directions: getWordsByCategory('directions'),
  shopping: getWordsByCategory('shopping'),
  festivals: getWordsByCategory('festivals'),
  cuisine: getWordsByCategory('cuisine'),
  art: getWordsByCategory('art'),
  geography: getWordsByCategory('geography'),
  sport: getWordsByCategory('sport'),
};