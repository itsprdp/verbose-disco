import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { enhancedVowels, enhancedConsonants, malayalamNumbers, conjuncts, malayalamSymbols, EnhancedMalayalamLetter } from '../data/enhancedLetters';
import { SafeAreaWrapper, HeaderSafeArea } from '../components/SafeAreaWrapper';
import { LetterDetailView, LetterProgress, LetterQuiz } from '../components/LetterLearning';
import { useProgress } from '../contexts/ProgressContext';

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
  const { progress, markLetterCompleted, saveQuizScore, isLetterCompleted } = useProgress();

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

  const handleLetterComplete = async () => {
    if (selectedLetter) {
      await markLetterCompleted(selectedLetter.id);
    }
  };

  const handlePractice = () => {
    setActiveTab('vowels');
  };

  const handleQuizComplete = async (score: number) => {
    await saveQuizScore(`letters_${activeTab}`, score);
    setShowQuiz(false);
    Alert.alert(
      'Quiz Complete!',
      `You scored ${score} out of 5. ${score >= 4 ? 'Excellent work!' : 'Keep practicing!'}`,
      [{ text: 'Continue' }]
    );
  };

  const totalLetters = enhancedVowels.length + enhancedConsonants.length + malayalamNumbers.length + conjuncts.length + malayalamSymbols.length;
  const vowelProgress = enhancedVowels.filter(letter => isLetterCompleted(letter.id)).length;
  const consonantProgress = enhancedConsonants.filter(letter => isLetterCompleted(letter.id)).length;
  const numberProgress = malayalamNumbers.filter(letter => isLetterCompleted(letter.id)).length;
  const conjunctProgress = conjuncts.filter(letter => isLetterCompleted(letter.id)).length;
  const symbolProgress = malayalamSymbols.filter(letter => isLetterCompleted(letter.id)).length;

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
            completed={progress.completedLetters.length} 
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
              title="Letter Recognition"
              subtitle="Practice identifying letters"
              icon="eye-outline"
              color="#e74c3c"
              onPress={() => setShowQuiz(true)}
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
              title="Special Symbols"
              subtitle="Learn special marks and symbols"
              icon="medical-outline"
              color="#34495e"
              onPress={() => setActiveTab('conjuncts')}
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

      <View style={styles.compactTabContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabScrollContent}>
          <TouchableOpacity
            style={[styles.compactTab, activeTab === 'vowels' && styles.activeCompactTab]}
            onPress={() => setActiveTab('vowels')}
          >
            <Text style={[styles.compactTabText, activeTab === 'vowels' && styles.activeCompactTabText]}>
              അ ({enhancedVowels.length})
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.compactTab, activeTab === 'consonants' && styles.activeCompactTab]}
            onPress={() => setActiveTab('consonants')}
          >
            <Text style={[styles.compactTabText, activeTab === 'consonants' && styles.activeCompactTabText]}>
              ക ({enhancedConsonants.length})
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.compactTab, activeTab === 'numbers' && styles.activeCompactTab]}
            onPress={() => setActiveTab('numbers')}
          >
            <Text style={[styles.compactTabText, activeTab === 'numbers' && styles.activeCompactTabText]}>
              ൧ ({malayalamNumbers.length})
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.compactTab, activeTab === 'conjuncts' && styles.activeCompactTab]}
            onPress={() => setActiveTab('conjuncts')}
          >
            <Text style={[styles.compactTabText, activeTab === 'conjuncts' && styles.activeCompactTabText]}>
              ക്ക ({conjuncts.length})
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.compactTab, (activeTab as string) === 'practice' && styles.activeCompactTab]}
            onPress={() => setActiveTab('practice' as TabType)}
          >
            <Ionicons name="school" size={16} color={(activeTab as string) === 'practice' ? 'white' : '#7f8c8d'} />
            <Text style={[styles.compactTabText, (activeTab as string) === 'practice' && styles.activeCompactTabText]}>
              ({progress.completedLetters.length})
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.contentContainer}>
        <ScrollView 
          style={styles.lettersScrollView} 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.lettersContentContainer}
        >
          <View style={styles.lettersGrid}>
            {getCurrentLetters().map((letter) => (
              <EnhancedLetterCard
                key={letter.id}
                letter={letter}
                onPress={handleLetterPress}
                isCompleted={isLetterCompleted(letter.id)}
              />
            ))}
          </View>
        </ScrollView>
      </View>

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
            onComplete={handleLetterComplete}
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
  selectedLetterContainer: {
    backgroundColor: 'white',
    padding: 15,
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 8,
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
  lettersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  letterCard: {
    width: '18%',
    aspectRatio: 0.9,
    backgroundColor: 'white',
    marginBottom: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  malayalamLetter: {
    fontSize: 20,
    color: '#e74c3c',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  transliteration: {
    fontSize: 10,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 1,
  },
  letterType: {
    fontSize: 8,
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
  practiceContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  practiceModesContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
    textAlign: 'center',
  },
  modeButton: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 12,
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
    padding: 15,
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
  compactTabContainer: {
    backgroundColor: 'white',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
  },
  tabScrollContent: {
    paddingHorizontal: 15,
  },
  compactTab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: '#f8f9fa',
    minWidth: 50,
    justifyContent: 'center',
  },
  activeCompactTab: {
    backgroundColor: '#3498db',
  },
  compactTabText: {
    fontSize: 14,
    color: '#7f8c8d',
    fontWeight: '600',
    marginLeft: 4,
  },
  activeCompactTabText: {
    color: 'white',
  },
  contentContainer: {
    flex: 1,
  },
  lettersScrollView: {
    flex: 1,
  },
  lettersContentContainer: {
    padding: 12,
  },
});