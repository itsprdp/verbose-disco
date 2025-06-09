import { Dimensions, Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Device from 'expo-device';

export interface DeviceInfo {
  isIPhone: boolean;
  hasNotch: boolean;
  hasDynamicIsland: boolean;
  isIPhonePro: boolean;
  screenHeight: number;
  screenWidth: number;
  statusBarHeight: number;
  bottomSafeArea: number;
  deviceName: string;
}

export const getDeviceInfo = (): DeviceInfo => {
  const { width, height } = Dimensions.get('window');
  const statusBarHeight = Constants.statusBarHeight || 0;
  
  // Detect iPhone models with Dynamic Island
  const deviceName = Device.deviceName || '';
  const isIPhone = Platform.OS === 'ios';
  
  // iPhone 14 Pro/Pro Max and iPhone 15 series have Dynamic Island
  const hasDynamicIsland = isIPhone && (
    deviceName.includes('iPhone 14 Pro') ||
    deviceName.includes('iPhone 15') ||
    // Screen dimensions for Dynamic Island devices
    (height === 932 && width === 430) || // iPhone 14 Pro Max, iPhone 15 Plus/Pro Max
    (height === 852 && width === 393) || // iPhone 14 Pro, iPhone 15/Pro
    statusBarHeight >= 59 // Dynamic Island typically has higher status bar
  );
  
  // iPhone models with notch (X, XS, XR, 11, 12, 13 series)
  const hasNotch = isIPhone && !hasDynamicIsland && (
    statusBarHeight >= 44 || // Standard notch height
    height >= 812 // iPhone X and later screen heights
  );
  
  // iPhone Pro models (better cameras, ProMotion, etc.)
  const isIPhonePro = isIPhone && (
    deviceName.includes('Pro') ||
    hasDynamicIsland
  );
  
  // Estimate bottom safe area for gesture navigation
  const bottomSafeArea = isIPhone && (hasNotch || hasDynamicIsland) ? 34 : 0;
  
  return {
    isIPhone,
    hasNotch,
    hasDynamicIsland,
    isIPhonePro,
    screenHeight: height,
    screenWidth: width,
    statusBarHeight,
    bottomSafeArea,
    deviceName,
  };
};

export const getDynamicIslandOffset = (): number => {
  const deviceInfo = getDeviceInfo();
  if (deviceInfo.hasDynamicIsland) {
    // Dynamic Island requires extra top padding
    return deviceInfo.statusBarHeight + 8;
  } else if (deviceInfo.hasNotch) {
    // Standard notch padding
    return deviceInfo.statusBarHeight + 4;
  }
  // No notch/Dynamic Island
  return deviceInfo.statusBarHeight;
};

export const getBottomSafeOffset = (): number => {
  const deviceInfo = getDeviceInfo();
  return deviceInfo.bottomSafeArea;
};

// Screen size categories for responsive design
export const getScreenCategory = () => {
  const { screenHeight, screenWidth } = getDeviceInfo();
  
  if (screenWidth < 375) return 'small'; // iPhone SE, older models
  if (screenWidth < 414) return 'medium'; // iPhone 12 mini, standard iPhones
  if (screenWidth < 430) return 'large'; // iPhone 12/13/14 Plus
  return 'xlarge'; // iPhone 14 Pro Max, iPhone 15 Pro Max
};

export const isLandscape = (): boolean => {
  const { width, height } = Dimensions.get('window');
  return width > height;
};