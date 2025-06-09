import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { malayalamVowels, malayalamConsonants, malayalamNumbers } from '../data/malayalamLetters';
import { MalayalamLetter } from '../types';
import { SafeAreaWrapper, HeaderSafeArea } from '../components/SafeAreaWrapper';

interface LetterCardProps {
  letter: MalayalamLetter;
  onPress: (letter: MalayalamLetter) => void;
}

const LetterCard: React.FC<LetterCardProps> = ({ letter, onPress }) => (
  <TouchableOpacity style={styles.letterCard} onPress={() => onPress(letter)}>
    <Text style={styles.malayalamLetter}>{letter.malayalam}</Text>
    <Text style={styles.transliteration}>{letter.transliteration}</Text>
  </TouchableOpacity>
);

interface TabButtonProps {
  title: string;
  isActive: boolean;
  onPress: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ title, isActive, onPress }) => (
  <TouchableOpacity 
    style={[styles.tabButton, isActive && styles.activeTab]} 
    onPress={onPress}
  >
    <Text style={[styles.tabText, isActive && styles.activeTabText]}>{title}</Text>
  </TouchableOpacity>
);

export default function LettersScreen({ navigation }: { navigation: any }) {
  const [activeTab, setActiveTab] = useState<'vowels' | 'consonants' | 'numbers'>('vowels');
  const [selectedLetter, setSelectedLetter] = useState<MalayalamLetter | null>(null);

  const getCurrentLetters = () => {
    switch (activeTab) {
      case 'vowels':
        return malayalamVowels;
      case 'consonants':
        return malayalamConsonants;
      case 'numbers':
        return malayalamNumbers;
      default:
        return malayalamVowels;
    }
  };

  const handleLetterPress = (letter: MalayalamLetter) => {
    setSelectedLetter(letter);
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
            <Text style={styles.headerTitle}>Malayalam Letters</Text>
            <Text style={styles.headerSubtitle}>മലയാളം അക്ഷരങ്ങൾ</Text>
            <Text style={styles.headerTransliteration}>malayaalam aksharangal</Text>
          </View>
        </View>
      </HeaderSafeArea>

      <View style={styles.tabContainer}>
        <TabButton
          title="Vowels (സ്വരങ്ങൾ)"
          isActive={activeTab === 'vowels'}
          onPress={() => setActiveTab('vowels')}
        />
        <TabButton
          title="Consonants (വ്യഞ്ജനങ്ങൾ)"
          isActive={activeTab === 'consonants'}
          onPress={() => setActiveTab('consonants')}
        />
        <TabButton
          title="Numbers (സംഖ്യകൾ)"
          isActive={activeTab === 'numbers'}
          onPress={() => setActiveTab('numbers')}
        />
      </View>

      {selectedLetter && (
        <View style={styles.selectedLetterContainer}>
          <Text style={styles.selectedMalayalam}>{selectedLetter.malayalam}</Text>
          <Text style={styles.selectedTransliteration}>{selectedLetter.transliteration}</Text>
          <Text style={styles.selectedType}>{selectedLetter.type}</Text>
        </View>
      )}

      <ScrollView style={styles.lettersContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.lettersGrid}>
          {getCurrentLetters().map((letter) => (
            <LetterCard
              key={letter.id}
              letter={letter}
              onPress={handleLetterPress}
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
  },
});