import { EnhancedMalayalamLetter } from './enhancedLetters';

// Number Categories for Progressive Learning
export interface NumberCategory {
  id: string;
  title: string;
  titleMalayalam: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  numbers: EnhancedMalayalamLetter[];
}

// Basic Numbers 0-10 (Beginner)
export const basicNumbers: EnhancedMalayalamLetter[] = [
  {
    id: 'num0',
    malayalam: '൦',
    transliteration: '0 - poojyam',
    type: 'number',
    pronunciation: 'Zero - "poojyam" (പൂജ്യം)',
    difficulty: 'beginner',
    category: 'number',
    description: 'Malayalam numeral for zero',
    examples: [
      { word: '൧൦', transliteration: '10', english: 'ten' },
      { word: '൨൦', transliteration: '20', english: 'twenty' },
      { word: '൧൦൦', transliteration: '100', english: 'hundred' }
    ],
    formationSteps: [
      'Draw circular shape',
      'Complete the loop',
      'Ensure proper spacing'
    ]
  },
  {
    id: 'num1',
    malayalam: '൧',
    transliteration: '1 - onnu',
    type: 'number',
    pronunciation: 'One - "onnu" (ഒന്ന്)',
    difficulty: 'beginner',
    category: 'number',
    description: 'Malayalam numeral for one - basic counting',
    examples: [
      { word: 'ഒരു പുസ്തകം', transliteration: 'oru pusthakam', english: 'one book' },
      { word: 'ഒന്നാം ക്ലാസ്', transliteration: 'onnaam class', english: 'first class' },
      { word: '൧൧', transliteration: '11 - patinonnu', english: 'eleven' }
    ],
    formationSteps: [
      'Draw vertical line',
      'Add small hook at top',
      'Complete the form'
    ]
  },
  {
    id: 'num2',
    malayalam: '൨',
    transliteration: '2 - rendu',
    type: 'number',
    pronunciation: 'Two - "rendu" (രണ്ട്)',
    difficulty: 'beginner',
    category: 'number',
    description: 'Malayalam numeral for two',
    examples: [
      { word: 'രണ്ട് കുട്ടികൾ', transliteration: 'rendu kuttikal', english: 'two children' },
      { word: 'രണ്ടാം ദിവസം', transliteration: 'randaam divasam', english: 'second day' },
      { word: '൨൨', transliteration: '22 - irupattirendu', english: 'twenty-two' }
    ],
    formationSteps: [
      'Draw curved top',
      'Add middle section',
      'Complete with base'
    ]
  },
  {
    id: 'num3',
    malayalam: '൩',
    transliteration: '3 - moonnu',
    type: 'number',
    pronunciation: 'Three - "moonnu" (മൂന്ന്)',
    difficulty: 'beginner',
    category: 'number',
    description: 'Malayalam numeral for three',
    examples: [
      { word: 'മൂന്ന് പേര്', transliteration: 'moonnu per', english: 'three people' },
      { word: 'മൂന്നാം വര്ഷം', transliteration: 'moonnaam varsham', english: 'third year' },
      { word: '൩൦', transliteration: '30 - muppadu', english: 'thirty' }
    ],
    formationSteps: [
      'Draw upper curve',
      'Add middle curve',
      'Complete with lower section'
    ]
  },
  {
    id: 'num4',
    malayalam: '൪',
    transliteration: '4 - naalu',
    type: 'number',
    pronunciation: 'Four - "naalu" (നാല്)',
    difficulty: 'beginner',
    category: 'number',
    description: 'Malayalam numeral for four',
    examples: [
      { word: 'നാല് ദിശകൾ', transliteration: 'naalu dishakal', english: 'four directions' },
      { word: 'നാലാം മാസം', transliteration: 'naalaam maasam', english: 'fourth month' },
      { word: '൪൦', transliteration: '40 - nalpadu', english: 'forty' }
    ],
    formationSteps: [
      'Draw angular top',
      'Add vertical line',
      'Complete with base connection'
    ]
  },
  {
    id: 'num5',
    malayalam: '൫',
    transliteration: '5 - anju',
    type: 'number',
    pronunciation: 'Five - "anju" (അഞ്ച്)',
    difficulty: 'beginner',
    category: 'number',
    description: 'Malayalam numeral for five',
    examples: [
      { word: 'അഞ്ച് വിരലുകൾ', transliteration: 'anju viralukal', english: 'five fingers' },
      { word: 'അഞ്ചാം ക്ലാസ്', transliteration: 'anjaam class', english: 'fifth class' },
      { word: '൫൦', transliteration: '50 - anjupadu', english: 'fifty' }
    ],
    formationSteps: [
      'Draw horizontal top',
      'Add curved middle',
      'Complete with bottom curve'
    ]
  },
  {
    id: 'num6',
    malayalam: '൬',
    transliteration: '6 - aaru',
    type: 'number',
    pronunciation: 'Six - "aaru" (ആറ്)',
    difficulty: 'beginner',
    category: 'number',
    description: 'Malayalam numeral for six',
    examples: [
      { word: 'ആറ് മാസം', transliteration: 'aaru maasam', english: 'six months' },
      { word: 'ആറാം തീയതി', transliteration: 'aaraam theeyathi', english: 'sixth date' },
      { word: '൬൦', transliteration: '60 - arupadu', english: 'sixty' }
    ],
    formationSteps: [
      'Draw curved top',
      'Add loop in middle',
      'Complete with bottom'
    ]
  },
  {
    id: 'num7',
    malayalam: '൭',
    transliteration: '7 - ezhu',
    type: 'number',
    pronunciation: 'Seven - "ezhu" (ഏഴ്)',
    difficulty: 'beginner',
    category: 'number',
    description: 'Malayalam numeral for seven',
    examples: [
      { word: 'ഏഴ് നാളുകൾ', transliteration: 'ezhu naalukal', english: 'seven days' },
      { word: 'ഏഴാം വയസ്സ്', transliteration: 'ezhaam vayassu', english: 'seventh age' },
      { word: '൭൦', transliteration: '70 - ezhupadu', english: 'seventy' }
    ],
    formationSteps: [
      'Draw horizontal top line',
      'Add diagonal stroke',
      'Complete the form'
    ]
  },
  {
    id: 'num8',
    malayalam: '൮',
    transliteration: '8 - ettu',
    type: 'number',
    pronunciation: 'Eight - "ettu" (എട്ട്)',
    difficulty: 'beginner',
    category: 'number',
    description: 'Malayalam numeral for eight',
    examples: [
      { word: 'എട്ട് മണി', transliteration: 'ettu mani', english: 'eight o\'clock' },
      { word: 'എട്ടാം ക്ലാസ്', transliteration: 'ettaam class', english: 'eighth class' },
      { word: '൮൦', transliteration: '80 - enpathu', english: 'eighty' }
    ],
    formationSteps: [
      'Draw upper loop',
      'Add lower loop',
      'Connect smoothly'
    ]
  },
  {
    id: 'num9',
    malayalam: '൯',
    transliteration: '9 - onpathu',
    type: 'number',
    pronunciation: 'Nine - "onpathu" (ഒമ്പത്)',
    difficulty: 'beginner',
    category: 'number',
    description: 'Malayalam numeral for nine',
    examples: [
      { word: 'ഒമ്പത് പൂവുകൾ', transliteration: 'onpathu poovukal', english: 'nine flowers' },
      { word: 'ഒമ്പതാം മാസം', transliteration: 'onpathaam maasam', english: 'ninth month' },
      { word: '൯൦', transliteration: '90 - thonnooru', english: 'ninety' }
    ],
    formationSteps: [
      'Draw circular top',
      'Add vertical line down',
      'Complete with hook'
    ]
  },
  {
    id: 'num10',
    malayalam: '൧൦',
    transliteration: '10 - pathu',
    type: 'number',
    pronunciation: 'Ten - "pathu" (പത്ത്)',
    difficulty: 'beginner',
    category: 'number',
    description: 'Malayalam numeral for ten - first compound number',
    examples: [
      { word: 'പത്ത് രൂപ', transliteration: 'pathu roopa', english: 'ten rupees' },
      { word: 'പത്താം ക്ലാസ്', transliteration: 'patthaam class', english: 'tenth class' },
      { word: '൧൦൦', transliteration: '100 - nooru', english: 'hundred' }
    ],
    formationSteps: [
      'Write ൧ (one)',
      'Write ൦ (zero) next to it',
      'Form compound number'
    ]
  }
];

