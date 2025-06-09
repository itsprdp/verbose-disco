import { MalayalamLetter } from '../types';

export interface EnhancedMalayalamLetter extends MalayalamLetter {
  pronunciation: string;
  examples: Array<{
    word: string;
    transliteration: string;
    english: string;
  }>;
  formationSteps: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: 'vowel' | 'consonant' | 'number' | 'conjunct';
  description: string;
}

export const enhancedVowels: EnhancedMalayalamLetter[] = [
  {
    id: 'v1',
    malayalam: 'അ',
    transliteration: 'a',
    type: 'vowel',
    pronunciation: 'Short "a" sound like in "but"',
    difficulty: 'beginner',
    category: 'vowel',
    description: 'The first vowel in Malayalam, fundamental to the script',
    examples: [
      { word: 'അമ്മ', transliteration: 'amma', english: 'mother' },
      { word: 'അച്ഛൻ', transliteration: 'achchan', english: 'father' },
      { word: 'അവൻ', transliteration: 'avan', english: 'he' }
    ],
    formationSteps: [
      'Start with a curved line from top',
      'Add a horizontal line in the middle',
      'Complete with a small curve at the bottom'
    ]
  },
  {
    id: 'v2',
    malayalam: 'ആ',
    transliteration: 'aa',
    type: 'vowel',
    pronunciation: 'Long "aa" sound like in "father"',
    difficulty: 'beginner',
    category: 'vowel',
    description: 'Long vowel form of അ, extends the "a" sound',
    examples: [
      { word: 'ആകാശം', transliteration: 'aakaasham', english: 'sky' },
      { word: 'ആന', transliteration: 'aana', english: 'elephant' },
      { word: 'ആപ്പിൾ', transliteration: 'apple', english: 'apple' }
    ],
    formationSteps: [
      'Start with the അ shape',
      'Add a vertical line on the right',
      'Connect with a small horizontal stroke'
    ]
  },
  {
    id: 'v3',
    malayalam: 'ഇ',
    transliteration: 'i',
    type: 'vowel',
    pronunciation: 'Short "i" sound like in "bit"',
    difficulty: 'beginner',
    category: 'vowel',
    description: 'Short vowel, common in many Malayalam words',
    examples: [
      { word: 'ഇത്', transliteration: 'ithu', english: 'this' },
      { word: 'ഇവിടെ', transliteration: 'ivide', english: 'here' },
      { word: 'ഇല', transliteration: 'ila', english: 'leaf' }
    ],
    formationSteps: [
      'Draw a curved line like a backwards C',
      'Add a small hook at the top',
      'Complete with a dot or small line'
    ]
  },
  {
    id: 'v4',
    malayalam: 'ഈ',
    transliteration: 'ii',
    type: 'vowel',
    pronunciation: 'Long "ee" sound like in "see"',
    difficulty: 'beginner',
    category: 'vowel',
    description: 'Long form of ഇ, extends the "i" sound',
    examples: [
      { word: 'ഈ', transliteration: 'ee', english: 'this (feminine)' },
      { word: 'ഈശ്വരൻ', transliteration: 'eeshwaran', english: 'God' },
      { word: 'നീ', transliteration: 'nee', english: 'you' }
    ],
    formationSteps: [
      'Start with the ഇ shape',
      'Extend the curved line',
      'Add the length marker'
    ]
  },
  {
    id: 'v5',
    malayalam: 'ഉ',
    transliteration: 'u',
    type: 'vowel',
    pronunciation: 'Short "u" sound like in "put"',
    difficulty: 'beginner',
    category: 'vowel',
    description: 'Short back vowel, rounded lip position',
    examples: [
      { word: 'ഉമ്മ', transliteration: 'umma', english: 'kiss' },
      { word: 'ഉള്ളി', transliteration: 'ulli', english: 'onion' },
      { word: 'ഉണ്ട്', transliteration: 'undu', english: 'there is' }
    ],
    formationSteps: [
      'Draw a small circle',
      'Add a tail going down',
      'Connect smoothly'
    ]
  },
  {
    id: 'v6',
    malayalam: 'ഊ',
    transliteration: 'uu',
    type: 'vowel',
    pronunciation: 'Long "oo" sound like in "boot"',
    difficulty: 'beginner',
    category: 'vowel',
    description: 'Long form of ഉ, extends the "u" sound',
    examples: [
      { word: 'ഊഞ്ഞാൽ', transliteration: 'onjaal', english: 'swing' },
      { word: 'ഊർജ്ജം', transliteration: 'oorjjam', english: 'energy' },
      { word: 'പൂ', transliteration: 'poo', english: 'flower' }
    ],
    formationSteps: [
      'Start with ഉ shape',
      'Extend the tail',
      'Add length indicator'
    ]
  },
  {
    id: 'v7',
    malayalam: 'ഋ',
    transliteration: 'ru',
    type: 'vowel',
    pronunciation: 'Vocalic "r" sound',
    difficulty: 'advanced',
    category: 'vowel',
    description: 'Sanskrit-derived vowel, less common in modern Malayalam',
    examples: [
      { word: 'ഋതു', transliteration: 'ruthu', english: 'season' },
      { word: 'ഋഷി', transliteration: 'rushi', english: 'sage' }
    ],
    formationSteps: [
      'Draw a curved top',
      'Add vertical line',
      'Complete with bottom curve'
    ]
  },
  {
    id: 'v8',
    malayalam: 'എ',
    transliteration: 'e',
    type: 'vowel',
    pronunciation: 'Short "e" sound like in "bet"',
    difficulty: 'beginner',
    category: 'vowel',
    description: 'Mid front vowel, very common in Malayalam',
    examples: [
      { word: 'എന്ത്', transliteration: 'enthu', english: 'what' },
      { word: 'എവിടെ', transliteration: 'evide', english: 'where' },
      { word: 'എഴുത്ത്', transliteration: 'ezhuthu', english: 'writing' }
    ],
    formationSteps: [
      'Start with horizontal line',
      'Add curved left side',
      'Complete with small hook'
    ]
  },
  {
    id: 'v9',
    malayalam: 'ഏ',
    transliteration: 'ee',
    type: 'vowel',
    pronunciation: 'Long "ay" sound like in "say"',
    difficulty: 'beginner',
    category: 'vowel',
    description: 'Long form of എ, diphthong sound',
    examples: [
      { word: 'ഏത്', transliteration: 'ethu', english: 'which' },
      { word: 'ഏകദേശം', transliteration: 'ekadesham', english: 'approximately' },
      { word: 'കേരളം', transliteration: 'keralam', english: 'Kerala' }
    ],
    formationSteps: [
      'Start with എ shape',
      'Extend the horizontal line',
      'Add length marker'
    ]
  },
  {
    id: 'v10',
    malayalam: 'ഐ',
    transliteration: 'ai',
    type: 'vowel',
    pronunciation: 'Diphthong "ai" sound like in "eye"',
    difficulty: 'intermediate',
    category: 'vowel',
    description: 'Diphthong vowel, combination of അ and ഇ sounds',
    examples: [
      { word: 'ഐസ്', transliteration: 'ice', english: 'ice' },
      { word: 'കൈ', transliteration: 'kai', english: 'hand' },
      { word: 'പൈസ', transliteration: 'paisa', english: 'money' }
    ],
    formationSteps: [
      'Draw എ shape',
      'Add small ഇ mark above',
      'Connect properly'
    ]
  },
  {
    id: 'v11',
    malayalam: 'ഒ',
    transliteration: 'o',
    type: 'vowel',
    pronunciation: 'Short "o" sound like in "pot"',
    difficulty: 'beginner',
    category: 'vowel',
    description: 'Mid back vowel, rounded lips',
    examples: [
      { word: 'ഒന്ന്', transliteration: 'onnu', english: 'one' },
      { word: 'ഒരു', transliteration: 'oru', english: 'a/an' },
      { word: 'ഒട്ടിക്കുക', transliteration: 'ottikkuka', english: 'to stick' }
    ],
    formationSteps: [
      'Draw curved top line',
      'Add left vertical line',
      'Complete with bottom curve'
    ]
  },
  {
    id: 'v12',
    malayalam: 'ഓ',
    transliteration: 'oo',
    type: 'vowel',
    pronunciation: 'Long "oh" sound like in "more"',
    difficulty: 'beginner',
    category: 'vowel',
    description: 'Long form of ഒ, extended back vowel',
    examples: [
      { word: 'ഓം', transliteration: 'om', english: 'Om (sacred sound)' },
      { word: 'ഓടുക', transliteration: 'oduka', english: 'to run' },
      { word: 'ഓർമ്മ', transliteration: 'orma', english: 'memory' }
    ],
    formationSteps: [
      'Start with ഒ shape',
      'Extend the curve',
      'Add length indicator'
    ]
  },
  {
    id: 'v13',
    malayalam: 'ഔ',
    transliteration: 'au',
    type: 'vowel',
    pronunciation: 'Diphthong "au" sound like in "how"',
    difficulty: 'intermediate',
    category: 'vowel',
    description: 'Diphthong vowel, combination of അ and ഉ sounds',
    examples: [
      { word: 'ഔഷധം', transliteration: 'aushadham', english: 'medicine' },
      { word: 'ഔദ്യോഗികം', transliteration: 'audyogikam', english: 'official' }
    ],
    formationSteps: [
      'Draw ഒ shape',
      'Add ഉ mark above',
      'Ensure proper connection'
    ]
  }
];

