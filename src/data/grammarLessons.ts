export interface GrammarLesson {
  id: string;
  title: string;
  titleMalayalam: string;
  titleTransliteration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  concepts: GrammarConcept[];
}

export interface GrammarConcept {
  id: string;
  concept: string;
  conceptMalayalam: string;
  conceptTransliteration: string;
  explanation: string;
  examples: GrammarExample[];
}

export interface GrammarExample {
  malayalam: string;
  transliteration: string;
  english: string;
  breakdown?: string;
}

export const pronouns: GrammarLesson = {
  id: 'pronouns',
  title: 'Personal Pronouns',
  titleMalayalam: 'വ്യക്തിവാചകങ്ങൾ',
  titleTransliteration: 'vyakthivaachakangal',
  difficulty: 'beginner',
  concepts: [
    {
      id: 'first_person',
      concept: 'First Person',
      conceptMalayalam: 'ഉത്തമപുരുഷൻ',
      conceptTransliteration: 'uththama purushan',
      explanation: 'Words used to refer to the speaker',
      examples: [
        {
          malayalam: 'ഞാൻ',
          transliteration: 'njaan',
          english: 'I',
          breakdown: 'First person singular'
        },
        {
          malayalam: 'ഞങ്ങൾ',
          transliteration: 'njangal',
          english: 'we (exclusive)',
          breakdown: 'First person plural (excluding listener)'
        },
        {
          malayalam: 'നാം',
          transliteration: 'naam',
          english: 'we (inclusive)',
          breakdown: 'First person plural (including listener)'
        }
      ]
    },
    {
      id: 'second_person',
      concept: 'Second Person',
      conceptMalayalam: 'മധ്യമപുരുഷൻ',
      conceptTransliteration: 'madhyama purushan',
      explanation: 'Words used to refer to the listener',
      examples: [
        {
          malayalam: 'നീ',
          transliteration: 'nee',
          english: 'you (informal)',
          breakdown: 'Second person singular informal'
        },
        {
          malayalam: 'നിങ്ങൾ',
          transliteration: 'ningal',
          english: 'you (formal/plural)',
          breakdown: 'Second person formal or plural'
        },
        {
          malayalam: 'തങ്കൾ',
          transliteration: 'thankal',
          english: 'you (very formal)',
          breakdown: 'Second person very respectful'
        }
      ]
    },
    {
      id: 'third_person',
      concept: 'Third Person',
      conceptMalayalam: 'പ്രഥമപുരുഷൻ',
      conceptTransliteration: 'prathama purushan',
      explanation: 'Words used to refer to others',
      examples: [
        {
          malayalam: 'അവൻ',
          transliteration: 'avan',
          english: 'he (informal)',
          breakdown: 'Third person masculine singular'
        },
        {
          malayalam: 'അവൾ',
          transliteration: 'aval',
          english: 'she (informal)',
          breakdown: 'Third person feminine singular'
        },
        {
          malayalam: 'അത്',
          transliteration: 'athu',
          english: 'it',
          breakdown: 'Third person neuter singular'
        },
        {
          malayalam: 'അവർ',
          transliteration: 'avar',
          english: 'they (formal)',
          breakdown: 'Third person plural/formal'
        }
      ]
    }
  ]
};