// Teen Numbers 11-19 (Beginner)
export const teenNumbers: EnhancedMalayalamLetter[] = [
  {
    id: 'num11',
    malayalam: '൧൧',
    transliteration: '11 - patinonnu',
    type: 'number',
    pronunciation: 'Eleven - "patinonnu" (പതിനൊന്ന്)',
    difficulty: 'beginner',
    category: 'number',
    description: 'Eleven - pattern: pathin + onnu',
    examples: [
      { word: 'പതിനൊന്ന് കുട്ടികൾ', transliteration: 'patinonnu kuttikal', english: 'eleven children' },
      { word: '൧൧ മണി', transliteration: '11 mani', english: '11 o\'clock' }
    ],
    formationSteps: [
      'Combine pathin (ten prefix)',
      'Add onnu (one)',
      'Form compound: patinonnu'
    ]
  },
  {
    id: 'num12',
    malayalam: '൧൨',
    transliteration: '12 - pannandu',
    type: 'number',
    pronunciation: 'Twelve - "pannandu" (പന്ത്രണ്ട്)',
    difficulty: 'beginner',
    category: 'number',
    description: 'Twelve - special form, not regular pattern',
    examples: [
      { word: 'പന്ത്രണ്ട് മാസം', transliteration: 'pannandu maasam', english: 'twelve months' },
      { word: 'ഒരു വര്ഷം', transliteration: 'oru varsham', english: 'one year' }
    ],
    formationSteps: [
      'Special compound form',
      'Not regular pathin + rendu',
      'Memorize: pannandu'
    ]
  },
  {
    id: 'num13',
    malayalam: '൧൩',
    transliteration: '13 - pathinmoonnu',
    type: 'number',
    pronunciation: 'Thirteen - "pathinmoonnu" (പതിമ്മൂന്ന്)',
    difficulty: 'beginner',
    category: 'number',
    description: 'Thirteen - pattern: pathin + moonnu',
    examples: [
      { word: 'പതിമ്മൂന്ന് വയസ്സ്', transliteration: 'pathinmoonnu vayassu', english: 'thirteen years old' }
    ],
    formationSteps: [
      'Combine pathin (ten prefix)',
      'Add moonnu (three)',
      'Form: pathinmoonnu'
    ]
  },
  {
    id: 'num14',
    malayalam: '൧൪',
    transliteration: '14 - pathinaalu',
    type: 'number',
    pronunciation: 'Fourteen - "pathinaalu" (പതിനാല്)',
    difficulty: 'beginner',
    category: 'number',
    description: 'Fourteen - pattern: pathin + naalu',
    examples: [
      { word: 'പതിനാല് ദിവസം', transliteration: 'pathinaalu divasam', english: 'fourteen days' }
    ],
    formationSteps: [
      'Combine pathin (ten prefix)',
      'Add naalu (four)',
      'Form: pathinaalu'
    ]
  },
  {
    id: 'num15',
    malayalam: '൧൫',
    transliteration: '15 - pathinanju',
    type: 'number',
    pronunciation: 'Fifteen - "pathinanju" (പതിനഞ്ച്)',
    difficulty: 'beginner',
    category: 'number',
    description: 'Fifteen - pattern: pathin + anju',
    examples: [
      { word: 'പതിനഞ്ച് മിനിറ്റ്', transliteration: 'pathinanju minute', english: 'fifteen minutes' },
      { word: '൧൫ ദിവസം', transliteration: '15 divasam', english: '15 days' }
    ],
    formationSteps: [
      'Combine pathin (ten prefix)',
      'Add anju (five)',
      'Form: pathinanju'
    ]
  },
  {
    id: 'num16',
    malayalam: '൧൬',
    transliteration: '16 - pathinaaru',
    type: 'number',
    pronunciation: 'Sixteen - "pathinaaru" (പതിനാറ്)',
    difficulty: 'beginner',
    category: 'number',
    description: 'Sixteen - pattern: pathin + aaru',
    examples: [
      { word: 'പതിനാറാം പിറന്നാൾ', transliteration: 'pathinaaraam piranaal', english: 'sixteenth birthday' }
    ],
    formationSteps: [
      'Combine pathin (ten prefix)',
      'Add aaru (six)',
      'Form: pathinaaru'
    ]
  },
  {
    id: 'num17',
    malayalam: '൧൭',
    transliteration: '17 - pathinezhu',
    type: 'number',
    pronunciation: 'Seventeen - "pathinezhu" (പതിനേഴ്)',
    difficulty: 'beginner',
    category: 'number',
    description: 'Seventeen - pattern: pathin + ezhu',
    examples: [
      { word: 'പതിനേഴാം നൂറ്റാണ്ട്', transliteration: 'pathinezhaam noottaandu', english: 'seventeenth century' }
    ],
    formationSteps: [
      'Combine pathin (ten prefix)',
      'Add ezhu (seven)',
      'Form: pathinezhu'
    ]
  },
  {
    id: 'num18',
    malayalam: '൧൮',
    transliteration: '18 - pathinettu',
    type: 'number',
    pronunciation: 'Eighteen - "pathinettu" (പതിനെട്ട്)',
    difficulty: 'beginner',
    category: 'number',
    description: 'Eighteen - pattern: pathin + ettu',
    examples: [
      { word: 'പതിനെട്ടാം വയസ്സ്', transliteration: 'pathinettaam vayassu', english: 'eighteen years old' }
    ],
    formationSteps: [
      'Combine pathin (ten prefix)',
      'Add ettu (eight)',
      'Form: pathinettu'
    ]
  },
  {
    id: 'num19',
    malayalam: '൧൯',
    transliteration: '19 - pathonpathu',
    type: 'number',
    pronunciation: 'Nineteen - "pathonpathu" (പത്തൊമ്പത്)',
    difficulty: 'beginner',
    category: 'number',
    description: 'Nineteen - pattern: path + onpathu',
    examples: [
      { word: 'പത്തൊമ്പതാം വയസ്സ്', transliteration: 'pathonpathaam vayassu', english: 'nineteen years old' }
    ],
    formationSteps: [
      'Combine path (ten)',
      'Add onpathu (nine)',
      'Form: pathonpathu'
    ]
  }
];

