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
  category: 'vowel' | 'consonant' | 'number' | 'conjunct' | 'symbol';
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
  },
  {
    id: 'c4',
    malayalam: 'ഘ',
    transliteration: 'gha',
    type: 'consonant',
    pronunciation: 'Aspirated "gh" sound',
    difficulty: 'intermediate',
    category: 'consonant',
    description: 'Aspirated version of ഗ, used in borrowed words',
    examples: [
      { word: 'ഘടന', transliteration: 'ghadana', english: 'structure' },
      { word: 'ഘോഷം', transliteration: 'ghosham', english: 'noise' }
    ],
    formationSteps: [
      'Start with ഗ base',
      'Add aspiration mark',
      'Complete the form'
    ]
  },
  {
    id: 'c5',
    malayalam: 'ങ',
    transliteration: 'nga',
    type: 'consonant',
    pronunciation: 'Nasal "ng" sound like in "sing"',
    difficulty: 'intermediate',
    category: 'consonant',
    description: 'Velar nasal, appears in conjuncts and word endings',
    examples: [
      { word: 'മങ്ങ', transliteration: 'manga', english: 'dim' },
      { word: 'രംഗം', transliteration: 'rangam', english: 'stage' }
    ],
    formationSteps: [
      'Draw curved top',
      'Add vertical line',
      'Complete with bottom loop'
    ]
  },
  {
    id: 'c6',
    malayalam: 'ച',
    transliteration: 'cha',
    type: 'consonant',
    pronunciation: '"ch" sound like in "chair"',
    difficulty: 'beginner',
    category: 'consonant',
    description: 'Voiceless palatal affricate, common consonant',
    examples: [
      { word: 'ചായ', transliteration: 'chaaya', english: 'tea' },
      { word: 'ചന്ദ്രൻ', transliteration: 'chandran', english: 'moon' },
      { word: 'ചെറിയ', transliteration: 'cheriya', english: 'small' }
    ],
    formationSteps: [
      'Draw horizontal top line',
      'Add curved left side',
      'Complete with vertical right'
    ]
  },
  {
    id: 'c7',
    malayalam: 'ഛ',
    transliteration: 'chha',
    type: 'consonant',
    pronunciation: 'Aspirated "chh" sound',
    difficulty: 'intermediate',
    category: 'consonant',
    description: 'Aspirated version of ച, mainly in Sanskrit words',
    examples: [
      { word: 'ഛത്രം', transliteration: 'chhatram', english: 'umbrella' },
      { word: 'ഛായ', transliteration: 'chhaaya', english: 'shadow' }
    ],
    formationSteps: [
      'Start with ച shape',
      'Add aspiration marks',
      'Maintain proper spacing'
    ]
  },
  {
    id: 'c8',
    malayalam: 'ജ',
    transliteration: 'ja',
    type: 'consonant',
    pronunciation: '"j" sound like in "jump"',
    difficulty: 'beginner',
    category: 'consonant',
    description: 'Voiced palatal affricate, very common',
    examples: [
      { word: 'ജലം', transliteration: 'jalam', english: 'water' },
      { word: 'ജനം', transliteration: 'janam', english: 'people' },
      { word: 'ജീവിതം', transliteration: 'jeevitham', english: 'life' }
    ],
    formationSteps: [
      'Draw curved top section',
      'Add middle horizontal',
      'Complete with bottom curve'
    ]
  },
  {
    id: 'c9',
    malayalam: 'ഝ',
    transliteration: 'jha',
    type: 'consonant',
    pronunciation: 'Aspirated "jh" sound',
    difficulty: 'advanced',
    category: 'consonant',
    description: 'Aspirated version of ജ, rare in Malayalam',
    examples: [
      { word: 'ഝരി', transliteration: 'jhari', english: 'waterfall' }
    ],
    formationSteps: [
      'Base on ജ form',
      'Add aspiration',
      'Complete carefully'
    ]
  },
  {
    id: 'c10',
    malayalam: 'ഞ',
    transliteration: 'nya',
    type: 'consonant',
    pronunciation: 'Palatal nasal "ny" sound',
    difficulty: 'intermediate',
    category: 'consonant',
    description: 'Palatal nasal, common in conjuncts',
    examples: [
      { word: 'ഞാൻ', transliteration: 'njaan', english: 'I' },
      { word: 'വിജ്ഞാനം', transliteration: 'vijnjaanam', english: 'knowledge' }
    ],
    formationSteps: [
      'Draw distinctive top curve',
      'Add connecting line',
      'Complete the form'
    ]
  },
  {
    id: 'c11',
    malayalam: 'ട',
    transliteration: 'ta',
    type: 'consonant',
    pronunciation: 'Retroflex "t" sound',
    difficulty: 'beginner',
    category: 'consonant',
    description: 'Retroflex stop, tongue curled back',
    examples: [
      { word: 'ടാക്സി', transliteration: 'taxi', english: 'taxi' },
      { word: 'ഇട', transliteration: 'ida', english: 'left' }
    ],
    formationSteps: [
      'Draw horizontal base',
      'Add curved top',
      'Connect properly'
    ]
  },
  {
    id: 'c12',
    malayalam: 'ഠ',
    transliteration: 'tha',
    type: 'consonant',
    pronunciation: 'Aspirated retroflex "th"',
    difficulty: 'advanced',
    category: 'consonant',
    description: 'Aspirated version of ട, Sanskrit origin',
    examples: [
      { word: 'ഠാണിക്', transliteration: 'thanik', english: 'policeman' }
    ],
    formationSteps: [
      'Base on ട',
      'Add aspiration marks',
      'Maintain clarity'
    ]
  },
  {
    id: 'c13',
    malayalam: 'ഡ',
    transliteration: 'da',
    type: 'consonant',
    pronunciation: 'Retroflex "d" sound',
    difficulty: 'beginner',
    category: 'consonant',
    description: 'Voiced retroflex stop',
    examples: [
      { word: 'ഡോക്ടർ', transliteration: 'doctor', english: 'doctor' },
      { word: 'കുടം', transliteration: 'kudam', english: 'pot' }
    ],
    formationSteps: [
      'Similar to ട base',
      'Modify for voicing',
      'Complete the shape'
    ]
  },
  {
    id: 'c14',
    malayalam: 'ഢ',
    transliteration: 'dha',
    type: 'consonant',
    pronunciation: 'Aspirated retroflex "dh"',
    difficulty: 'advanced',
    category: 'consonant',
    description: 'Aspirated version of ഡ, rarely used',
    examples: [
      { word: 'ഢക്ക', transliteration: 'dhakka', english: 'drum' }
    ],
    formationSteps: [
      'Start with ഡ',
      'Add aspiration',
      'Ensure proper form'
    ]
  },
  {
    id: 'c15',
    malayalam: 'ണ',
    transliteration: 'na',
    type: 'consonant',
    pronunciation: 'Retroflex nasal "n"',
    difficulty: 'intermediate',
    category: 'consonant',
    description: 'Retroflex nasal, common in Malayalam',
    examples: [
      { word: 'കാണുക', transliteration: 'kaanuka', english: 'to see' },
      { word: 'മണ്ണ്', transliteration: 'mannu', english: 'soil' }
    ],
    formationSteps: [
      'Draw curved shape',
      'Add connecting elements',
      'Complete the nasal form'
    ]
  },
  {
    id: 'c16',
    malayalam: 'ത',
    transliteration: 'tha',
    type: 'consonant',
    pronunciation: 'Dental "th" sound',
    difficulty: 'beginner',
    category: 'consonant',
    description: 'Voiceless dental stop, very common',
    examples: [
      { word: 'തല', transliteration: 'thala', english: 'head' },
      { word: 'തീ', transliteration: 'thee', english: 'fire' },
      { word: 'തുള്ളുക', transliteration: 'thulluka', english: 'to jump' }
    ],
    formationSteps: [
      'Draw top horizontal line',
      'Add curved bottom',
      'Connect smoothly'
    ]
  },
  {
    id: 'c17',
    malayalam: 'ഥ',
    transliteration: 'thha',
    type: 'consonant',
    pronunciation: 'Aspirated dental "thh"',
    difficulty: 'advanced',
    category: 'consonant',
    description: 'Aspirated version of ത, mainly Sanskrit',
    examples: [
      { word: 'ഥീസിസ്', transliteration: 'thesis', english: 'thesis' }
    ],
    formationSteps: [
      'Base on ത shape',
      'Add aspiration mark',
      'Maintain dental position'
    ]
  },
  {
    id: 'c18',
    malayalam: 'ദ',
    transliteration: 'da',
    type: 'consonant',
    pronunciation: 'Dental "d" sound',
    difficulty: 'beginner',
    category: 'consonant',
    description: 'Voiced dental stop, common consonant',
    examples: [
      { word: 'ദിവസം', transliteration: 'divasam', english: 'day' },
      { word: 'വാദം', transliteration: 'vaadam', english: 'argument' }
    ],
    formationSteps: [
      'Similar to ത base',
      'Modify for voicing',
      'Complete dental form'
    ]
  },
  {
    id: 'c19',
    malayalam: 'ധ',
    transliteration: 'dha',
    type: 'consonant',
    pronunciation: 'Aspirated dental "dh"',
    difficulty: 'intermediate',
    category: 'consonant',
    description: 'Aspirated version of ദ',
    examples: [
      { word: 'ധനം', transliteration: 'dhanam', english: 'wealth' },
      { word: 'വധം', transliteration: 'vadham', english: 'killing' }
    ],
    formationSteps: [
      'Start with ദ',
      'Add aspiration',
      'Maintain dental quality'
    ]
  },
  {
    id: 'c20',
    malayalam: 'ന',
    transliteration: 'na',
    type: 'consonant',
    pronunciation: 'Dental nasal "n"',
    difficulty: 'beginner',
    category: 'consonant',
    description: 'Dental nasal, extremely common',
    examples: [
      { word: 'നാല്', transliteration: 'naal', english: 'four' },
      { word: 'മനസ്സ്', transliteration: 'manassu', english: 'mind' },
      { word: 'വൻ', transliteration: 'van', english: 'big' }
    ],
    formationSteps: [
      'Draw curved top',
      'Add vertical line',
      'Complete nasal form'
    ]
  },
  {
    id: 'c22',
    malayalam: 'ഫ',
    transliteration: 'pha',
    type: 'consonant',
    pronunciation: 'Aspirated "ph" or "f" sound',
    difficulty: 'intermediate',
    category: 'consonant',
    description: 'Aspirated bilabial or labiodental',
    examples: [
      { word: 'ഫോൺ', transliteration: 'phone', english: 'phone' },
      { word: 'കഫം', transliteration: 'kapham', english: 'phlegm' }
    ],
    formationSteps: [
      'Base similar to പ',
      'Add aspiration mark',
      'Distinguish from പ'
    ]
  },
  {
    id: 'c23',
    malayalam: 'ബ',
    transliteration: 'ba',
    type: 'consonant',
    pronunciation: '"b" sound like in "bat"',
    difficulty: 'beginner',
    category: 'consonant',
    description: 'Voiced bilabial stop, common consonant',
    examples: [
      { word: 'ബസ്', transliteration: 'bus', english: 'bus' },
      { word: 'കബാബ്', transliteration: 'kabab', english: 'kebab' },
      { word: 'രാബി', transliteration: 'rabi', english: 'rabbi' }
    ],
    formationSteps: [
      'Similar to പ structure',
      'Modify for voicing',
      'Complete bilabial form'
    ]
  },
  {
    id: 'c24',
    malayalam: 'ഭ',
    transliteration: 'bha',
    type: 'consonant',
    pronunciation: 'Aspirated "bh" sound',
    difficulty: 'intermediate',
    category: 'consonant',
    description: 'Aspirated version of ബ',
    examples: [
      { word: 'ഭാരം', transliteration: 'bhaaram', english: 'weight' },
      { word: 'ഭയം', transliteration: 'bhayam', english: 'fear' }
    ],
    formationSteps: [
      'Start with ബ base',
      'Add aspiration mark',
      'Maintain bilabial nature'
    ]
  },
  {
    id: 'c26',
    malayalam: 'യ',
    transliteration: 'ya',
    type: 'consonant',
    pronunciation: '"y" sound like in "yes"',
    difficulty: 'beginner',
    category: 'consonant',
    description: 'Palatal approximant, semi-vowel',
    examples: [
      { word: 'യജ്ഞം', transliteration: 'yajnjam', english: 'sacrifice' },
      { word: 'കായം', transliteration: 'kaayam', english: 'body' }
    ],
    formationSteps: [
      'Draw distinctive Y-like shape',
      'Add connecting elements',
      'Complete approximant form'
    ]
  },
  {
    id: 'c27',
    malayalam: 'ര',
    transliteration: 'ra',
    type: 'consonant',
    pronunciation: '"r" sound, slightly rolled',
    difficulty: 'beginner',
    category: 'consonant',
    description: 'Alveolar trill/tap, very common',
    examples: [
      { word: 'രാജാവ്', transliteration: 'raajaavu', english: 'king' },
      { word: 'കാര്', transliteration: 'kaar', english: 'car' },
      { word: 'പോര്', transliteration: 'por', english: 'go' }
    ],
    formationSteps: [
      'Draw curved main body',
      'Add characteristic hook',
      'Complete trill form'
    ]
  },
  {
    id: 'c28',
    malayalam: 'ല',
    transliteration: 'la',
    type: 'consonant',
    pronunciation: '"l" sound like in "love"',
    difficulty: 'beginner',
    category: 'consonant',
    description: 'Lateral approximant, dental/alveolar',
    examples: [
      { word: 'ലാലിത്യം', transliteration: 'laalithyam', english: 'beauty' },
      { word: 'കലാം', transliteration: 'kalaam', english: 'art' }
    ],
    formationSteps: [
      'Draw curved shape',
      'Add lateral elements',
      'Complete approximant'
    ]
  },
  {
    id: 'c29',
    malayalam: 'വ',
    transliteration: 'va',
    type: 'consonant',
    pronunciation: '"v" or "w" sound',
    difficulty: 'beginner',
    category: 'consonant',
    description: 'Labiodental approximant, common',
    examples: [
      { word: 'വാഴ', transliteration: 'vaazha', english: 'banana' },
      { word: 'വീട്', transliteration: 'veedu', english: 'house' },
      { word: 'കവിത', transliteration: 'kavitha', english: 'poem' }
    ],
    formationSteps: [
      'Draw main curved body',
      'Add characteristic marks',
      'Complete approximant form'
    ]
  },
  {
    id: 'c30',
    malayalam: 'ശ',
    transliteration: 'sha',
    type: 'consonant',
    pronunciation: 'Palatal "sh" sound',
    difficulty: 'intermediate',
    category: 'consonant',
    description: 'Voiceless palatal fricative',
    examples: [
      { word: 'ശാന്തി', transliteration: 'shaanthi', english: 'peace' },
      { word: 'മീശ', transliteration: 'meesha', english: 'mustache' }
    ],
    formationSteps: [
      'Draw complex curved form',
      'Add palatal elements',
      'Complete fricative shape'
    ]
  },
  {
    id: 'c31',
    malayalam: 'ഷ',
    transliteration: 'sha',
    type: 'consonant',
    pronunciation: 'Retroflex "sh" sound',
    difficulty: 'intermediate',
    category: 'consonant',
    description: 'Voiceless retroflex fricative',
    examples: [
      { word: 'ഷർട്ട്', transliteration: 'shirt', english: 'shirt' },
      { word: 'കുഷ്ഠം', transliteration: 'kushtam', english: 'leprosy' }
    ],
    formationSteps: [
      'Similar to ശ base',
      'Modify for retroflex',
      'Complete fricative form'
    ]
  },
  {
    id: 'c32',
    malayalam: 'സ',
    transliteration: 'sa',
    type: 'consonant',
    pronunciation: '"s" sound like in "sun"',
    difficulty: 'beginner',
    category: 'consonant',
    description: 'Voiceless dental/alveolar fricative',
    examples: [
      { word: 'സൂര്യൻ', transliteration: 'sooryan', english: 'sun' },
      { word: 'കുസുമം', transliteration: 'kusumam', english: 'flower' }
    ],
    formationSteps: [
      'Draw curved main form',
      'Add fricative elements',
      'Complete dental shape'
    ]
  },
  {
    id: 'c33',
    malayalam: 'ഹ',
    transliteration: 'ha',
    type: 'consonant',
    pronunciation: '"h" sound like in "hat"',
    difficulty: 'beginner',
    category: 'consonant',
    description: 'Voiceless glottal fricative',
    examples: [
      { word: 'ഹരി', transliteration: 'hari', english: 'Hari (name)' },
      { word: 'വഹിക്കുക', transliteration: 'vahikkuka', english: 'to carry' }
    ],
    formationSteps: [
      'Draw distinctive shape',
      'Add glottal elements',
      'Complete fricative form'
    ]
  },
  {
    id: 'c34',
    malayalam: 'ള',
    transliteration: 'la',
    type: 'consonant',
    pronunciation: 'Retroflex "l" sound',
    difficulty: 'intermediate',
    category: 'consonant',
    description: 'Retroflex lateral approximant, unique to Malayalam',
    examples: [
      { word: 'മലയാളം', transliteration: 'malayaalam', english: 'Malayalam' },
      { word: 'കേരളം', transliteration: 'keralam', english: 'Kerala' }
    ],
    formationSteps: [
      'Draw characteristic loop',
      'Add retroflex elements',
      'Complete lateral form'
    ]
  },
  {
    id: 'c35',
    malayalam: 'ഴ',
    transliteration: 'zha',
    type: 'consonant',
    pronunciation: 'Retroflex approximant, unique sound',
    difficulty: 'advanced',
    category: 'consonant',
    description: 'Unique Malayalam retroflex approximant',
    examples: [
      { word: 'പഴം', transliteration: 'pazham', english: 'fruit' },
      { word: 'നിഴൽ', transliteration: 'nizhal', english: 'shadow' }
    ],
    formationSteps: [
      'Draw complex form',
      'Add unique elements',
      'Complete special sound'
    ]
  },
  {
    id: 'c36',
    malayalam: 'റ',
    transliteration: 'ra',
    type: 'consonant',
    pronunciation: 'Alveolar trill, hard "r"',
    difficulty: 'intermediate',
    category: 'consonant',
    description: 'Strong alveolar trill, distinct from ര',
    examples: [
      { word: 'കാറ്', transliteration: 'kaaru', english: 'car' },
      { word: 'പുറം', transliteration: 'puram', english: 'outside' }
    ],
    formationSteps: [
      'Draw strong base',
      'Add trill elements',
      'Complete hard sound'
    ]
  }
];