export const basicVerbs: GrammarLesson = {
  id: 'basic_verbs',
  title: 'Basic Verbs',
  titleMalayalam: 'അടിസ്ഥാന ക്രിയകൾ',
  titleTransliteration: 'adisthaana kriyakal',
  difficulty: 'beginner',
  concepts: [
    {
      id: 'to_be_verb',
      concept: 'To Be (Present Tense)',
      conceptMalayalam: 'ആകുക (വർത്തമാനകാലം)',
      conceptTransliteration: 'aakuka (varthamaanakaalam)',
      explanation: 'The verb "to be" in present tense',
      examples: [
        {
          malayalam: 'ഞാൻ ആണ്',
          transliteration: 'njaan aanu',
          english: 'I am',
          breakdown: 'njaan (I) + aanu (am)'
        },
        {
          malayalam: 'നീ ആണ്',
          transliteration: 'nee aanu',
          english: 'you are',
          breakdown: 'nee (you) + aanu (are)'
        },
        {
          malayalam: 'അവൻ ആണ്',
          transliteration: 'avan aanu',
          english: 'he is',
          breakdown: 'avan (he) + aanu (is)'
        }
      ]
    },
    {
      id: 'present_tense',
      concept: 'Present Tense Actions',
      conceptMalayalam: 'വർത്തമാനകാല ക്രിയകൾ',
      conceptTransliteration: 'varthamaanakaala kriyakal',
      explanation: 'Actions happening now',
      examples: [
        {
          malayalam: 'ഞാൻ പോകുന്നു',
          transliteration: 'njaan pokunnnu',
          english: 'I am going',
          breakdown: 'njaan (I) + pokunnnu (going)'
        },
        {
          malayalam: 'അവൾ വരുന്നു',
          transliteration: 'aval varunnnu',
          english: 'she is coming',
          breakdown: 'aval (she) + varunnnu (coming)'
        },
        {
          malayalam: 'നിങ്ങൾ കഴിക്കുന്നു',
          transliteration: 'ningal kazhikkunnnu',
          english: 'you are eating',
          breakdown: 'ningal (you) + kazhikkunnnu (eating)'
        }
      ]
    }
  ]
};

export const sentenceStructure: GrammarLesson = {
  id: 'sentence_structure',
  title: 'Basic Sentence Structure',
  titleMalayalam: 'അടിസ്ഥാന വാക്യഘടന',
  titleTransliteration: 'adisthaana vaakyaghadana',
  difficulty: 'intermediate',
  concepts: [
    {
      id: 'sov_order',
      concept: 'Subject-Object-Verb Order',
      conceptMalayalam: 'കർത്താവ്-കർമ്മം-ക്രിയ ക്രമം',
      conceptTransliteration: 'karthaavu-karmam-kriya kramam',
      explanation: 'Malayalam follows SOV word order, unlike English SVO',
      examples: [
        {
          malayalam: 'ഞാൻ ഭക്ഷണം കഴിക്കുന്നു',
          transliteration: 'njaan bhakshanam kazhikkunnnu',
          english: 'I eat food',
          breakdown: 'njaan (I-Subject) + bhakshanam (food-Object) + kazhikkunnnu (eat-Verb)'
        },
        {
          malayalam: 'അവൾ പുസ്തകം വായിക്കുന്നു',
          transliteration: 'aval pusthakam vaayikkunnnu',
          english: 'She reads a book',
          breakdown: 'aval (she-Subject) + pusthakam (book-Object) + vaayikkunnnu (reads-Verb)'
        }
      ]
    }
  ]
};

export const postpositions: GrammarLesson = {
  id: 'postpositions',
  title: 'Postpositions',
  titleMalayalam: 'ഉപസർഗ്ഗങ്ങൾ',
  titleTransliteration: 'upasarggangal',
  difficulty: 'intermediate',
  concepts: [
    {
      id: 'common_postpositions',
      concept: 'Common Postpositions',
      conceptMalayalam: 'സാധാരണ ഉപസർഗ്ഗങ്ങൾ',
      conceptTransliteration: 'saadhaarana upasarggangal',
      explanation: 'Malayalam uses postpositions instead of prepositions',
      examples: [
        {
          malayalam: 'വീട്ടിൽ',
          transliteration: 'veettil',
          english: 'in the house',
          breakdown: 'veedu (house) + il (in)'
        },
        {
          malayalam: 'മേശയിൽ',
          transliteration: 'meshayil',
          english: 'on the table',
          breakdown: 'mesha (table) + yil (on)'
        },
        {
          malayalam: 'കടയിലേക്ക്',
          transliteration: 'kadayilekku',
          english: 'to the shop',
          breakdown: 'kada (shop) + ilekku (to)'
        }
      ]
    }
  ]
};

export const grammarLessons: GrammarLesson[] = [
  pronouns,
  basicVerbs,
  sentenceStructure,
  postpositions,
];