// Tens Numbers 20-90 (Intermediate)
export const tensNumbers: EnhancedMalayalamLetter[] = [
  {
    id: 'num20',
    malayalam: '൨൦',
    transliteration: '20 - irupadu',
    type: 'number',
    pronunciation: 'Twenty - "irupadu" (ഇരുപത്)',
    difficulty: 'intermediate',
    category: 'number',
    description: 'Twenty - base for 20s, special form',
    examples: [
      { word: 'ഇരുപത് വയസ്സ്', transliteration: 'irupadu vayassu', english: 'twenty years old' },
      { word: '൨൦൧൯', transliteration: '2019', english: 'year 2019' },
      { word: '൨൫', transliteration: '25 - irupattanju', english: 'twenty-five' }
    ],
    formationSteps: [
      'Special word: irupadu',
      'Base for twenties',
      'Not iru + padu pattern'
    ]
  },
  {
    id: 'num30',
    malayalam: '൩൦',
    transliteration: '30 - muppadu',
    type: 'number',
    pronunciation: 'Thirty - "muppadu" (മുപ്പത്)',
    difficulty: 'intermediate',
    category: 'number',
    description: 'Thirty - base for 30s',
    examples: [
      { word: 'മുപ്പത് കിലോ', transliteration: 'muppadu kilo', english: 'thirty kilos' },
      { word: '൩൫', transliteration: '35 - muppatanju', english: 'thirty-five' }
    ],
    formationSteps: [
      'Base: moonnu (three)',
      'Add padu (tens suffix)',
      'Form: muppadu'
    ]
  },
  {
    id: 'num40',
    malayalam: '൪൦',
    transliteration: '40 - nalpadu',
    type: 'number',
    pronunciation: 'Forty - "nalpadu" (നാല്പത്)',
    difficulty: 'intermediate',
    category: 'number',
    description: 'Forty - base for 40s',
    examples: [
      { word: 'നാല്പത് രൂപ', transliteration: 'nalpadu roopa', english: 'forty rupees' },
      { word: '൪൫', transliteration: '45 - nalpattanju', english: 'forty-five' }
    ],
    formationSteps: [
      'Base: naalu (four)',
      'Add padu (tens suffix)',
      'Form: nalpadu'
    ]
  },
  {
    id: 'num50',
    malayalam: '൫൦',
    transliteration: '50 - anjupadu',
    type: 'number',
    pronunciation: 'Fifty - "anjupadu" (അമ്പത്)',
    difficulty: 'intermediate',
    category: 'number',
    description: 'Fifty - note pronunciation change to "ambath"',
    examples: [
      { word: 'അമ്പത് രൂപ', transliteration: 'ambath roopa', english: 'fifty rupees' },
      { word: '൫൫', transliteration: '55 - ambattanju', english: 'fifty-five' }
    ],
    formationSteps: [
      'Base: anju (five)',
      'Changes to ambath in speech',
      'Written: anjupadu'
    ]
  },
  {
    id: 'num60',
    malayalam: '൬൦',
    transliteration: '60 - arupadu',
    type: 'number',
    pronunciation: 'Sixty - "arupadu" (അറുപത്)',
    difficulty: 'intermediate',
    category: 'number',
    description: 'Sixty - base for 60s',
    examples: [
      { word: 'അറുപത് മിനിറ്റ്', transliteration: 'arupadu minute', english: 'sixty minutes' },
      { word: 'ഒരു മണിക്കൂർ', transliteration: 'oru manikkoor', english: 'one hour' }
    ],
    formationSteps: [
      'Base: aaru (six)',
      'Add padu (tens suffix)',
      'Form: arupadu'
    ]
  },
  {
    id: 'num70',
    malayalam: '൭൦',
    transliteration: '70 - ezhupadu',
    type: 'number',
    pronunciation: 'Seventy - "ezhupadu" (എഴുപത്)',
    difficulty: 'intermediate',
    category: 'number',
    description: 'Seventy - base for 70s',
    examples: [
      { word: 'എഴുപത് വയസ്സ്', transliteration: 'ezhupadu vayassu', english: 'seventy years old' },
      { word: '൭൫', transliteration: '75 - ezhupattanju', english: 'seventy-five' }
    ],
    formationSteps: [
      'Base: ezhu (seven)',
      'Add padu (tens suffix)',
      'Form: ezhupadu'
    ]
  },
  {
    id: 'num80',
    malayalam: '൮൦',
    transliteration: '80 - enpathu',
    type: 'number',
    pronunciation: 'Eighty - "enpathu" (എൺപത്)',
    difficulty: 'intermediate',
    category: 'number',
    description: 'Eighty - different pattern from others',
    examples: [
      { word: 'എൺപത് വയസ്സ്', transliteration: 'enpathu vayassu', english: 'eighty years old' },
      { word: '൮൫', transliteration: '85 - enpattanju', english: 'eighty-five' }
    ],
    formationSteps: [
      'Base: ettu (eight)',
      'Changes to enpathu',
      'Different from other tens'
    ]
  },
  {
    id: 'num90',
    malayalam: '൯൦',
    transliteration: '90 - thonnooru',
    type: 'number',
    pronunciation: 'Ninety - "thonnooru" (തൊണ്ണൂറ്)',
    difficulty: 'intermediate',
    category: 'number',
    description: 'Ninety - special form, irregular',
    examples: [
      { word: 'തൊണ്ണൂറ് വയസ്സ്', transliteration: 'thonnooru vayassu', english: 'ninety years old' },
      { word: '൯൯', transliteration: '99 - thonnoorronpathu', english: 'ninety-nine' }
    ],
    formationSteps: [
      'Irregular form',
      'Not onpathu + padu',
      'Memorize: thonnooru'
    ]
  }
];

