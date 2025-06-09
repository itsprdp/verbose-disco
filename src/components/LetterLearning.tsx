import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { EnhancedMalayalamLetter } from '../data/enhancedLetters';
import { SafeAreaWrapper, HeaderSafeArea } from './SafeAreaWrapper';

interface LetterDetailViewProps {
  letter: EnhancedMalayalamLetter;
  onClose: () => void;
  onPractice: () => void;
  onQuiz: () => void;
}

export const LetterDetailView: React.FC<LetterDetailViewProps> = ({
  letter,
  onClose,
  onPractice,
  onQuiz
}) => {
  const [activeTab, setActiveTab] = useState<'info' | 'examples' | 'practice'>('info');

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return '#2ecc71';
      case 'intermediate': return '#f39c12';
      case 'advanced': return '#e74c3c';
      default: return '#95a5a6';
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'info':
        return (
          <ScrollView style={styles.tabContent} showsVerticalScrollIndicator={false}>
            <View style={styles.letterDisplay}>
              <Text style={styles.bigLetter}>{letter.malayalam}</Text>
              <Text style={styles.bigTransliteration}>{letter.transliteration}</Text>
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.sectionTitle}>Pronunciation</Text>
              <Text style={styles.pronunciationText}>{letter.pronunciation}</Text>
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.sectionTitle}>Description</Text>
              <Text style={styles.descriptionText}>{letter.description}</Text>
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.sectionTitle}>Formation Steps</Text>
              {letter.formationSteps.map((step, index) => (
                <View key={index} style={styles.stepItem}>
                  <View style={styles.stepNumber}>
                    <Text style={styles.stepNumberText}>{index + 1}</Text>
                  </View>
                  <Text style={styles.stepText}>{step}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        );

      case 'examples':
        return (
          <ScrollView style={styles.tabContent} showsVerticalScrollIndicator={false}>
            <Text style={styles.sectionTitle}>Word Examples</Text>
            {letter.examples.map((example, index) => (
              <View key={index} style={styles.exampleCard}>
                <Text style={styles.exampleMalayalam}>{example.word}</Text>
                <Text style={styles.exampleTransliteration}>{example.transliteration}</Text>
                <Text style={styles.exampleEnglish}>{example.english}</Text>
              </View>
            ))}
          </ScrollView>
        );

      case 'practice':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.sectionTitle}>Practice Options</Text>
            
            <TouchableOpacity style={styles.practiceButton} onPress={onPractice}>
              <View style={styles.practiceButtonContent}>
                <Ionicons name="create-outline" size={24} color="#3498db" />
                <View>
                  <Text style={styles.practiceButtonTitle}>Letter Tracing</Text>
                  <Text style={styles.practiceButtonSubtitle}>Practice writing this letter</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#bdc3c7" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.practiceButton}>
              <View style={styles.practiceButtonContent}>
                <Ionicons name="volume-high-outline" size={24} color="#e74c3c" />
                <View>
                  <Text style={styles.practiceButtonTitle}>Pronunciation</Text>
                  <Text style={styles.practiceButtonSubtitle}>Listen and repeat</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#bdc3c7" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.practiceButton} onPress={onQuiz}>
              <View style={styles.practiceButtonContent}>
                <Ionicons name="help-circle-outline" size={24} color="#f39c12" />
                <View>
                  <Text style={styles.practiceButtonTitle}>Quick Quiz</Text>
                  <Text style={styles.practiceButtonSubtitle}>Test your knowledge</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#bdc3c7" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.practiceButton}>
              <View style={styles.practiceButtonContent}>
                <Ionicons name="search-outline" size={24} color="#9b59b6" />
                <View>
                  <Text style={styles.practiceButtonTitle}>Find in Words</Text>
                  <Text style={styles.practiceButtonSubtitle}>Identify this letter in words</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#bdc3c7" />
              </View>
            </TouchableOpacity>
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaWrapper backgroundColor="#f8f9fa" headerColor="#e74c3c">
      <HeaderSafeArea backgroundColor="#e74c3c">
        <View style={styles.detailHeaderRow}>
          <TouchableOpacity style={styles.headerCloseButton} onPress={onClose}>
            <Ionicons name="close" size={24} color="white" />
          </TouchableOpacity>
          
          <View style={styles.detailHeaderInfo}>
            <Text style={styles.detailHeaderLetter}>{letter.malayalam}</Text>
            <Text style={styles.detailHeaderTransliteration}>{letter.transliteration}</Text>
          </View>

          <View style={[styles.detailDifficultyBadge, { backgroundColor: getDifficultyColor(letter.difficulty) }]}>
            <Text style={styles.detailDifficultyText}>{letter.difficulty}</Text>
          </View>
        </View>
      </HeaderSafeArea>

      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'info' && styles.activeTab]}
          onPress={() => setActiveTab('info')}
        >
          <Text style={[styles.tabText, activeTab === 'info' && styles.activeTabText]}>Info</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'examples' && styles.activeTab]}
          onPress={() => setActiveTab('examples')}
        >
          <Text style={[styles.tabText, activeTab === 'examples' && styles.activeTabText]}>Examples</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'practice' && styles.activeTab]}
          onPress={() => setActiveTab('practice')}
        >
          <Text style={[styles.tabText, activeTab === 'practice' && styles.activeTabText]}>Practice</Text>
        </TouchableOpacity>
      </View>

      {renderTabContent()}
    </SafeAreaWrapper>
  );
};