export const enhancedConsonants: EnhancedMalayalamLetter[] = [
  {
    id: 'c1',
    malayalam: 'ക',
    transliteration: 'ka',
    type: 'consonant',
    pronunciation: '"k" sound like in "kite"',
    difficulty: 'beginner',
    category: 'consonant',
    description: 'Voiceless velar stop, very common consonant',
    examples: [
      { word: 'കണ്ണ്', transliteration: 'kannu', english: 'eye' },
      { word: 'കൈ', transliteration: 'kai', english: 'hand' },
      { word: 'കാർ', transliteration: 'kaar', english: 'car' }
    ],
    formationSteps: [
      'Draw vertical line on left',
      'Add horizontal line at top',
      'Complete with curved right side'
    ]
  },
  {
    id: 'c2',
    malayalam: 'ഖ',
    transliteration: 'kha',
    type: 'consonant',
    pronunciation: 'Aspirated "kh" sound',
    difficulty: 'intermediate',
    category: 'consonant',
    description: 'Aspirated version of ക, less common in native words',
    examples: [
      { word: 'ഖണ്ഡം', transliteration: 'khandam', english: 'piece' },
      { word: 'ഖര്ച്ച്', transliteration: 'kharchu', english: 'expense' }
    ],
    formationSteps: [
      'Start with ക shape',
      'Add extra mark for aspiration',
      'Ensure proper spacing'
    ]
  },
  {
    id: 'c3',
    malayalam: 'ഗ',
    transliteration: 'ga',
    type: 'consonant',
    pronunciation: '"g" sound like in "gate"',
    difficulty: 'beginner',
    category: 'consonant',
    description: 'Voiced velar stop, counterpart to ക',
    examples: [
      { word: 'ഗാന', transliteration: 'gaana', english: 'song' },
      { word: 'ഗോള്', transliteration: 'gol', english: 'goal' },
      { word: 'ഗുരു', transliteration: 'guru', english: 'teacher' }
    ],
    formationSteps: [
      'Draw base similar to ക',
      'Modify the right curve',
      'Add distinguishing marks'
    ]
  },
  {
    id: 'c21',
    malayalam: 'പ',
    transliteration: 'pa',
    type: 'consonant',
    pronunciation: '"p" sound like in "pat"',
    difficulty: 'beginner',
    category: 'consonant',
    description: 'Voiceless bilabial stop, very common',
    examples: [
      { word: 'പാൽ', transliteration: 'paal', english: 'milk' },
      { word: 'പുസ്തകം', transliteration: 'pusthakam', english: 'book' },
      { word: 'പൂവ്', transliteration: 'poovu', english: 'flower' }
    ],
    formationSteps: [
      'Draw curved top line',
      'Add vertical line on left',
      'Complete with horizontal base'
    ]
  },
  {
    id: 'c25',
    malayalam: 'മ',
    transliteration: 'ma',
    type: 'consonant',
    pronunciation: '"m" sound like in "mat"',
    difficulty: 'beginner',
    category: 'consonant',
    description: 'Nasal consonant, fundamental letter in Malayalam',
    examples: [
      { word: 'മല', transliteration: 'mala', english: 'mountain' },
      { word: 'മീൻ', transliteration: 'meen', english: 'fish' },
      { word: 'മാമ്പഴം', transliteration: 'maampazham', english: 'mango' }
    ],
    formationSteps: [
      'Draw curved top section',
      'Add middle horizontal line',
      'Complete with bottom curve'
    ]
  }
  // Add more consonants as needed...
];

