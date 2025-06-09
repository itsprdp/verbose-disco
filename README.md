# Malayalam Learning App

A cross-platform mobile application for learning Malayalam language, built with React Native and Expo.

## Features

### 🔤 Learn Malayalam Script
- Interactive vowels (സ്വരങ്ങൾ / swarangal)
- Consonants (വ്യഞ്ജനങ്ങൾ / vyanjhanangal) 
- Numbers (സംഖ്യകൾ / samkhyakal)
- Transliteration for all letters

### 📚 Extensive Vocabulary (200+ words)
- **24 categories**: Family, food, colors, body parts, animals, fruits, vegetables, nature, clothing, emotions, weather, transport, time, greetings, polite phrases, questions, responses, feelings, activities, directions, shopping, festivals, cuisine, art, geography, sports
- Malayalam script + transliteration + English translation
- Interactive word cards with detailed views
- Cultural context for traditional items

### 📖 Grammar Lessons
- Personal pronouns (first, second, third person)
- Basic verbs and present tense
- Sentence structure (SOV order)
- Postpositions
- Interactive examples with breakdowns

### 🗂️ Smart Flashcards
- Flip-based learning system with animations
- Progress tracking through entire vocabulary
- Category-based practice sessions
- Audio pronunciation support (planned)

### 🎯 Key Learning Features
- **Transliteration-first approach** - makes Malayalam accessible to beginners
- **Progressive difficulty** - from letters to words to sentences
- **Interactive UI** - tap, flip, and navigate intuitively
- **Offline support** - learn anywhere without internet
- **Dynamic Island optimized** - perfect support for iPhone 14 Pro/15 series
- **Modern iPhone support** - handles notch, Dynamic Island, and safe areas

## Technology Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: React Navigation
- **Styling**: React Native StyleSheet
- **Platform Support**: iOS, Android, Web
- **Device Support**: iPhone Dynamic Island, Notch, Standard screens

## Device Compatibility

### iPhone Support
- ✅ **Dynamic Island**: iPhone 14 Pro/Pro Max, iPhone 15 series
- ✅ **Notch**: iPhone X, XS, XR, 11, 12, 13 series  
- ✅ **Standard**: iPhone SE, iPhone 8 and earlier
- ✅ **iPad**: All iPad models with proper scaling

### Android Support
- ✅ **Modern Android**: API 21+ with proper safe area handling
- ✅ **Tablets**: Responsive design for larger screens
- ✅ **Foldables**: Adaptive layout support

## Project Structure

```
src/
├── components/     # Reusable UI components
├── screens/        # App screens (Home, Letters, Words, Flashcards)
├── data/          # Malayalam language data
│   ├── malayalamLetters.ts   # Vowels, consonants, numbers
│   └── basicWords.ts         # Categorized vocabulary
├── types/         # TypeScript type definitions
└── utils/         # Helper functions
```

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Use Expo Go app on your phone to scan the QR code, or run on simulator:
   ```bash
   npm run ios     # iOS simulator
   npm run android # Android emulator
   npm run web     # Web browser
   ```

## Malayalam Language Data

### Letters Included
- **13 Vowels**: അ, ആ, ഇ, ഈ, ഉ, ഊ, ഋ, എ, ഏ, ഐ, ഒ, ഓ, ഔ
- **36 Consonants**: ക to റ (full Malayalam alphabet)
- **10 Numbers**: ൦ to ൯

### Vocabulary Categories (24 total)
#### **Basic Categories**
- Family (കുടുംബം / kudumbam) - 8 words
- Food (ഭക്ഷണം / bhakshanam) - 10 words
- Places (സ്ഥലങ്ങൾ / sthalangal) - 3 words
- Objects (വസ്തുക്കൾ / vasthukkal) - 2 words
- Vehicles (വാഹനങ്ങൾ / vaahanangal) - 7 words

#### **Nature & Physical World**
- Colors (നിറങ്ങൾ / nirangal) - 8 words
- Body Parts (ശരീരഭാഗങ്ങൾ / shareera bhaagangal) - 8 words
- Animals (മൃഗങ്ങൾ / mrugangal) - 10 words
- Fruits (പഴങ്ങൾ / pazhangal) - 8 words
- Vegetables (പച്ചക്കറികൾ / pachakkarrikal) - 8 words
- Nature (പ്രകൃതി / prakruthi) - 10 words
- Weather (കാലാവസ്ഥ / kaalavastha) - 6 words

#### **Daily Life**
- Clothing (വസ്ത്രങ്ങൾ / vasthrangal) - 8 words
- Time (സമയം / samayam) - 8 words
- Transport (ഗതാഗതം / gathaagatham) - 6 words
- Shopping (ഷോപ്പിംഗ് / shopping) - 6 words

#### **Communication**
- Greetings (അഭിവാദനങ്ങൾ / abhivaadanangal) - 7 words
- Polite Phrases (മര്യാദയുള്ള വാക്കുകൾ / maryaadayulla vaakkukal) - 5 words
- Questions (ചോദ്യങ്ങൾ / chodhyangal) - 7 words
- Responses (ഉത്തരങ്ങൾ / uttharangal) - 5 words
- Activities (പ്രവർത്തനങ്ങൾ / pravarththanangal) - 8 words
- Feelings (വികാരങ്ങൾ / vikaarangal) - 5 words
- Directions (ദിശകൾ / dishakal) - 7 words

#### **Cultural Content**
- Festivals (ഉത്സവങ്ങൾ / uthsavangal) - 4 words
- Cuisine (പാചകരീതി / paachakareerthi) - 8 words
- Art (കല / kala) - 5 words
- Geography (ഭൂമിശാസ്ത്രം / bhoomishaasthram) - 5 words
- Sports (കായികം / kaayikam) - 1 word

## Transliteration System

Uses a simplified ISO 15919-based system for easy learning:
- Single characters for basic sounds: ka, ga, ma, etc.
- Double characters for aspirated sounds: kha, gha, etc.
- Special characters: zha (ഴ), nga (ങ), nya (ഞ)

## Future Features

- [ ] Audio pronunciation for all letters and words
- [ ] Matching games
- [ ] Grammar lessons (tenses, pronouns)
- [ ] Sentence building exercises
- [ ] User progress tracking and achievements
- [ ] Spaced repetition algorithm
- [ ] Offline database with SQLite
- [ ] Cultural context and images

## Contributing

Contributions are welcome! Areas where help is needed:
- Additional vocabulary and phrases
- Audio recordings by native speakers
- UI/UX improvements
- New learning modules (grammar, sentences)

## License

MIT License - see LICENSE file for details.

## App Icon & Branding

The app features a custom-designed icon showcasing the Malayalam letter **"മ" (ma)** - representing both the Malayalam script and the word "അമ്മ" (amma/mother). The design uses a friendly blue color scheme with educational elements like books and progress indicators.

## About Malayalam

Malayalam (മലയാളം) is a Dravidian language spoken by over 38 million people, primarily in Kerala, India. It has a rich literary tradition and a unique script derived from the ancient Grantha script.