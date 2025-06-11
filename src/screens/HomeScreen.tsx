import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaWrapper, HeaderSafeArea } from '../components/SafeAreaWrapper';
import { getDeviceInfo } from '../utils/deviceUtils';
import { useProgress } from '../contexts/ProgressContext';
import { enhancedVowels, enhancedConsonants, malayalamNumbers, conjuncts, malayalamSymbols } from '../data/enhancedLetters';
import { basicWords } from '../data/basicWords';
import { LoadingSpinner } from '../components/LoadingSpinner';

interface LessonCardProps {
  title: string;
  titleMalayalam: string;
  titleTransliteration: string;
  icon: string;
  progress: number;
  onPress: () => void;
}

const LessonCard: React.FC<LessonCardProps> = ({ 
  title, 
  titleMalayalam, 
  titleTransliteration, 
  icon, 
  progress, 
  onPress 
}) => (
  <TouchableOpacity style={styles.lessonCard} onPress={onPress}>
    <View style={styles.cardHeader}>
      <Ionicons name={icon as any} size={24} color="#3498db" />
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
      </View>
    </View>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardTitleMalayalam}>{titleMalayalam}</Text>
    <Text style={styles.cardTitleTransliteration}>{titleTransliteration}</Text>
  </TouchableOpacity>
);

export default function HomeScreen({ navigation }: { navigation: any }) {
  const deviceInfo = getDeviceInfo();
  const { progress, loading } = useProgress();

  if (loading) {
    return (
      <SafeAreaWrapper backgroundColor="#f8f9fa" headerColor="#3498db">
        <LoadingSpinner message="Loading your progress..." />
      </SafeAreaWrapper>
    );
  }

  const totalLetters = enhancedVowels.length + enhancedConsonants.length + malayalamNumbers.length + conjuncts.length + malayalamSymbols.length;
  const completedLetters = progress.completedLetters.length;
  const lettersProgress = totalLetters > 0 ? Math.round((completedLetters / totalLetters) * 100) : 0;

  const totalWords = basicWords.length;
  const completedWords = progress.completedWords.length;
  const wordsProgress = totalWords > 0 ? Math.round((completedWords / totalWords) * 100) : 0;
  
  const lessons = [
    {
      id: 'letters',
      title: 'Learn Letters',
      titleMalayalam: 'അക്ഷരങ്ങൾ പഠിക്കുക',
      titleTransliteration: 'aksharangal padhikkuka',
      icon: 'text',
      progress: lettersProgress,
      screen: 'Letters'
    },
    {
      id: 'words',
      title: 'Vocabulary',
      titleMalayalam: 'പദസമ്പത്ത്',
      titleTransliteration: 'padasampatthu',
      icon: 'book',
      progress: wordsProgress,
      screen: 'Words'
    },
    {
      id: 'grammar',
      title: 'Grammar',
      titleMalayalam: 'വ്യാകരണം',
      titleTransliteration: 'vyaakaranam',
      icon: 'library',
      progress: 0,
      screen: 'Grammar'
    },
    {
      id: 'flashcards',
      title: 'Flashcards',
      titleMalayalam: 'ഫ്ലാഷ്കാർഡുകൾ',
      titleTransliteration: 'flashcarddukal',
      icon: 'card',
      progress: 0,
      screen: 'Flashcards'
    }
  ];

  return (
    <SafeAreaWrapper backgroundColor="#f8f9fa" headerColor="#3498db">
      <HeaderSafeArea backgroundColor="#3498db">
        <View style={styles.headerContent}>
          <Text style={styles.greeting}>നമസ്കാരം!</Text>
          <Text style={styles.greetingTransliteration}>Namaskaram! (Hello!)</Text>
          <Text style={styles.subtitle}>Ready to learn Malayalam?</Text>
          {deviceInfo.hasDynamicIsland && (
            <Text style={styles.deviceInfo}>Optimized for Dynamic Island</Text>
          )}
        </View>
      </HeaderSafeArea>

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.lessonsContainer}>
          <Text style={styles.sectionTitle}>Start Learning</Text>
          {lessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              title={lesson.title}
              titleMalayalam={lesson.titleMalayalam}
              titleTransliteration={lesson.titleTransliteration}
              icon={lesson.icon}
              progress={lesson.progress}
              onPress={() => navigation.navigate(lesson.screen)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContainer: {
    flex: 1,
  },
  headerContent: {
    alignItems: 'center',
    paddingTop: 10,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  greetingTransliteration: {
    fontSize: 16,
    color: '#ecf0f1',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
  },
  deviceInfo: {
    fontSize: 12,
    color: '#bdc3c7',
    marginTop: 8,
    fontStyle: 'italic',
  },
  lessonsContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  lessonCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
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
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  progressContainer: {
    flex: 1,
    height: 4,
    backgroundColor: '#ecf0f1',
    marginLeft: 10,
    borderRadius: 2,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#2ecc71',
    borderRadius: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  cardTitleMalayalam: {
    fontSize: 16,
    color: '#e74c3c',
    marginBottom: 3,
  },
  cardTitleTransliteration: {
    fontSize: 14,
    color: '#7f8c8d',
    fontStyle: 'italic',
  },
});