export const conjuncts: EnhancedMalayalamLetter[] = [
  {
    id: 'conj1',
    malayalam: 'ക്ക',
    transliteration: 'kka',
    type: 'consonant',
    pronunciation: 'Double "k" sound',
    difficulty: 'intermediate',
    category: 'conjunct',
    description: 'Conjunct consonant formed by ക + ക',
    examples: [
      { word: 'പക്കി', transliteration: 'pakki', english: 'bird' },
      { word: 'മുക്കി', transliteration: 'mukki', english: 'face' }
    ],
    formationSteps: [
      'Write first ക without vowel',
      'Combine with second ക',
      'Form conjunct shape'
    ]
  },
  {
    id: 'conj2',
    malayalam: 'ത്ത',
    transliteration: 'ttha',
    type: 'consonant',
    pronunciation: 'Double "t" sound',
    difficulty: 'intermediate',
    category: 'conjunct',
    description: 'Common conjunct in Malayalam',
    examples: [
      { word: 'പത്തു', transliteration: 'patthu', english: 'ten' },
      { word: 'മുത്ത്', transliteration: 'muthu', english: 'pearl' }
    ],
    formationSteps: [
      'Combine ത + ത',
      'Merge the forms',
      'Create unified shape'
    ]
  }
];

export const allEnhancedLetters = [...enhancedVowels, ...enhancedConsonants, ...conjuncts];