// Import comprehensive Malayalam numbers from dedicated file
import { malayalamNumbers } from './malayalamNumbers';
export { malayalamNumbers } from './malayalamNumbers';

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
  },
  {
    id: 'conj3',
    malayalam: 'ന്ന',
    transliteration: 'nna',
    type: 'consonant',
    pronunciation: 'Double "n" sound',
    difficulty: 'intermediate',
    category: 'conjunct',
    description: 'Very common Malayalam conjunct',
    examples: [
      { word: 'മന്നൻ', transliteration: 'mannan', english: 'king' },
      { word: 'കന്നു', transliteration: 'kannu', english: 'calf' }
    ],
    formationSteps: [
      'Combine ന + ന',
      'Merge nasal forms',
      'Create double sound'
    ]
  },
  {
    id: 'conj4',
    malayalam: 'മ്മ',
    transliteration: 'mma',
    type: 'consonant',
    pronunciation: 'Double "m" sound',
    difficulty: 'intermediate',
    category: 'conjunct',
    description: 'Common nasal conjunct',
    examples: [
      { word: 'അമ്മ', transliteration: 'amma', english: 'mother' },
      { word: 'കമ്മി', transliteration: 'kammi', english: 'less' }
    ],
    formationSteps: [
      'Combine മ + മ',
      'Form double nasal',
      'Create unified shape'
    ]
  },
  {
    id: 'conj5',
    malayalam: 'ള്ള',
    transliteration: 'lla',
    type: 'consonant',
    pronunciation: 'Double retroflex "l"',
    difficulty: 'intermediate',
    category: 'conjunct',
    description: 'Common Malayalam retroflex conjunct',
    examples: [
      { word: 'കല്ല്', transliteration: 'kallu', english: 'stone' },
      { word: 'മല്ലി', transliteration: 'malli', english: 'jasmine' }
    ],
    formationSteps: [
      'Combine ള + ള',
      'Form double retroflex',
      'Create characteristic shape'
    ]
  },
  {
    id: 'conj6',
    malayalam: 'ര്‍',
    transliteration: 'r',
    type: 'consonant',
    pronunciation: 'Chillu "r" sound',
    difficulty: 'advanced',
    category: 'conjunct',
    description: 'Chillu letter, consonant without vowel',
    examples: [
      { word: 'കാര്‍', transliteration: 'kaar', english: 'car' },
      { word: 'വാര്‍', transliteration: 'vaar', english: 'news' }
    ],
    formationSteps: [
      'Special ര form',
      'Remove vowel marker',
      'Create chillu shape'
    ]
  },
  {
    id: 'conj7',
    malayalam: 'ന്‍',
    transliteration: 'n',
    type: 'consonant',
    pronunciation: 'Chillu "n" sound',
    difficulty: 'advanced',
    category: 'conjunct',
    description: 'Chillu letter for dental nasal',
    examples: [
      { word: 'കാന്‍', transliteration: 'kaan', english: 'to see' },
      { word: 'പെന്‍', transliteration: 'pen', english: 'pen' }
    ],
    formationSteps: [
      'Special ന form',
      'Remove vowel marker',
      'Create chillu shape'
    ]
  },
  {
    id: 'conj8',
    malayalam: 'ക്ഷ',
    transliteration: 'ksha',
    type: 'consonant',
    pronunciation: '"ksh" compound sound',
    difficulty: 'advanced',
    category: 'conjunct',
    description: 'Sanskrit-derived compound letter',
    examples: [
      { word: 'അക്ഷരം', transliteration: 'aksharam', english: 'letter' },
      { word: 'വിക്ഷേപണം', transliteration: 'vikshepaanam', english: 'launch' }
    ],
    formationSteps: [
      'Combine ക + ഷ',
      'Form compound sound',
      'Create special shape'
    ]
  },
  {
    id: 'conj9',
    malayalam: 'സ്സ',
    transliteration: 'ssa',
    type: 'consonant',
    pronunciation: 'Double "s" sound',
    difficulty: 'intermediate',
    category: 'conjunct',
    description: 'Common double consonant',
    examples: [
      { word: 'കാസ്സാൻ', transliteration: 'kaassan', english: 'gardener' },
      { word: 'റസ്സൽ', transliteration: 'russel', english: 'Russell' }
    ],
    formationSteps: [
      'Combine സ + സ',
      'Form double fricative',
      'Create unified shape'
    ]
  },
  {
    id: 'conj10',
    malayalam: 'പ്പ',
    transliteration: 'ppa',
    type: 'consonant',
    pronunciation: 'Double "p" sound',
    difficulty: 'intermediate',
    category: 'conjunct',
    description: 'Common bilabial conjunct',
    examples: [
      { word: 'അപ്പം', transliteration: 'appam', english: 'rice cake' },
      { word: 'കപ്പ', transliteration: 'kappa', english: 'tapioca' }
    ],
    formationSteps: [
      'Combine പ + പ',
      'Form double stop',
      'Create characteristic shape'
    ]
  },
  {
    id: 'conj11',
    malayalam: 'യ്യ',
    transliteration: 'yya',
    type: 'consonant',
    pronunciation: 'Double "y" sound',
    difficulty: 'intermediate',
    category: 'conjunct',
    description: 'Double approximant',
    examples: [
      { word: 'കയ്യ്', transliteration: 'kayyu', english: 'hand' },
      { word: 'പയ്യൻ', transliteration: 'payyan', english: 'boy' }
    ],
    formationSteps: [
      'Combine യ + യ',
      'Form double approximant',
      'Create flowing shape'
    ]
  },
  {
    id: 'conj12',
    malayalam: 'ജ്ഞ',
    transliteration: 'jna',
    type: 'consonant',
    pronunciation: '"gn" or "gy" sound',
    difficulty: 'advanced',
    category: 'conjunct',
    description: 'Sanskrit conjunct for knowledge',
    examples: [
      { word: 'ജ്ഞാനം', transliteration: 'jnaanam', english: 'knowledge' },
      { word: 'യജ്ഞം', transliteration: 'yajnam', english: 'sacrifice' }
    ],
    formationSteps: [
      'Combine ജ + ഞ',
      'Form special compound',
      'Create distinctive shape'
    ]
  },
  {
    id: 'conj13',
    malayalam: 'ന്ത',
    transliteration: 'ntha',
    type: 'consonant',
    pronunciation: '"nth" sound',
    difficulty: 'intermediate',
    category: 'conjunct',
    description: 'Common nasal + dental combination',
    examples: [
      { word: 'കാന്തൻ', transliteration: 'kaanthan', english: 'beloved' },
      { word: 'സന്തം', transliteration: 'santham', english: 'happiness' }
    ],
    formationSteps: [
      'Combine ന + ത',
      'Form nasal-dental',
      'Create flowing connection'
    ]
  },
  {
    id: 'conj14',
    malayalam: 'ന്ദ',
    transliteration: 'nda',
    type: 'consonant',
    pronunciation: '"nd" sound',
    difficulty: 'intermediate',
    category: 'conjunct',
    description: 'Nasal + voiced dental combination',
    examples: [
      { word: 'ചന്ദ്രൻ', transliteration: 'chandran', english: 'moon' },
      { word: 'ബന്ധം', transliteration: 'bandham', english: 'relationship' }
    ],
    formationSteps: [
      'Combine ന + ദ',
      'Form nasal-dental voiced',
      'Create smooth transition'
    ]
  },
  {
    id: 'conj15',
    malayalam: 'ശ്ശ',
    transliteration: 'shsha',
    type: 'consonant',
    pronunciation: 'Double "sh" sound',
    difficulty: 'intermediate',
    category: 'conjunct',
    description: 'Double palatal fricative',
    examples: [
      { word: 'മാങ്ങ', transliteration: 'maanga', english: 'mango' },
      { word: 'വിശ്ശാസം', transliteration: 'vishsaasam', english: 'trust' }
    ],
    formationSteps: [
      'Combine ശ + ശ',
      'Form double fricative',
      'Create complex shape'
    ]
  },
  {
    id: 'conj16',
    malayalam: 'ക്ത',
    transliteration: 'ktha',
    type: 'consonant',
    pronunciation: '"kt" sound',
    difficulty: 'advanced',
    category: 'conjunct',
    description: 'Velar + dental combination',
    examples: [
      { word: 'ശക്തി', transliteration: 'shakthi', english: 'power' },
      { word: 'ഭക്തി', transliteration: 'bhakthi', english: 'devotion' }
    ],
    formationSteps: [
      'Combine ക + ത',
      'Form stop-dental',
      'Create compact form'
    ]
  },
  {
    id: 'conj17',
    malayalam: 'സ്ത',
    transliteration: 'stha',
    type: 'consonant',
    pronunciation: '"st" sound',
    difficulty: 'intermediate',
    category: 'conjunct',
    description: 'Fricative + dental combination',
    examples: [
      { word: 'സ്ഥലം', transliteration: 'sthalam', english: 'place' },
      { word: 'ഉപാസ്ഥ', transliteration: 'upastha', english: 'worship' }
    ],
    formationSteps: [
      'Combine സ + ത',
      'Form fricative-dental',
      'Create joined form'
    ]
  },
  {
    id: 'conj18',
    malayalam: 'ല്‍',
    transliteration: 'l',
    type: 'consonant',
    pronunciation: 'Chillu "l" sound',
    difficulty: 'advanced',
    category: 'conjunct',
    description: 'Chillu letter for lateral',
    examples: [
      { word: 'കല്‍', transliteration: 'kal', english: 'stone' },
      { word: 'നിൽ', transliteration: 'nil', english: 'stand' }
    ],
    formationSteps: [
      'Special ല form',
      'Remove vowel marker',
      'Create chillu shape'
    ]
  },
  {
    id: 'conj19',
    malayalam: 'ണ്‍',
    transliteration: 'n',
    type: 'consonant',
    pronunciation: 'Chillu retroflex "n"',
    difficulty: 'advanced',
    category: 'conjunct',
    description: 'Chillu letter for retroflex nasal',
    examples: [
      { word: 'കാണ്‍', transliteration: 'kaan', english: 'see' },
      { word: 'വിള്‍', transliteration: 'vil', english: 'lamp' }
    ],
    formationSteps: [
      'Special ണ form',
      'Remove vowel marker',
      'Create chillu shape'
    ]
  },
  {
    id: 'conj20',
    malayalam: 'ള്‍',
    transliteration: 'l',
    type: 'consonant',
    pronunciation: 'Chillu retroflex "l"',
    difficulty: 'advanced',
    category: 'conjunct',
    description: 'Chillu letter for retroflex lateral',
    examples: [
      { word: 'കേരള്‍', transliteration: 'keral', english: 'Kerala' },
      { word: 'പാള്‍', transliteration: 'paal', english: 'milk' }
    ],
    formationSteps: [
      'Special ള form',
      'Remove vowel marker',
      'Create chillu shape'
    ]
  }
];