// Hundreds 100-900 (Intermediate)
export const hundredsNumbers: EnhancedMalayalamLetter[] = [
  {
    id: 'num100',
    malayalam: '൧൦൦',
    transliteration: '100 - nooru',
    type: 'number',
    pronunciation: 'Hundred - "nooru" (നൂറ്)',
    difficulty: 'intermediate',
    category: 'number',
    description: 'One hundred - base unit for hundreds',
    examples: [
      { word: 'നൂറ് രൂപ', transliteration: 'nooru roopa', english: 'hundred rupees' },
      { word: '൧൦൧', transliteration: '101 - nooronnu', english: 'hundred and one' },
      { word: '൧൨൫', transliteration: '125 - noorirupatttanju', english: 'hundred twenty-five' }
    ],
    formationSteps: [
      'Base unit: nooru',
      'For compounds: noor + number',
      'Example: nooronnu (101)'
    ]
  },
  {
    id: 'num200',
    malayalam: '൨൦൦',
    transliteration: '200 - irunooru',
    type: 'number',
    pronunciation: 'Two hundred - "irunooru" (ഇരുനൂറ്)',
    difficulty: 'intermediate',
    category: 'number',
    description: 'Two hundred - pattern: number + nooru',
    examples: [
      { word: 'ഇരുനൂറ് രൂപ', transliteration: 'irunooru roopa', english: 'two hundred rupees' },
      { word: '൨൫൦', transliteration: '250 - irunooranjupadu', english: 'two hundred fifty' }
    ],
    formationSteps: [
      'Combine iru (two)',
      'Add nooru (hundred)',
      'Form: irunooru'
    ]
  },
  {
    id: 'num300',
    malayalam: '൩൦൦',
    transliteration: '300 - moonnooru',
    type: 'number',
    pronunciation: 'Three hundred - "moonnooru" (മുന്നൂറ്)',
    difficulty: 'intermediate',
    category: 'number',
    description: 'Three hundred - pattern continues',
    examples: [
      { word: 'മുന്നൂറ് മീറ്റർ', transliteration: 'moonnooru meter', english: 'three hundred meters' }
    ],
    formationSteps: [
      'Combine moonnu (three)',
      'Add nooru (hundred)',
      'Form: moonnooru'
    ]
  },
  {
    id: 'num400',
    malayalam: '൪൦൦',
    transliteration: '400 - naalnooru',
    type: 'number',
    pronunciation: 'Four hundred - "naalnooru" (നാനൂറ്)',
    difficulty: 'intermediate',
    category: 'number',
    description: 'Four hundred - note pronunciation change',
    examples: [
      { word: 'നാനൂറ് വർഷം', transliteration: 'naalnooru varsham', english: 'four hundred years' }
    ],
    formationSteps: [
      'Base: naalu (four)',
      'Combine with nooru',
      'Pronunciation: naalnooru'
    ]
  },
  {
    id: 'num500',
    malayalam: '൫൦൦',
    transliteration: '500 - anjnooru',
    type: 'number',
    pronunciation: 'Five hundred - "anjnooru" (അഞ്ഞൂറ്)',
    difficulty: 'intermediate',
    category: 'number',
    description: 'Five hundred - note pronunciation change',
    examples: [
      { word: 'അഞ്ഞൂറ് രൂപ', transliteration: 'anjnooru roopa', english: 'five hundred rupees' },
      { word: '൫൦൦ രൂപയുടെ നോട്ട്', transliteration: 'anjnooru roopayude note', english: '500 rupee note' }
    ],
    formationSteps: [
      'Base: anju (five)',
      'Combine with nooru',
      'Pronunciation: anjnooru'
    ]
  },
  {
    id: 'num600',
    malayalam: '൬൦൦',
    transliteration: '600 - aarunooru',
    type: 'number',
    pronunciation: 'Six hundred - "aarunooru" (ആറുനൂറ്)',
    difficulty: 'intermediate',
    category: 'number',
    description: 'Six hundred - regular pattern',
    examples: [
      { word: 'ആറുനൂറ് കിലോമീറ്റർ', transliteration: 'aarunooru kilometer', english: 'six hundred kilometers' }
    ],
    formationSteps: [
      'Combine aaru (six)',
      'Add nooru (hundred)',
      'Form: aarunooru'
    ]
  },
  {
    id: 'num700',
    malayalam: '൭൦൦',
    transliteration: '700 - ezhunuru',
    type: 'number',
    pronunciation: 'Seven hundred - "ezhunuru" (ഏഴുനൂറ്)',
    difficulty: 'intermediate',
    category: 'number',
    description: 'Seven hundred - slight pronunciation change',
    examples: [
      { word: 'ഏഴുനൂറ് പേര്', transliteration: 'ezhunuru per', english: 'seven hundred people' }
    ],
    formationSteps: [
      'Base: ezhu (seven)',
      'Combine with nooru',
      'Pronunciation: ezhunuru'
    ]
  },
  {
    id: 'num800',
    malayalam: '൮൦൦',
    transliteration: '800 - ettunuru',
    type: 'number',
    pronunciation: 'Eight hundred - "ettunuru" (എട്ടുനൂറ്)',
    difficulty: 'intermediate',
    category: 'number',
    description: 'Eight hundred - follows pattern',
    examples: [
      { word: 'എട്ടുനൂറ് വര്ഷം മുമ്പ്', transliteration: 'ettunuru varsham mumpu', english: 'eight hundred years ago' }
    ],
    formationSteps: [
      'Base: ettu (eight)',
      'Combine with nooru',
      'Form: ettunuru'
    ]
  },
  {
    id: 'num900',
    malayalam: '൯൦൦',
    transliteration: '900 - onpathinuru',
    type: 'number',
    pronunciation: 'Nine hundred - "onpathinuru" (ഒമ്പതുനൂറ്)',
    difficulty: 'intermediate',
    category: 'number',
    description: 'Nine hundred - complex pronunciation',
    examples: [
      { word: 'ഒമ്പതുനൂറ് രൂപ', transliteration: 'onpathinuru roopa', english: 'nine hundred rupees' }
    ],
    formationSteps: [
      'Base: onpathu (nine)',
      'Combine with nooru',
      'Form: onpathinuru'
    ]
  }
];

