import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { basicWords } from '../data/basicWords';
import { SafeAreaWrapper, HeaderSafeArea } from '../components/SafeAreaWrapper';

export default function FlashcardsScreen({ navigation }: { navigation: any }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [flipAnimation] = useState(new Animated.Value(0));

  const currentWord = basicWords[currentIndex];

  const flipCard = () => {
    if (isFlipped) {
      Animated.timing(flipAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(flipAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
    setIsFlipped(!isFlipped);
  };

  const nextCard = () => {
    if (currentIndex < basicWords.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
      flipAnimation.setValue(0);
    }
  };

  const previousCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
      flipAnimation.setValue(0);
    }
  };

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '360deg'],
  });

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
            <Text style={styles.headerTitle}>Flashcards</Text>
            <Text style={styles.headerSubtitle}>ഫ്ലാഷ്കാർഡുകൾ</Text>
            <Text style={styles.progress}>
              {currentIndex + 1} of {basicWords.length}
            </Text>
          </View>
        </View>
      </HeaderSafeArea>

      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.cardWrapper} onPress={flipCard}>
          <Animated.View 
            style={[
              styles.flashcard,
              styles.cardFront,
              { transform: [{ rotateY: frontInterpolate }] }
            ]}
          >
            <Text style={styles.malayalamText}>{currentWord.malayalam}</Text>
            <Text style={styles.transliterationText}>{currentWord.transliteration}</Text>
            <Text style={styles.categoryText}>{currentWord.category}</Text>
            <Text style={styles.tapHint}>Tap to reveal meaning</Text>
          </Animated.View>

          <Animated.View 
            style={[
              styles.flashcard,
              styles.cardBack,
              { transform: [{ rotateY: backInterpolate }] }
            ]}
          >
            <Text style={styles.englishText}>{currentWord.english}</Text>
            <Text style={styles.malayalamTextSmall}>{currentWord.malayalam}</Text>
            <Text style={styles.transliterationTextSmall}>{currentWord.transliteration}</Text>
            <Text style={styles.tapHint}>Tap to go back</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity 
          style={[styles.controlButton, currentIndex === 0 && styles.disabledButton]}
          onPress={previousCard}
          disabled={currentIndex === 0}
        >
          <Ionicons name="chevron-back" size={24} color={currentIndex === 0 ? "#bdc3c7" : "#3498db"} />
          <Text style={[styles.controlText, currentIndex === 0 && styles.disabledText]}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.flipButton} onPress={flipCard}>
          <Ionicons name="refresh" size={24} color="#e74c3c" />
          <Text style={styles.flipText}>Flip</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.controlButton, currentIndex === basicWords.length - 1 && styles.disabledButton]}
          onPress={nextCard}
          disabled={currentIndex === basicWords.length - 1}
        >
          <Ionicons name="chevron-forward" size={24} color={currentIndex === basicWords.length - 1 ? "#bdc3c7" : "#3498db"} />
          <Text style={[styles.controlText, currentIndex === basicWords.length - 1 && styles.disabledText]}>Next</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.progressBar}>
        <View 
          style={[
            styles.progressFill, 
            { width: `${((currentIndex + 1) / basicWords.length) * 100}%` }
          ]} 
        />
      </View>
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
    fontSize: 16,
    color: '#ecf0f1',
    marginBottom: 10,
  },
  progress: {
    fontSize: 14,
    color: '#bdc3c7',
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  cardWrapper: {
    width: '100%',
    height: 300,
  },
  flashcard: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    backfaceVisibility: 'hidden',
  },
  cardFront: {
    backgroundColor: '#ecf0f1',
  },
  cardBack: {
    backgroundColor: '#2ecc71',
  },
  malayalamText: {
    fontSize: 48,
    color: '#e74c3c',
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  transliterationText: {
    fontSize: 24,
    color: '#2c3e50',
    marginBottom: 10,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  categoryText: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 20,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  englishText: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  malayalamTextSmall: {
    fontSize: 24,
    color: 'white',
    marginBottom: 5,
    textAlign: 'center',
  },
  transliterationTextSmall: {
    fontSize: 16,
    color: '#ecf0f1',
    marginBottom: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  tapHint: {
    fontSize: 14,
    color: '#95a5a6',
    textAlign: 'center',
    position: 'absolute',
    bottom: 20,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  controlButton: {
    alignItems: 'center',
    padding: 10,
  },
  controlText: {
    fontSize: 14,
    color: '#3498db',
    marginTop: 5,
  },
  disabledButton: {
    opacity: 0.5,
  },
  disabledText: {
    color: '#bdc3c7',
  },
  flipButton: {
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  flipText: {
    fontSize: 12,
    color: '#e74c3c',
    marginTop: 5,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#ecf0f1',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 2,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2ecc71',
    borderRadius: 2,
  },
});