export const malayalamSymbols: EnhancedMalayalamLetter[] = [
  {
    id: 'sym1',
    malayalam: '।',
    transliteration: '.',
    type: 'symbol',
    pronunciation: 'Period - "adavu"',
    difficulty: 'beginner',
    category: 'symbol',
    description: 'Malayalam period/full stop',
    examples: [
      { word: 'നല്ല ദിവസം।', transliteration: 'nalla divasam.', english: 'Good day.' },
      { word: 'വിദ്യാലയം।', transliteration: 'vidyaalayam.', english: 'School.' }
    ],
    formationSteps: [
      'Draw vertical line',
      'Add small dot below',
      'Ensure proper spacing'
    ]
  },
  {
    id: 'sym2',
    malayalam: '॥',
    transliteration: '||',
    type: 'symbol',
    pronunciation: 'Double danda',
    difficulty: 'intermediate',
    category: 'symbol',
    description: 'Used at end of verses/sections',
    examples: [
      { word: 'ശ്ലോകം॥', transliteration: 'shlokam||', english: 'End of verse' }
    ],
    formationSteps: [
      'Draw two vertical lines',
      'Add dots below both',
      'Maintain parallel spacing'
    ]
  },
  {
    id: 'sym3',
    malayalam: 'ം',
    transliteration: 'm',
    type: 'symbol',
    pronunciation: 'Anusvara - nasal sound',
    difficulty: 'intermediate',
    category: 'symbol',
    description: 'Nasal modification mark',
    examples: [
      { word: 'സംസ്കാരം', transliteration: 'samskaram', english: 'culture' },
      { word: 'മംഗളം', transliteration: 'mangalam', english: 'auspicious' }
    ],
    formationSteps: [
      'Draw small circle',
      'Add tail going right',
      'Position above baseline'
    ]
  },
  {
    id: 'sym4',
    malayalam: 'ഃ',
    transliteration: 'h',
    type: 'symbol',
    pronunciation: 'Visarga - breath sound',
    difficulty: 'advanced',
    category: 'symbol',
    description: 'Breath aspiration mark',
    examples: [
      { word: 'നമഃ', transliteration: 'namah', english: 'salutations' },
      { word: 'ഗുരവേ നമഃ', transliteration: 'gurave namah', english: 'salutations to the teacher' }
    ],
    formationSteps: [
      'Draw two small dots',
      'Stack vertically',
      'Position after consonant'
    ]
  },
  {
    id: 'sym5',
    malayalam: '്',
    transliteration: '',
    type: 'symbol',
    pronunciation: 'Virama - vowel killer',
    difficulty: 'advanced',
    category: 'symbol',
    description: 'Removes inherent vowel sound',
    examples: [
      { word: 'കൃഷ്ണൻ്', transliteration: 'krishnan', english: 'Krishna' },
      { word: 'സത്യം്', transliteration: 'satyam', english: 'truth' }
    ],
    formationSteps: [
      'Draw small curved mark',
      'Place below consonant',
      'Indicates no vowel sound'
    ]
  }
];

export const allEnhancedLetters = [...enhancedVowels, ...enhancedConsonants, ...malayalamNumbers, ...conjuncts, ...malayalamSymbols];