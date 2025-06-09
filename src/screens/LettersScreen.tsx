import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { enhancedVowels, enhancedConsonants, malayalamNumbers, conjuncts, malayalamSymbols, EnhancedMalayalamLetter } from '../data/enhancedLetters';
import { SafeAreaWrapper, HeaderSafeArea } from '../components/SafeAreaWrapper';
import { LetterDetailView, LetterProgress, LetterQuiz } from '../components/LetterLearning';

interface EnhancedLetterCardProps {
  letter: EnhancedMalayalamLetter;
  onPress: (letter: EnhancedMalayalamLetter) => void;
  isCompleted?: boolean;
}

const EnhancedLetterCard: React.FC<EnhancedLetterCardProps> = ({ letter, onPress, isCompleted = false }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return '#2ecc71';
      case 'intermediate': return '#f39c12';
      case 'advanced': return '#e74c3c';
      default: return '#95a5a6';
    }
  };

  return (
    <TouchableOpacity style={[styles.letterCard, isCompleted && styles.completedCard]} onPress={() => onPress(letter)}>
      {isCompleted && (
        <View style={styles.completedBadge}>
          <Ionicons name="checkmark" size={16} color="white" />
        </View>
      )}
      <View style={[styles.difficultyIndicator, { backgroundColor: getDifficultyColor(letter.difficulty) }]} />
      <Text style={styles.malayalamLetter}>{letter.malayalam}</Text>
      <Text style={styles.transliteration}>{letter.transliteration}</Text>
      <Text style={styles.letterType}>{letter.category}</Text>
    </TouchableOpacity>
  );
};

interface TabButtonProps {
  title: string;
  subtitle: string;
  count: number;
  isActive: boolean;
  onPress: () => void;
  icon: string;
}

const TabButton: React.FC<TabButtonProps> = ({ title, subtitle, count, isActive, onPress, icon }) => (
  <TouchableOpacity 
    style={[styles.tabButton, isActive && styles.activeTab]} 
    onPress={onPress}
  >
    <Ionicons name={icon as any} size={24} color={isActive ? '#3498db' : '#7f8c8d'} />
    <Text style={[styles.tabText, isActive && styles.activeTabText]}>{title}</Text>
    <Text style={[styles.tabSubtext, isActive && styles.activeTabSubtext]}>{subtitle}</Text>
    <View style={[styles.countBadge, isActive && styles.activeCountBadge]}>
      <Text style={[styles.countText, isActive && styles.activeCountText]}>{count}</Text>
    </View>
  </TouchableOpacity>
);

interface LearningModeButtonProps {
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  onPress: () => void;
}

const LearningModeButton: React.FC<LearningModeButtonProps> = ({ title, subtitle, icon, color, onPress }) => (
  <TouchableOpacity style={[styles.modeButton, { borderLeftColor: color }]} onPress={onPress}>
    <Ionicons name={icon as any} size={28} color={color} />
    <View style={styles.modeButtonText}>
      <Text style={styles.modeButtonTitle}>{title}</Text>
      <Text style={styles.modeButtonSubtitle}>{subtitle}</Text>
    </View>
    <Ionicons name="chevron-forward" size={20} color="#bdc3c7" />
  </TouchableOpacity>
);

type TabType = 'vowels' | 'consonants' | 'numbers' | 'conjuncts' | 'practice';

