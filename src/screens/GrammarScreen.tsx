import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { grammarLessons, GrammarLesson, GrammarConcept } from '../data/grammarLessons';
import { SafeAreaWrapper, HeaderSafeArea } from '../components/SafeAreaWrapper';

interface LessonCardProps {
  lesson: GrammarLesson;
  onPress: (lesson: GrammarLesson) => void;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson, onPress }) => {
  const getDifficultyStyle = () => {
    switch (lesson.difficulty) {
      case 'beginner':
        return styles.beginnerBadge;
      case 'intermediate':
        return styles.intermediateBadge;
      case 'advanced':
        return styles.advancedBadge;
      default:
        return styles.beginnerBadge;
    }
  };

  return (
    <TouchableOpacity style={styles.lessonCard} onPress={() => onPress(lesson)}>
      <View style={styles.cardHeader}>
        <Ionicons name="book-outline" size={24} color="#3498db" />
        <View style={[styles.difficultyBadge, getDifficultyStyle()]}>
          <Text style={styles.difficultyText}>{lesson.difficulty}</Text>
        </View>
      </View>
      <Text style={styles.lessonTitle}>{lesson.title}</Text>
      <Text style={styles.lessonTitleMalayalam}>{lesson.titleMalayalam}</Text>
      <Text style={styles.lessonTitleTransliteration}>{lesson.titleTransliteration}</Text>
      <Text style={styles.conceptCount}>{lesson.concepts.length} concepts</Text>
    </TouchableOpacity>
  );
};

interface ConceptDetailProps {
  concept: GrammarConcept;
}

const ConceptDetail: React.FC<ConceptDetailProps> = ({ concept }) => (
  <View style={styles.conceptContainer}>
    <Text style={styles.conceptTitle}>{concept.concept}</Text>
    <Text style={styles.conceptTitleMalayalam}>{concept.conceptMalayalam}</Text>
    <Text style={styles.conceptTitleTransliteration}>{concept.conceptTransliteration}</Text>
    <Text style={styles.explanation}>{concept.explanation}</Text>
    
    <View style={styles.examplesContainer}>
      <Text style={styles.examplesTitle}>Examples:</Text>
      {concept.examples.map((example, index) => (
        <View key={index} style={styles.exampleCard}>
          <Text style={styles.exampleMalayalam}>{example.malayalam}</Text>
          <Text style={styles.exampleTransliteration}>{example.transliteration}</Text>
          <Text style={styles.exampleEnglish}>{example.english}</Text>
          {example.breakdown && (
            <Text style={styles.exampleBreakdown}>💡 {example.breakdown}</Text>
          )}
        </View>
      ))}
    </View>
  </View>
);

export default function GrammarScreen({ navigation }: { navigation: any }) {
  const [selectedLesson, setSelectedLesson] = useState<GrammarLesson | null>(null);

  const handleLessonPress = (lesson: GrammarLesson) => {
    setSelectedLesson(lesson);
  };

  const handleBackToLessons = () => {
    setSelectedLesson(null);
  };

  if (selectedLesson) {
    return (
      <SafeAreaWrapper backgroundColor="#f8f9fa" headerColor="#3498db">
        <HeaderSafeArea backgroundColor="#3498db">
          <View style={styles.headerRow}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={handleBackToLessons}
            >
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.headerContent}>
              <Text style={styles.headerTitle}>{selectedLesson.title}</Text>
              <Text style={styles.headerSubtitle}>{selectedLesson.titleMalayalam}</Text>
              <Text style={styles.headerTransliteration}>{selectedLesson.titleTransliteration}</Text>
            </View>
          </View>
        </HeaderSafeArea>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {selectedLesson.concepts.map((concept, index) => (
            <ConceptDetail key={concept.id} concept={concept} />
          ))}
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
            <Text style={styles.headerTitle}>Grammar Lessons</Text>
            <Text style={styles.headerSubtitle}>വ്യാകരണ പാഠങ്ങൾ</Text>
            <Text style={styles.headerTransliteration}>vyaakarana paathangal</Text>
          </View>
        </View>
      </HeaderSafeArea>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Learn Malayalam Grammar</Text>
        <Text style={styles.sectionDescription}>
          Master the structure and rules of Malayalam language
        </Text>

        {grammarLessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            onPress={handleLessonPress}
          />
        ))}
      </ScrollView>
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
  content: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  sectionDescription: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 20,
    lineHeight: 24,
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  difficultyBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  beginnerBadge: {
    backgroundColor: '#2ecc71',
  },
  intermediateBadge: {
    backgroundColor: '#f39c12',
  },
  advancedBadge: {
    backgroundColor: '#e74c3c',
  },
  difficultyText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  lessonTitleMalayalam: {
    fontSize: 16,
    color: '#e74c3c',
    marginBottom: 3,
  },
  lessonTitleTransliteration: {
    fontSize: 14,
    color: '#7f8c8d',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  conceptCount: {
    fontSize: 14,
    color: '#3498db',
    fontWeight: '600',
  },
  conceptContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  conceptTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  conceptTitleMalayalam: {
    fontSize: 18,
    color: '#e74c3c',
    marginBottom: 3,
  },
  conceptTitleTransliteration: {
    fontSize: 16,
    color: '#7f8c8d',
    fontStyle: 'italic',
    marginBottom: 15,
  },
  explanation: {
    fontSize: 16,
    color: '#34495e',
    lineHeight: 24,
    marginBottom: 20,
  },
  examplesContainer: {
    marginTop: 10,
  },
  examplesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  exampleCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
  },
  exampleMalayalam: {
    fontSize: 18,
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
    marginBottom: 5,
  },
  exampleBreakdown: {
    fontSize: 14,
    color: '#27ae60',
    fontStyle: 'italic',
    marginTop: 5,
  },
});