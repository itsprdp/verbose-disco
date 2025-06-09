import { MalayalamWord } from '../types';

export interface CulturalNote {
  id: string;
  title: string;
  titleMalayalam: string;
  titleTransliteration: string;
  content: string;
  relatedWords: string[];
  category: 'tradition' | 'food' | 'festival' | 'custom' | 'geography';
}

export const festivals: MalayalamWord[] = [
  { id: 'fest1', malayalam: 'ഓണം', transliteration: 'onam', english: 'Onam (harvest festival)', category: 'festivals', difficulty: 'beginner' },
  { id: 'fest2', malayalam: 'വിഷു', transliteration: 'vishu', english: 'Vishu (New Year)', category: 'festivals', difficulty: 'beginner' },
  { id: 'fest3', malayalam: 'തിരുവാതിര', transliteration: 'thiruvaathira', english: 'Thiruvaathira (dance festival)', category: 'festivals', difficulty: 'intermediate' },
  { id: 'fest4', malayalam: 'നവരാത്രി', transliteration: 'navarathri', english: 'Navarathri (nine nights festival)', category: 'festivals', difficulty: 'intermediate' },
];

export const keralaCuisine: MalayalamWord[] = [
  { id: 'food1', malayalam: 'സദ്യ', transliteration: 'sadhya', english: 'traditional feast', category: 'cuisine', difficulty: 'intermediate' },
  { id: 'food2', malayalam: 'അപ്പം', transliteration: 'appam', english: 'rice pancake', category: 'cuisine', difficulty: 'beginner' },
  { id: 'food3', malayalam: 'പുട്ട്', transliteration: 'puttu', english: 'steamed rice cake', category: 'cuisine', difficulty: 'beginner' },
  { id: 'food4', malayalam: 'സാമ്പാർ', transliteration: 'saambaar', english: 'lentil curry', category: 'cuisine', difficulty: 'beginner' },
  { id: 'food5', malayalam: 'റസം', transliteration: 'rasam', english: 'spiced tamarind soup', category: 'cuisine', difficulty: 'beginner' },
  { id: 'food6', malayalam: 'പായസം', transliteration: 'paayasam', english: 'sweet pudding', category: 'cuisine', difficulty: 'intermediate' },
  { id: 'food7', malayalam: 'കറി', transliteration: 'kari', english: 'curry', category: 'cuisine', difficulty: 'beginner' },
  { id: 'food8', malayalam: 'തോരൻ', transliteration: 'thoran', english: 'stir-fried vegetables with coconut', category: 'cuisine', difficulty: 'intermediate' },
];

export const traditionalItems: MalayalamWord[] = [
  { id: 'trad1', malayalam: 'കത്തകളി', transliteration: 'kathakali', english: 'traditional dance-drama', category: 'art', difficulty: 'intermediate' },
  { id: 'trad2', malayalam: 'മോഹിനിയാട്ടം', transliteration: 'mohiniyaattam', english: 'classical dance form', category: 'art', difficulty: 'advanced' },
  { id: 'trad3', malayalam: 'തേയ്യം', transliteration: 'theyyam', english: 'ritual art form', category: 'art', difficulty: 'intermediate' },
  { id: 'trad4', malayalam: 'ഹൗസ്ബോട്ട്', transliteration: 'houseboat', english: 'kettuvallam (houseboat)', category: 'transport', difficulty: 'intermediate' },
  { id: 'trad5', malayalam: 'കളരിപ്പയറ്റ്', transliteration: 'kalaripayattu', english: 'martial art', category: 'sport', difficulty: 'advanced' },
];

export const geography: MalayalamWord[] = [
  { id: 'geo1', malayalam: 'കേരളം', transliteration: 'keralam', english: 'Kerala', category: 'geography', difficulty: 'beginner' },
  { id: 'geo2', malayalam: 'കായൽ', transliteration: 'kaayal', english: 'backwaters', category: 'geography', difficulty: 'intermediate' },
  { id: 'geo3', malayalam: 'പർവ്വതം', transliteration: 'parvvatham', english: 'mountain', category: 'geography', difficulty: 'intermediate' },
  { id: 'geo4', malayalam: 'കര', transliteration: 'kara', english: 'shore/coast', category: 'geography', difficulty: 'beginner' },
  { id: 'geo5', malayalam: 'എടം', transliteration: 'edam', english: 'highlands', category: 'geography', difficulty: 'intermediate' },
];

export const culturalNotes: CulturalNote[] = [
  {
    id: 'note1',
    title: 'The Significance of Onam',
    titleMalayalam: 'ഓണത്തിന്റെ പ്രാധാന്യം',
    titleTransliteration: 'onatthinte praadhanyam',
    content: 'Onam is Kerala\'s most important festival, celebrating the homecoming of King Mahabali. It represents unity, prosperity, and the golden age of Kerala. People create flower carpets called "pookalam" and enjoy a grand feast called "sadhya".',
    relatedWords: ['ഓണം', 'സദ്യ', 'പൂക്കളം', 'മാവേലി'],
    category: 'festival'
  },
  {
    id: 'note2',
    title: 'Kerala Backwaters',
    titleMalayalam: 'കേരള കായലുകൾ',
    titleTransliteration: 'kerala kaayalukal',
    content: 'The backwaters of Kerala are a network of interconnected canals, rivers, lakes and inlets. They are a unique ecosystem and a major tourist attraction, especially for houseboat cruises.',
    relatedWords: ['കായൽ', 'ഹൗസ്ബോട്ട്', 'കനാൽ', 'നദി'],
    category: 'geography'
  },
  {
    id: 'note3',
    title: 'Malayalam Literature',
    titleMalayalam: 'മലയാളം സാഹിത്യം',
    titleTransliteration: 'malayaalam saahithyam',
    content: 'Malayalam has a rich literary tradition dating back to the 12th century. It has produced many renowned poets and writers, and Malayalam cinema is one of the most acclaimed in India.',
    relatedWords: ['സാഹിത്യം', 'കവിത', 'നോവൽ', 'സിനിമ'],
    category: 'tradition'
  }
];

export const culturalContent = [
  ...festivals,
  ...keralaCuisine,
  ...traditionalItems,
  ...geography,
];