export default function LettersScreen({ navigation }: { navigation: any }) {
  const [activeTab, setActiveTab] = useState<TabType>('vowels');
  const [selectedLetter, setSelectedLetter] = useState<EnhancedMalayalamLetter | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [completedLetters, setCompletedLetters] = useState<Set<string>>(new Set());

  const getCurrentLetters = () => {
    switch (activeTab) {
      case 'vowels':
        return enhancedVowels;
      case 'consonants':
        return enhancedConsonants;
      case 'numbers':
        return malayalamNumbers;
      case 'conjuncts':
        return conjuncts;
      case 'practice':
        return enhancedVowels; // Default for practice mode
      default:
        return enhancedVowels;
    }
  };

  const handleLetterPress = (letter: EnhancedMalayalamLetter) => {
    setSelectedLetter(letter);
  };

  const handleLetterComplete = () => {
    if (selectedLetter) {
      setCompletedLetters(prev => new Set([...prev, selectedLetter.id]));
    }
  };

  const handlePractice = () => {
    Alert.alert(
      'Letter Tracing',
      'Letter tracing practice will be available in a future update!',
      [{ text: 'OK' }]
    );
  };

  const handleQuizComplete = (score: number) => {
    setShowQuiz(false);
    Alert.alert(
      'Quiz Complete!',
      `You scored ${score} out of 5. ${score >= 4 ? 'Excellent work!' : 'Keep practicing!'}`,
      [{ text: 'Continue' }]
    );
  };

  const totalLetters = enhancedVowels.length + enhancedConsonants.length + malayalamNumbers.length + conjuncts.length + malayalamSymbols.length;
  const vowelProgress = enhancedVowels.filter(letter => completedLetters.has(letter.id)).length;
  const consonantProgress = enhancedConsonants.filter(letter => completedLetters.has(letter.id)).length;
  const numberProgress = malayalamNumbers.filter(letter => completedLetters.has(letter.id)).length;
  const conjunctProgress = conjuncts.filter(letter => completedLetters.has(letter.id)).length;
  const symbolProgress = malayalamSymbols.filter(letter => completedLetters.has(letter.id)).length;

  if (activeTab === 'practice') {
    return (
      <SafeAreaWrapper backgroundColor="#f8f9fa" headerColor="#3498db">
        <HeaderSafeArea backgroundColor="#3498db">
          <View style={styles.headerRow}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.headerContent}>
              <Text style={styles.headerTitle}>Letter Practice</Text>
              <Text style={styles.headerSubtitle}>അക്ഷര പരിശീലനം</Text>
              <Text style={styles.headerTransliteration}>akshara pareesheelanam</Text>
            </View>
          </View>
        </HeaderSafeArea>

        <ScrollView style={styles.practiceContainer} showsVerticalScrollIndicator={false}>
          <LetterProgress 
            completed={completedLetters.size} 
            total={totalLetters} 
            category="Overall" 
          />
          
          <LetterProgress 
            completed={vowelProgress} 
            total={enhancedVowels.length} 
            category="Vowels" 
          />
          
          <LetterProgress 
            completed={consonantProgress} 
            total={enhancedConsonants.length} 
            category="Consonants" 
          />
          
          <LetterProgress 
            completed={numberProgress} 
            total={malayalamNumbers.length} 
            category="Numbers" 
          />
          
          <LetterProgress 
            completed={conjunctProgress} 
            total={conjuncts.length} 
            category="Conjuncts" 
          />
          
          <LetterProgress 
            completed={symbolProgress} 
            total={malayalamSymbols.length} 
            category="Symbols" 
          />

          <View style={styles.practiceModesContainer}>
            <Text style={styles.sectionTitle}>Practice Modes</Text>
            
            <LearningModeButton
              title="Letter Quiz"
              subtitle="Test your letter recognition"
              icon="help-circle-outline"
              color="#f39c12"
              onPress={() => setShowQuiz(true)}
            />
            
            <LearningModeButton
              title="Writing Practice"
              subtitle="Trace and write letters"
              icon="create-outline"
              color="#3498db"
              onPress={handlePractice}
            />
            
            <LearningModeButton
              title="Pronunciation"
              subtitle="Listen and repeat sounds"
              icon="volume-high-outline"
              color="#e74c3c"
              onPress={() => Alert.alert('Coming Soon', 'Audio features will be available soon!')}
            />
            
            <LearningModeButton
              title="Number Practice"
              subtitle="Learn Malayalam numerals"
              icon="calculator-outline"
              color="#f39c12"
              onPress={() => setActiveTab('numbers')}
            />
            
            <LearningModeButton
              title="Letter Combinations"
              subtitle="Learn conjunct consonants"
              icon="link-outline"
              color="#9b59b6"
              onPress={() => setActiveTab('conjuncts')}
            />
            
            <LearningModeButton
              title="Symbol Practice"
              subtitle="Learn special marks and symbols"
              icon="medical-outline"
              color="#34495e"
              onPress={() => Alert.alert('Symbols', 'Symbol practice coming soon! Check the conjuncts section for some special symbols.')}
            />
            
            <LearningModeButton
              title="Find in Words"
              subtitle="Identify letters in vocabulary"
              icon="search-outline"
              color="#1abc9c"
              onPress={() => navigation.navigate('Words')}
            />
          </View>
        </ScrollView>
      </SafeAreaWrapper>
    );
  }

  return (
    <SafeAreaWrapper backgroundColor="#f8f9fa" headerColor="#3498db">
      <HeaderSafeArea backgroundColor="#3498db">
        <View style={styles.headerRow}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>Malayalam Letters</Text>
            <Text style={styles.headerSubtitle}>മലയാളം അക്ഷരങ്ങൾ</Text>
            <Text style={styles.headerTransliteration}>malayaalam aksharangal</Text>
          </View>
        </View>
      </HeaderSafeArea>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabContainer}>
        <TabButton
          title="Vowels"
          subtitle="സ്വരങ്ങൾ"
          count={enhancedVowels.length}
          icon="ellipse-outline"
          isActive={activeTab === 'vowels'}
          onPress={() => setActiveTab('vowels')}
        />
        <TabButton
          title="Consonants"
          subtitle="വ്യഞ്ജനങ്ങൾ"
          count={enhancedConsonants.length}
          icon="square-outline"
          isActive={activeTab === 'consonants'}
          onPress={() => setActiveTab('consonants')}
        />
        <TabButton
          title="Numbers"
          subtitle="സംഖ്യകൾ"
          count={malayalamNumbers.length}
          icon="calculator-outline"
          isActive={activeTab === 'numbers'}
          onPress={() => setActiveTab('numbers')}
        />
        <TabButton
          title="Conjuncts"
          subtitle="സംയുക്തങ്ങൾ"
          count={conjuncts.length}
          icon="link-outline"
          isActive={activeTab === 'conjuncts'}
          onPress={() => setActiveTab('conjuncts')}
        />
        <TabButton
          title="Practice"
          subtitle="പരിശീലനം"
          count={completedLetters.size}
          icon="school-outline"
          isActive={(activeTab as TabType) === 'practice'}
          onPress={() => setActiveTab('practice')}
        />
      </ScrollView>

      <ScrollView style={styles.lettersContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.lettersGrid}>
          {getCurrentLetters().map((letter) => (
            <EnhancedLetterCard
              key={letter.id}
              letter={letter}
              onPress={handleLetterPress}
              isCompleted={completedLetters.has(letter.id)}
            />
          ))}
        </View>
      </ScrollView>

      <Modal
        visible={selectedLetter !== null}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        {selectedLetter && (
          <LetterDetailView
            letter={selectedLetter}
            onClose={() => setSelectedLetter(null)}
            onPractice={handlePractice}
            onQuiz={() => {
              setSelectedLetter(null);
              setShowQuiz(true);
            }}
          />
        )}
      </Modal>

      <Modal
        visible={showQuiz}
        animationType="slide"
        presentationStyle="fullScreen"
      >
        <LetterQuiz
          letters={getCurrentLetters()}
          onComplete={handleQuizComplete}
          onClose={() => setShowQuiz(false)}
        />
      </Modal>
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContent: {
    flex: 1,
    alignItems: 'center',
    marginLeft: -24, // Compensate for back button width
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 18,
    color: '#ecf0f1',
    marginBottom: 3,
  },
  headerTransliteration: {
    fontSize: 14,
    color: '#bdc3c7',
    fontStyle: 'italic',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 8,
    backgroundColor: '#ecf0f1',
  },
  activeTab: {
    backgroundColor: '#3498db',
  },
  tabText: {
    fontSize: 12,
    color: '#7f8c8d',
    textAlign: 'center',
  },
  activeTabText: {
    color: 'white',
    fontWeight: 'bold',
  },
  selectedLetterContainer: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  selectedMalayalam: {
    fontSize: 48,
    color: '#e74c3c',
    marginBottom: 10,
  },
  selectedTransliteration: {
    fontSize: 24,
    color: '#2c3e50',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  selectedType: {
    fontSize: 16,
    color: '#7f8c8d',
    textTransform: 'capitalize',
  },
  lettersContainer: {
    flex: 1,
    padding: 20,
  },
  lettersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  letterCard: {
    width: '22%',
    aspectRatio: 1,
    backgroundColor: 'white',
    marginBottom: 15,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  malayalamLetter: {
    fontSize: 24,
    color: '#e74c3c',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  transliteration: {
    fontSize: 12,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 2,
  },
  letterType: {
    fontSize: 10,
    color: '#95a5a6',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  completedCard: {
    backgroundColor: '#d5f4e6',
    borderWidth: 2,
    borderColor: '#2ecc71',
  },
  completedBadge: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: '#2ecc71',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  difficultyIndicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 4,
    height: '100%',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  tabSubtext: {
    fontSize: 10,
    color: '#95a5a6',
    textAlign: 'center',
    marginTop: 2,
  },
  activeTabSubtext: {
    color: '#ecf0f1',
  },
  countBadge: {
    backgroundColor: '#bdc3c7',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginTop: 5,
  },
  activeCountBadge: {
    backgroundColor: '#ecf0f1',
  },
  countText: {
    fontSize: 10,
    color: '#2c3e50',
    fontWeight: 'bold',
  },
  activeCountText: {
    color: '#3498db',
  },
  practiceContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  practiceModesContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  modeButton: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 15,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modeButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  modeButtonText: {
    flex: 1,
    marginLeft: 15,
  },
  modeButtonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 2,
  },
  modeButtonSubtitle: {
    fontSize: 14,
    color: '#7f8c8d',
  },
});