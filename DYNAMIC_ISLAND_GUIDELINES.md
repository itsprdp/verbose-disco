# Dynamic Island Support Guidelines

## 🚨 **MANDATORY: All Screens Must Include Dynamic Island Support**

Every screen and modal in the Malayalam Learning App must implement proper Dynamic Island support for iPhone 14 Pro/15 series devices. This ensures a consistent, professional user experience across all modern iPhones.

## 📱 **Required Components**

### **1. SafeAreaWrapper** 
**ALWAYS** wrap your main screen content with SafeAreaWrapper:

```typescript
import { SafeAreaWrapper, HeaderSafeArea } from '../components/SafeAreaWrapper';

<SafeAreaWrapper backgroundColor="#f8f9fa" headerColor="#3498db">
  {/* Your screen content */}
</SafeAreaWrapper>
```

### **2. HeaderSafeArea**
**ALWAYS** wrap your header content with HeaderSafeArea:

```typescript
<HeaderSafeArea backgroundColor="#3498db">
  <View style={styles.headerRow}>
    {/* Header content like title, back button, etc. */}
  </View>
</HeaderSafeArea>
```

## 🎨 **Color Coordination Requirements**

### **Critical Rule:** 
The Dynamic Island area MUST use the same color as your header background, NOT the screen background color.

```typescript
// ✅ CORRECT
<SafeAreaWrapper backgroundColor="#f8f9fa" headerColor="#3498db">
  <HeaderSafeArea backgroundColor="#3498db">

// ❌ WRONG - Never use background color for headerColor
<SafeAreaWrapper backgroundColor="#f8f9fa" headerColor="#f8f9fa">
```

### **Standard Color Scheme:**
- **Content Background:** `#f8f9fa` (light gray)
- **Header Background:** `#3498db` (blue)
- **Quiz Screens:** `#3498db` (blue) or `#27ae60` (green for results)
- **Letter Detail:** `#e74c3c` (red)

## 📋 **Implementation Checklist**

### **For Every New Screen/Modal:**

- [ ] Import SafeAreaWrapper and HeaderSafeArea
- [ ] Wrap main content with SafeAreaWrapper
- [ ] Specify backgroundColor and headerColor props
- [ ] Wrap header content with HeaderSafeArea
- [ ] Use consistent header color throughout the app
- [ ] Test on iPhone 14 Pro/15 simulator or device
- [ ] Verify no content overlap with Dynamic Island
- [ ] Ensure smooth visual transition from status area to header

### **Header Structure Pattern:**
```typescript
<SafeAreaWrapper backgroundColor="#f8f9fa" headerColor="#3498db">
  <HeaderSafeArea backgroundColor="#3498db">
    <View style={styles.headerRow}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.headerContent}>
        <Text style={styles.headerTitle}>Screen Title</Text>
        <Text style={styles.headerSubtitle}>മലയാളം ശീർഷകം</Text>
      </View>
    </View>
  </HeaderSafeArea>
  
  {/* Rest of screen content */}
</SafeAreaWrapper>
```

## 🔍 **Screen Types & Examples**

### **1. Main Navigation Screens**
```typescript
// LettersScreen, WordsScreen, GrammarScreen, etc.
<SafeAreaWrapper backgroundColor="#f8f9fa" headerColor="#3498db">
  <HeaderSafeArea backgroundColor="#3498db">
    {/* Navigation header with back button */}
  </HeaderSafeArea>
  {/* Main content */}
</SafeAreaWrapper>
```

### **2. Modal/Detail Screens**
```typescript
// LetterDetailView, Quiz screens, etc.
<SafeAreaWrapper backgroundColor="#f8f9fa" headerColor="#e74c3c">
  <HeaderSafeArea backgroundColor="#e74c3c">
    {/* Modal header with close button */}
  </HeaderSafeArea>
  {/* Modal content */}
</SafeAreaWrapper>
```

### **3. Home Screen**
```typescript
<SafeAreaWrapper backgroundColor="#f8f9fa" headerColor="#3498db">
  <HeaderSafeArea backgroundColor="#3498db">
    {/* Welcome header */}
  </HeaderSafeArea>
  {/* Dashboard content */}
</SafeAreaWrapper>
```

## ⚠️ **Common Mistakes to Avoid**

1. **Missing SafeAreaWrapper** - Never create a screen without it
2. **Wrong headerColor** - Don't use background color for Dynamic Island area
3. **Inconsistent colors** - Stick to the established color scheme
4. **Missing HeaderSafeArea** - Always wrap headers properly
5. **Hard-coded margins** - Let SafeAreaWrapper handle safe areas

## 🧪 **Testing Requirements**

Before submitting any screen changes:

1. **Test on iPhone 14 Pro/15 simulator**
2. **Verify Dynamic Island doesn't cover content**
3. **Check color continuity from status area to header**
4. **Test navigation (back/close buttons work)**
5. **Verify on older iPhone models (backward compatibility)**

## 📝 **Style Guidelines**

### **Required Header Styles:**
```typescript
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
},
```

## 🎯 **Examples of Proper Implementation**

### **✅ HomeScreen:**
- Uses SafeAreaWrapper with headerColor="#3498db"
- HeaderSafeArea with matching background
- Consistent throughout app

### **✅ LettersScreen:**
- Proper back button navigation
- Malayalam titles with transliteration
- Dynamic Island support for all tabs

### **✅ LetterQuiz:**
- Modal presentation with Dynamic Island support
- Progress indicator in header
- Proper close button positioning

### **✅ LetterDetailView:**
- Full-screen modal with red header
- Letter display in header
- Difficulty badge integration

## 🚀 **Future-Proofing**

This implementation ensures compatibility with:
- **Current:** iPhone 14 Pro, iPhone 15 series
- **Future:** New iPhone models with Dynamic Island
- **Legacy:** Older iPhones with notch or standard top
- **All orientations:** Portrait and landscape modes

## 📞 **Support & Troubleshooting**

If you encounter Dynamic Island issues:

1. Check SafeAreaWrapper implementation
2. Verify headerColor matches HeaderSafeArea backgroundColor  
3. Test on actual device or iPhone 14 Pro simulator
4. Ensure latest expo-device and react-native-safe-area-context versions

---

**Remember: EVERY screen must follow these guidelines. No exceptions!**