interface LetterProgressProps {
  completed: number;
  total: number;
  category: string;
}

export const LetterProgress: React.FC<LetterProgressProps> = ({ completed, total, category }) => {
  const percentage = (completed / total) * 100;

  return (
    <View style={styles.progressContainer}>
      <View style={styles.progressHeader}>
        <Text style={styles.progressTitle}>{category} Progress</Text>
        <Text style={styles.progressStats}>{completed}/{total}</Text>
      </View>
      <View style={styles.progressBarBg}>
        <View style={[styles.progressBarFill, { width: `${percentage}%` }]} />
      </View>
      <Text style={styles.progressPercentage}>{Math.round(percentage)}% Complete</Text>
    </View>
  );
};

interface LetterQuizProps {
  letters: EnhancedMalayalamLetter[];
  onComplete: (score: number) => void;
  onClose: () => void;
}

export const LetterQuiz: React.FC<LetterQuizProps> = ({ letters, onComplete, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const questions = letters.slice(0, 5).map((letter, index) => ({
    question: `What is the transliteration of "${letter.malayalam}"?`,
    correct: letter.transliteration,
    options: [
      letter.transliteration,
      letters[(index + 1) % letters.length]?.transliteration || 'ka',
      letters[(index + 2) % letters.length]?.transliteration || 'ma',
      letters[(index + 3) % letters.length]?.transliteration || 'pa'
    ].sort(() => Math.random() - 0.5)
  }));

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  if (showResult) {
    return (
      <SafeAreaWrapper backgroundColor="#f8f9fa" headerColor="#27ae60">
        <HeaderSafeArea backgroundColor="#27ae60">
          <View style={styles.quizHeaderRow}>
            <View style={styles.quizHeaderContent}>
              <Text style={styles.quizHeaderTitle}>Quiz Complete!</Text>
              <Text style={styles.quizHeaderSubtitle}>ക്വിസ് പൂർത്തിയായി!</Text>
            </View>
            <TouchableOpacity style={styles.headerCloseButton} onPress={onClose}>
              <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </HeaderSafeArea>
        
        <View style={styles.resultContainer}>
          <Text style={styles.resultScore}>{score}/{questions.length}</Text>
          <Text style={styles.resultPercentage}>
            {Math.round((score / questions.length) * 100)}%
          </Text>
          <Text style={styles.resultMessage}>
            {score === questions.length ? 'Perfect! 🎉' : 
             score >= questions.length * 0.8 ? 'Great job! 👏' :
             score >= questions.length * 0.6 ? 'Good effort! 👍' : 'Keep practicing! 💪'}
          </Text>
        </View>

        <TouchableOpacity style={styles.completeButton} onPress={() => onComplete(score)}>
          <Text style={styles.completeButtonText}>Continue Learning</Text>
        </TouchableOpacity>
      </SafeAreaWrapper>
    );
  }

  return (
    <SafeAreaWrapper backgroundColor="#f8f9fa" headerColor="#3498db">
      <HeaderSafeArea backgroundColor="#3498db">
        <View style={styles.quizHeaderRow}>
          <View style={styles.quizHeaderContent}>
            <Text style={styles.quizHeaderTitle}>Letter Quiz</Text>
            <Text style={styles.quizHeaderSubtitle}>അക്ഷര ക്വിസ്</Text>
            <Text style={styles.quizHeaderProgress}>{currentQuestion + 1}/{questions.length}</Text>
          </View>
          <TouchableOpacity style={styles.headerCloseButton} onPress={onClose}>
            <Ionicons name="close" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </HeaderSafeArea>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
        
        <View style={styles.optionsContainer}>
          {questions[currentQuestion].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedAnswer === option && (
                  option === questions[currentQuestion].correct 
                    ? styles.correctOption 
                    : styles.incorrectOption
                )
              ]}
              onPress={() => handleAnswer(option)}
              disabled={selectedAnswer !== null}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
  },
  closeButton: {
    padding: 8,
  },
  headerInfo: {
    flex: 1,
    alignItems: 'center',
  },
  headerLetter: {
    fontSize: 48,
    color: '#e74c3c',
    fontWeight: 'bold',
  },
  headerTransliteration: {
    fontSize: 20,
    color: '#2c3e50',
    marginTop: 5,
  },
  difficultyBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  difficultyText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#f8f9fa',
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: 'white',
    borderBottomWidth: 3,
    borderBottomColor: '#3498db',
  },
  tabText: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  activeTabText: {
    color: '#3498db',
    fontWeight: 'bold',
  },
  tabContent: {
    flex: 1,
    padding: 20,
  },
  letterDisplay: {
    alignItems: 'center',
    marginBottom: 30,
    padding: 20,
    backgroundColor: '#f8f9fa',
    borderRadius: 15,
  },
  bigLetter: {
    fontSize: 80,
    color: '#e74c3c',
    fontWeight: 'bold',
  },
  bigTransliteration: {
    fontSize: 24,
    color: '#2c3e50',
    marginTop: 10,
  },
  infoSection: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  pronunciationText: {
    fontSize: 16,
    color: '#34495e',
    fontStyle: 'italic',
    lineHeight: 24,
  },
  descriptionText: {
    fontSize: 16,
    color: '#34495e',
    lineHeight: 24,
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  stepNumber: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  stepNumberText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  stepText: {
    flex: 1,
    fontSize: 16,
    color: '#34495e',
    lineHeight: 24,
  },
  exampleCard: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  exampleMalayalam: {
    fontSize: 24,
    color: '#e74c3c',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  exampleTransliteration: {
    fontSize: 16,
    color: '#7f8c8d',
    fontStyle: 'italic',
    marginBottom: 5,
  },
  exampleEnglish: {
    fontSize: 16,
    color: '#2c3e50',
  },
  practiceButton: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  practiceButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  practiceButtonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginLeft: 15,
    flex: 1,
  },
  practiceButtonSubtitle: {
    fontSize: 14,
    color: '#7f8c8d',
    marginLeft: 15,
    flex: 1,
  },
  progressContainer: {
    backgroundColor: 'white',
    padding: 20,
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
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  progressTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  progressStats: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  progressBarBg: {
    height: 8,
    backgroundColor: '#ecf0f1',
    borderRadius: 4,
    marginBottom: 10,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#2ecc71',
    borderRadius: 4,
  },
  progressPercentage: {
    fontSize: 14,
    color: '#27ae60',
    textAlign: 'center',
  },
  quizContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  quizHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
  },
  quizHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quizHeaderContent: {
    flex: 1,
    alignItems: 'center',
    marginRight: 24,
  },
  quizHeaderTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  quizHeaderSubtitle: {
    fontSize: 16,
    color: '#ecf0f1',
    marginBottom: 5,
  },
  quizHeaderProgress: {
    fontSize: 14,
    color: '#bdc3c7',
  },
  headerCloseButton: {
    padding: 4,
  },
  detailHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailHeaderInfo: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 24,
  },
  detailHeaderLetter: {
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailHeaderTransliteration: {
    fontSize: 20,
    color: '#ecf0f1',
  },
  detailDifficultyBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  detailDifficultyText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  quizTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  quizProgress: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  questionContainer: {
    flex: 1,
    padding: 20,
  },
  questionText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 40,
  },
  optionsContainer: {
    flex: 1,
  },
  optionButton: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  correctOption: {
    backgroundColor: '#d5f4e6',
    borderColor: '#2ecc71',
  },
  incorrectOption: {
    backgroundColor: '#fadbd8',
    borderColor: '#e74c3c',
  },
  optionText: {
    fontSize: 18,
    color: '#2c3e50',
    textAlign: 'center',
    fontWeight: '600',
  },
  resultContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  resultScore: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  resultPercentage: {
    fontSize: 24,
    color: '#3498db',
    marginBottom: 20,
  },
  resultMessage: {
    fontSize: 18,
    color: '#7f8c8d',
    textAlign: 'center',
  },
  completeButton: {
    backgroundColor: '#3498db',
    padding: 20,
    margin: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  completeButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});