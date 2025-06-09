import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getDeviceInfo, getDynamicIslandOffset, getBottomSafeOffset } from '../utils/deviceUtils';

interface SafeAreaWrapperProps {
  children: React.ReactNode;
  backgroundColor?: string;
  headerColor?: string;
  edges?: ('top' | 'bottom' | 'left' | 'right')[];
  style?: ViewStyle;
  useDynamicIsland?: boolean;
}

export const SafeAreaWrapper: React.FC<SafeAreaWrapperProps> = ({
  children,
  backgroundColor = '#f8f9fa',
  headerColor = '#3498db',
  edges = ['top', 'bottom', 'left', 'right'],
  style,
  useDynamicIsland = true,
}) => {
  const deviceInfo = getDeviceInfo();
  const bottomSafeOffset = getBottomSafeOffset();

  const bottomSafeStyle: ViewStyle = edges.includes('bottom') ? {
    paddingBottom: bottomSafeOffset,
  } : {};

  if (deviceInfo.hasDynamicIsland && useDynamicIsland && edges.includes('top')) {
    // For Dynamic Island devices, create a top section with header color
    return (
      <View style={[styles.container, { backgroundColor }, style]}>
        {/* Dynamic Island area with header color */}
        <View style={[styles.dynamicIslandArea, { backgroundColor: headerColor, height: deviceInfo.statusBarHeight }]} />
        
        <SafeAreaView 
          style={[styles.safeArea]} 
          edges={edges.filter(edge => edge !== 'top')}
        >
          <View style={[styles.content, bottomSafeStyle]}>
            {children}
          </View>
        </SafeAreaView>
      </View>
    );
  } else if ((deviceInfo.hasNotch || deviceInfo.hasDynamicIsland) && useDynamicIsland && edges.includes('top')) {
    // For notch devices, create a top section with header color
    return (
      <View style={[styles.container, { backgroundColor }, style]}>
        {/* Notch area with header color */}
        <View style={[styles.notchArea, { backgroundColor: headerColor, height: deviceInfo.statusBarHeight }]} />
        
        <SafeAreaView 
          style={[styles.safeArea]} 
          edges={edges.filter(edge => edge !== 'top')}
        >
          <View style={[styles.content, bottomSafeStyle]}>
            {children}
          </View>
        </SafeAreaView>
      </View>
    );
  }

  // For standard devices or when not using Dynamic Island handling
  return (
    <SafeAreaView 
      style={[styles.container, { backgroundColor }, style]} 
      edges={edges}
    >
      <View style={[styles.content, bottomSafeStyle]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

// Specific wrapper for headers that work well with Dynamic Island
interface HeaderSafeAreaProps {
  children: React.ReactNode;
  backgroundColor?: string;
  style?: ViewStyle;
}

export const HeaderSafeArea: React.FC<HeaderSafeAreaProps> = ({
  children,
  backgroundColor = '#3498db',
  style,
}) => {
  const deviceInfo = getDeviceInfo();

  // No extra padding needed since SafeAreaWrapper handles the top area
  const headerStyle: ViewStyle = {
    backgroundColor,
  };

  return (
    <View style={[styles.header, headerStyle, style]}>
      {children}
    </View>
  );
};

// Status bar height utility component
export const StatusBarSpacer: React.FC<{ backgroundColor?: string }> = ({ 
  backgroundColor = 'transparent' 
}) => {
  const deviceInfo = getDeviceInfo();
  
  return (
    <View 
      style={[
        styles.statusBarSpacer, 
        { 
          height: deviceInfo.statusBarHeight,
          backgroundColor 
        }
      ]} 
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  dynamicIslandArea: {
    width: '100%',
  },
  notchArea: {
    width: '100%',
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  statusBarSpacer: {
    width: '100%',
  },
});