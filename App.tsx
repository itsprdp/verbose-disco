import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as ScreenOrientation from 'expo-screen-orientation';
import { getDeviceInfo } from './src/utils/deviceUtils';

import HomeScreen from './src/screens/HomeScreen';
import LettersScreen from './src/screens/LettersScreen';
import WordsScreen from './src/screens/WordsScreen';
import GrammarScreen from './src/screens/GrammarScreen';
import FlashcardsScreen from './src/screens/FlashcardsScreen';
import { ProgressProvider } from './src/contexts/ProgressContext';
import { ErrorBoundary } from './src/components/ErrorBoundary';

const Stack = createStackNavigator();

export default function App() {
  const deviceInfo = getDeviceInfo();

  useEffect(() => {
    // Lock orientation to portrait for better learning experience
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    
    // Log device info for debugging
    if (__DEV__) {
      console.log('Device Info:', {
        deviceName: deviceInfo.deviceName,
        hasDynamicIsland: deviceInfo.hasDynamicIsland,
        hasNotch: deviceInfo.hasNotch,
        statusBarHeight: deviceInfo.statusBarHeight,
        screenDimensions: `${deviceInfo.screenWidth}x${deviceInfo.screenHeight}`,
      });
    }
  }, []);

  // Determine status bar style based on device
  const getStatusBarStyle = () => {
    if (deviceInfo.hasDynamicIsland) {
      return 'auto'; // Let iOS handle Dynamic Island optimally
    } else if (deviceInfo.hasNotch) {
      return 'light'; // Good contrast with blue headers
    }
    return 'auto';
  };

  return (
    <SafeAreaProvider>
      <ErrorBoundary>
        <ProgressProvider>
          <NavigationContainer>
            <Stack.Navigator 
              initialRouteName="Home"
              screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
              }}
            >
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Letters" component={LettersScreen} />
              <Stack.Screen name="Words" component={WordsScreen} />
              <Stack.Screen name="Grammar" component={GrammarScreen} />
              <Stack.Screen name="Flashcards" component={FlashcardsScreen} />
            </Stack.Navigator>
            <StatusBar 
              style={getStatusBarStyle()} 
              backgroundColor="transparent"
              translucent={true}
            />
          </NavigationContainer>
        </ProgressProvider>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}