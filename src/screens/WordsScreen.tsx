import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';
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

interface WordDetailViewProps {
  word: MalayalamWord;
  onClose: () => void;
}

const WordDetailView: React.FC<WordDetailViewProps> = ({ word, onClose }) => {
  const [activeTab, setActiveTab] = useState<'info' | 'examples' | 'related'>('info');

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return '#2ecc71';
      case 'intermediate': return '#f39c12';
      case 'advanced': return '#e74c3c';
      default: return '#95a5a6';
    }
  };

  const getExampleSentences = (word: MalayalamWord) => {
    // Generate contextual example sentences based on the word
    const examples = [
      {
        malayalam: `ഞാൻ ${word.malayalam} കാണുന്നു`,
        transliteration: `njaan ${word.transliteration} kaanunnu`,
        english: `I see ${word.english}`
      },
      {
        malayalam: `എന്റെ ${word.malayalam} വളരെ നല്ലതാണ്`,
        transliteration: `ente ${word.transliteration} valare nallathaanu`,
        english: `My ${word.english} is very good`
      }
    ];

    // Add category-specific examples
    if (word.category === 'family') {
      examples.push({
        malayalam: `എന്റെ ${word.malayalam} വീട്ടിലുണ്ട്`,
        transliteration: `ente ${word.transliteration} veettilundu`,
        english: `My ${word.english} is at home`
      });
    } else if (word.category === 'food') {
      examples.push({
        malayalam: `${word.malayalam} വളരെ രുചികരമാണ്`,
        transliteration: `${word.transliteration} valare ruchikaramaanu`,
        english: `${word.english} is very tasty`
      });
    } else if (word.category === 'places') {
      examples.push({
        malayalam: `ഞങ്ങൾ ${word.malayalam} പോകുന്നു`,
        transliteration: `njangal ${word.transliteration} pokunnu`,
        english: `We are going to ${word.english}`
      });
    }

    return examples;
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'info':
        return (
          <ScrollView style={styles.tabContent} showsVerticalScrollIndicator={false}>
            <View style={styles.wordDisplay}>
              <Text style={styles.bigWord}>{word.malayalam}</Text>
              <Text style={styles.bigTransliteration}>{word.transliteration}</Text>
              <Text style={styles.bigEnglish}>{word.english}</Text>
            </View>
          </ScrollView>
        );

      case 'examples':
        return (
          <ScrollView style={styles.tabContent} showsVerticalScrollIndicator={false}>
            <Text style={styles.sectionTitle}>Example Sentences</Text>
            {getExampleSentences(word).map((example, index) => (
              <View key={index} style={styles.exampleCard}>
                <Text style={styles.exampleMalayalam}>{example.malayalam}</Text>
                <Text style={styles.exampleTransliteration}>{example.transliteration}</Text>
                <Text style={styles.exampleEnglish}>{example.english}</Text>
              </View>
            ))}
          </ScrollView>
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaWrapper backgroundColor="#f8f9fa" headerColor="#3498db">
      <HeaderSafeArea backgroundColor="#3498db">
        <View style={styles.detailHeaderRow}>
          <TouchableOpacity style={styles.headerCloseButton} onPress={onClose}>
            <Ionicons name="close" size={24} color="white" />
          </TouchableOpacity>
          
          <View style={styles.detailHeaderInfo}>
            <Text style={styles.detailHeaderWord}>{word.malayalam}</Text>
            <Text style={styles.detailHeaderTransliteration}>{word.transliteration}</Text>
          </View>

          <View style={[styles.detailDifficultyBadge, { backgroundColor: getDifficultyColor(word.difficulty) }]}>
            <Text style={styles.detailDifficultyText}>{word.difficulty}</Text>
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

      </View>

      {renderTabContent()}
    </SafeAreaWrapper>
  );
};


export default function WordsScreen({ navigation }: { navigation: any }) {
  const [activeCategory, setActiveCategory] = useState<string>('family');
  const [selectedWord, setSelectedWord] = useState<MalayalamWord | null>(null);

  const categories = availableCategories;

  const getCurrentWords = () => {
    return wordsByCategory[activeCategory as keyof typeof wordsByCategory] || [];
  };

  const getCurrentWordCount = (category: string) => {
    return wordsByCategory[category as keyof typeof wordsByCategory]?.length || 0;
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

      <View style={styles.compactCategoryContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryScrollContent}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[styles.compactCategoryTab, activeCategory === category && styles.activeCompactCategoryTab]}
              onPress={() => setActiveCategory(category)}
            >
              <Text style={[styles.compactCategoryText, activeCategory === category && styles.activeCompactCategoryText]}>
                {category} ({getCurrentWordCount(category)})
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>


      <View style={styles.wordsContentContainer}>
        <ScrollView 
          style={styles.wordsScrollView} 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.wordsContentInner}
        >
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
      </View>

      <Modal
        visible={selectedWord !== null}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        {selectedWord && (
          <WordDetailView
            word={selectedWord}
            onClose={() => setSelectedWord(null)}
          />
        )}
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
  wordsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  wordCard: {
    width: '31%',
    backgroundColor: 'white',
    marginBottom: 8,
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
    minHeight: 80,
    justifyContent: 'center',
  },
  malayalamWord: {
    fontSize: 18,
    color: '#e74c3c',
    fontWeight: 'bold',
    marginBottom: 3,
    textAlign: 'center',
  },
  transliteration: {
    fontSize: 10,
    color: '#7f8c8d',
    fontStyle: 'italic',
    marginBottom: 3,
    textAlign: 'center',
  },
  english: {
    fontSize: 14,
    color: '#2c3e50',
    fontWeight: '600',
    textAlign: 'center',
  },
  compactCategoryContainer: {
    backgroundColor: 'white',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
  },
  categoryScrollContent: {
    paddingHorizontal: 15,
  },
  compactCategoryTab: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    borderRadius: 16,
    backgroundColor: '#f8f9fa',
  },
  activeCompactCategoryTab: {
    backgroundColor: '#3498db',
  },
  compactCategoryText: {
    fontSize: 12,
    color: '#7f8c8d',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  activeCompactCategoryText: {
    color: 'white',
  },
  wordsContentContainer: {
    flex: 1,
  },
  wordsScrollView: {
    flex: 1,
  },
  wordsContentInner: {
    padding: 12,
  },
  // Word Detail View Styles
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
  detailHeaderWord: {
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
  headerCloseButton: {
    padding: 4,
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
  wordDisplay: {
    alignItems: 'center',
    marginBottom: 30,
    padding: 20,
    backgroundColor: '#f8f9fa',
    borderRadius: 15,
  },
  bigWord: {
    fontSize: 80,
    color: '#e74c3c',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bigTransliteration: {
    fontSize: 24,
    color: '#2c3e50',
    marginBottom: 10,
  },
  bigEnglish: {
    fontSize: 32,
    color: '#27ae60',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  exampleCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
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
});