// Thousands and Large Numbers (Advanced)
export const largeNumbers: EnhancedMalayalamLetter[] = [
  {
    id: 'num1000',
    malayalam: '൧൦൦൦',
    transliteration: '1000 - aayiram',
    type: 'number',
    pronunciation: 'Thousand - "aayiram" (ആയിരം)',
    difficulty: 'advanced',
    category: 'number',
    description: 'One thousand - major unit in Malayalam counting',
    examples: [
      { word: 'ആയിരം രൂപ', transliteration: 'aayiram roopa', english: 'thousand rupees' },
      { word: '൨൦൧൯', transliteration: 'rendu aayiram patinonpathu', english: 'two thousand nineteen (2019)' },
      { word: '൧൫൦൦', transliteration: 'aayirathanjnooru', english: 'fifteen hundred' }
    ],
    formationSteps: [
      'Base unit: aayiram',
      'For compounds: number + aayiram',
      'Example: rendu aayiram (2000)'
    ]
  },
  {
    id: 'num2000',
    malayalam: '൨൦൦൦',
    transliteration: '2000 - rendu aayiram',
    type: 'number',
    pronunciation: 'Two thousand - "rendu aayiram"',
    difficulty: 'advanced',
    category: 'number',
    description: 'Two thousand - compound formation',
    examples: [
      { word: 'രണ്ട് ആയിരം രൂപ', transliteration: 'rendu aayiram roopa', english: 'two thousand rupees' },
      { word: '൨൦൨൪', transliteration: 'rendu aayiram irupattanaalu', english: 'year 2024' }
    ],
    formationSteps: [
      'Combine rendu (two)',
      'Add aayiram (thousand)',
      'Form: rendu aayiram'
    ]
  },
  {
    id: 'num5000',
    malayalam: '൫൦൦൦',
    transliteration: '5000 - anj aayiram',
    type: 'number',
    pronunciation: 'Five thousand - "anj aayiram"',
    difficulty: 'advanced',
    category: 'number',
    description: 'Five thousand - common in salaries',
    examples: [
      { word: 'അഞ്ച് ആയിരം രൂപ', transliteration: 'anj aayiram roopa', english: 'five thousand rupees' },
      { word: 'മാസശമ്പളം', transliteration: 'maasashambalayam', english: 'monthly salary' }
    ],
    formationSteps: [
      'Combine anj (five)',
      'Add aayiram (thousand)',
      'Form: anj aayiram'
    ]
  },
  {
    id: 'num10000',
    malayalam: '൧൦൦൦൦',
    transliteration: '10000 - pathu aayiram',
    type: 'number',
    pronunciation: 'Ten thousand - "pathu aayiram"',
    difficulty: 'advanced',
    category: 'number',
    description: 'Ten thousand - common financial amount',
    examples: [
      { word: 'പത്ത് ആയിരം രൂപ', transliteration: 'pathu aayiram roopa', english: 'ten thousand rupees' },
      { word: 'വിദ്യാഭ്യാസ ചെലവ്', transliteration: 'vidyaabhyaasa chelavu', english: 'education expense' }
    ],
    formationSteps: [
      'Combine pathu (ten)',
      'Add aayiram (thousand)',
      'Form: pathu aayiram'
    ]
  },
  {
    id: 'num25000',
    malayalam: '൨൫൦൦൦',
    transliteration: '25000 - irupattanju aayiram',
    type: 'number',
    pronunciation: 'Twenty-five thousand',
    difficulty: 'advanced',
    category: 'number',
    description: 'Complex compound number',
    examples: [
      { word: 'ഇരുപത്തഞ്ച് ആയിരം', transliteration: 'irupattanju aayiram', english: 'twenty-five thousand' },
      { word: 'ഗോള്ഡ് നിരക്ക്', transliteration: 'gold nirakku', english: 'gold rate' }
    ],
    formationSteps: [
      'Combine irupattanju (25)',
      'Add aayiram (thousand)',
      'Form compound'
    ]
  },
  {
    id: 'num100000',
    malayalam: '൧൦൦൦൦൦',
    transliteration: '100000 - oru laksham',
    type: 'number',
    pronunciation: 'One lakh - "oru laksham" (ഒരു ലക്ഷം)',
    difficulty: 'advanced',
    category: 'number',
    description: 'One lakh - Indian numbering system unit',
    examples: [
      { word: 'ഒരു ലക്ഷം രൂപ', transliteration: 'oru laksham roopa', english: 'one lakh rupees' },
      { word: 'വീടിന്റെ വില', transliteration: 'veedinte vila', english: 'house price' },
      { word: '൫൦൦൦൦൦', transliteration: 'anj laksham', english: 'five lakhs' }
    ],
    formationSteps: [
      'Indian system: 1,00,000',
      'Unit: laksham',
      'Pattern: number + laksham'
    ]
  },
  {
    id: 'num500000',
    malayalam: '൫൦൦൦൦൦',
    transliteration: '500000 - anj laksham',
    type: 'number',
    pronunciation: 'Five lakhs - "anj laksham"',
    difficulty: 'advanced',
    category: 'number',
    description: 'Five lakhs - common property price',
    examples: [
      { word: 'അഞ്ച് ലക്ഷം രൂപ', transliteration: 'anj laksham roopa', english: 'five lakh rupees' },
      { word: 'പ്ലോട്ടിന്റെ വില', transliteration: 'plottinte vila', english: 'plot price' }
    ],
    formationSteps: [
      'Combine anj (five)',
      'Add laksham (lakh)',
      'Form: anj laksham'
    ]
  },
  {
    id: 'num1000000',
    malayalam: '൧൦൦൦൦൦൦',
    transliteration: '1000000 - pathu laksham',
    type: 'number',
    pronunciation: 'Ten lakhs - "pathu laksham"',
    difficulty: 'advanced',
    category: 'number',
    description: 'Ten lakhs - business numbers',
    examples: [
      { word: 'പത്ത് ലക്ഷം രൂപ', transliteration: 'pathu laksham roopa', english: 'ten lakh rupees' },
      { word: 'കമ്പനിയുടെ ടേൺഓവർ', transliteration: 'kompaniyude turnover', english: 'company turnover' }
    ],
    formationSteps: [
      'Combine pathu (ten)',
      'Add laksham (lakh)',
      'Form: pathu laksham'
    ]
  },
  {
    id: 'num10000000',
    malayalam: '൧൦൦൦൦൦൦൦',
    transliteration: '10000000 - oru kodi',
    type: 'number',
    pronunciation: 'One crore - "oru kodi" (ഒരു കോടി)',
    difficulty: 'advanced',
    category: 'number',
    description: 'One crore - highest common unit in Malayalam',
    examples: [
      { word: 'ഒരു കോടി രൂപ', transliteration: 'oru kodi roopa', english: 'one crore rupees' },
      { word: 'ജനസംഖ്യ', transliteration: 'janasankhya', english: 'population' },
      { word: '൫൦൦൦൦൦൦൦', transliteration: 'anj kodi', english: 'five crores' }
    ],
    formationSteps: [
      'Indian system: 1,00,00,000',
      'Unit: kodi (crore)',
      'Used for large amounts'
    ]
  },
  {
    id: 'num50000000',
    malayalam: '൫൦൦൦൦൦൦൦',
    transliteration: '50000000 - anj kodi',
    type: 'number',
    pronunciation: 'Five crores - "anj kodi"',
    difficulty: 'advanced',
    category: 'number',
    description: 'Five crores - government budgets',
    examples: [
      { word: 'അഞ്ച് കോടി രൂപ', transliteration: 'anj kodi roopa', english: 'five crore rupees' },
      { word: 'സർക്കാർ പദ്ധതി', transliteration: 'sarkkaar paddhathi', english: 'government project' }
    ],
    formationSteps: [
      'Combine anj (five)',
      'Add kodi (crore)',
      'Form: anj kodi'
    ]
  },
  {
    id: 'num100000000',
    malayalam: '൧൦൦൦൦൦൦൦൦',
    transliteration: '100000000 - nooru kodi',
    type: 'number',
    pronunciation: 'Hundred crores - "nooru kodi"',
    difficulty: 'advanced',
    category: 'number',
    description: 'Hundred crores - very large amounts',
    examples: [
      { word: 'നൂറ് കോടി രൂപ', transliteration: 'nooru kodi roopa', english: 'hundred crore rupees' },
      { word: 'ബഡ്ജറ്റ് വകയിരുത്തൽ', transliteration: 'budget vakayiruthal', english: 'budget allocation' }
    ],
    formationSteps: [
      'Combine nooru (hundred)',
      'Add kodi (crore)',
      'Form: nooru kodi'
    ]
  }
];

