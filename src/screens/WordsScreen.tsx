import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { wordsByCategory, availableCategories } from '../data/basicWords';
import { MalayalamWord } from '../types';
import { SafeAreaWrapper, HeaderSafeArea } from '../components/SafeAreaWrapper';

interface WordCardProps {
  word: MalayalamWord;
  onPress: (word: MalayalamWord) => void;
}

const WordCard: React.FC<WordCardProps> = ({ word, onPress }) => (
  <TouchableOpacity style={styles.wordCard} onPress={() => onPress(word)}>
    <Text style={styles.malayalamWord}>{word.malayalam}</Text>
    <Text style={styles.transliteration}>{word.transliteration}</Text>
    <Text style={styles.english}>{word.english}</Text>
  </TouchableOpacity>
);

interface CategoryTabProps {
  category: string;
  isActive: boolean;
  onPress: () => void;
}

const CategoryTab: React.FC<CategoryTabProps> = ({ category, isActive, onPress }) => (
  <TouchableOpacity 
    style={[styles.categoryTab, isActive && styles.activeCategoryTab]} 
    onPress={onPress}
  >
    <Text style={[styles.categoryTabText, isActive && styles.activeCategoryTabText]}>
      {category}
    </Text>
  </TouchableOpacity>
);

export default function WordsScreen({ navigation }: { navigation: any }) {
  const [activeCategory, setActiveCategory] = useState<string>('family');
  const [selectedWord, setSelectedWord] = useState<MalayalamWord | null>(null);

  const categories = availableCategories;

  const getCurrentWords = () => {
    return wordsByCategory[activeCategory as keyof typeof wordsByCategory] || [];
  };

  const handleWordPress = (word: MalayalamWord) => {
    setSelectedWord(word);
  };

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
            <Text style={styles.headerTitle}>Vocabulary</Text>
            <Text style={styles.headerSubtitle}>പദസമ്പത്ത്</Text>
            <Text style={styles.headerTransliteration}>padasampatthu</Text>
          </View>
        </View>
      </HeaderSafeArea>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
        {categories.map((category) => (
          <CategoryTab
            key={category}
            category={category}
            isActive={activeCategory === category}
            onPress={() => setActiveCategory(category)}
          />
        ))}
      </ScrollView>

      {selectedWord && (
        <View style={styles.selectedWordContainer}>
          <TouchableOpacity 
            style={styles.closeButton}
            onPress={() => setSelectedWord(null)}
          >
            <Ionicons name="close" size={20} color="#7f8c8d" />
          </TouchableOpacity>
          <Text style={styles.selectedMalayalam}>{selectedWord.malayalam}</Text>
          <Text style={styles.selectedTransliteration}>{selectedWord.transliteration}</Text>
          <Text style={styles.selectedEnglish}>{selectedWord.english}</Text>
          <View style={styles.selectedWordMeta}>
            <Text style={styles.selectedCategory}>{selectedWord.category}</Text>
            <Text style={styles.selectedDifficulty}>{selectedWord.difficulty}</Text>
          </View>
        </View>
      )}

      <ScrollView style={styles.wordsContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>
          {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Words
        </Text>
        <View style={styles.wordsGrid}>
          {getCurrentWords().map((word) => (
            <WordCard
              key={word.id}
              word={word}
              onPress={handleWordPress}
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
  categoryContainer: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  categoryTab: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#ecf0f1',
  },
  activeCategoryTab: {
    backgroundColor: '#3498db',
  },
  categoryTabText: {
    fontSize: 14,
    color: '#7f8c8d',
    textTransform: 'capitalize',
  },
  activeCategoryTabText: {
    color: 'white',
    fontWeight: 'bold',
  },
  selectedWordContainer: {
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
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  selectedMalayalam: {
    fontSize: 36,
    color: '#e74c3c',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  selectedTransliteration: {
    fontSize: 20,
    color: '#2c3e50',
    marginBottom: 10,
    fontStyle: 'italic',
  },
  selectedEnglish: {
    fontSize: 24,
    color: '#2c3e50',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  selectedWordMeta: {
    flexDirection: 'row',
    gap: 15,
  },
  selectedCategory: {
    fontSize: 14,
    color: '#3498db',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  selectedDifficulty: {
    fontSize: 14,
    color: '#e67e22',
    textTransform: 'uppercase',
  },
  wordsContainer: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  wordsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  wordCard: {
    width: '48%',
    backgroundColor: 'white',
    marginBottom: 15,
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  malayalamWord: {
    fontSize: 24,
    color: '#e74c3c',
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  transliteration: {
    fontSize: 14,
    color: '#7f8c8d',
    fontStyle: 'italic',
    marginBottom: 5,
    textAlign: 'center',
  },
  english: {
    fontSize: 16,
    color: '#2c3e50',
    fontWeight: '600',
    textAlign: 'center',
  },
});