// Number Categories for Progressive Learning
export const numberCategories: NumberCategory[] = [
  {
    id: 'basic',
    title: 'Basic Numbers',
    titleMalayalam: 'അടിസ്ഥാന സംഖ്യകൾ',
    description: 'Numbers 0-10 for fundamental counting',
    difficulty: 'beginner',
    numbers: basicNumbers
  },
  {
    id: 'teens',
    title: 'Teen Numbers',
    titleMalayalam: 'പതിന് സംഖ്യകൾ',
    description: 'Numbers 11-19 with pattern recognition',
    difficulty: 'beginner',
    numbers: teenNumbers
  },
  {
    id: 'tens',
    title: 'Tens',
    titleMalayalam: 'പത്തുകൾ',
    description: 'Numbers 20-90 for intermediate counting',
    difficulty: 'intermediate',
    numbers: tensNumbers
  },
  {
    id: 'hundreds',
    title: 'Hundreds',
    titleMalayalam: 'നൂറുകൾ',
    description: 'Numbers 100-900 with compound formations',
    difficulty: 'intermediate',
    numbers: hundredsNumbers
  },
  {
    id: 'large',
    title: 'Large Numbers',
    titleMalayalam: 'വലിയ സംഖ്യകൾ',
    description: 'Thousands to crores for advanced usage',
    difficulty: 'advanced',
    numbers: largeNumbers
  }
];

// All numbers combined
export const allMalayalamNumbers: EnhancedMalayalamLetter[] = [
  ...basicNumbers,
  ...teenNumbers,
  ...tensNumbers,
  ...hundredsNumbers,
  ...largeNumbers
];

// Export the old malayalamNumbers for backward compatibility
export const malayalamNumbers = allMalayalamNumbers;