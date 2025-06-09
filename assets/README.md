# App Icons and Assets

This folder contains all the visual assets for the Malayalam Learning App.

## Icon Design

### Concept
The app icon features the Malayalam letter **"മ" (ma)** as the central element, representing:
- **Malayalam script** - the primary focus of the app
- **"ma" sound** - one of the most common sounds in Malayalam
- **Mother/അമ്മ (amma)** - "മ" is the first letter of "mother" in Malayalam

### Design Elements

#### Main Icon (`icon.png`, `splash.png`)
- **Background**: Blue gradient (#3498db → #2980b9) representing learning and knowledge
- **Central Letter**: Stylized Malayalam "മ" in white, easily recognizable
- **Transliteration**: "ma" text below the letter for non-Malayalam readers
- **Book Symbol**: Small book icon indicating learning/education
- **Progress Dots**: Three colored dots representing difficulty levels (green=beginner, orange=intermediate, red=advanced)

#### Favicon (`favicon.png`, `favicon.svg`)
- Simplified version of the main icon
- Optimized for small sizes (32x32px)
- Clean Malayalam "മ" on blue background
- Small book icon for context

### File Specifications

| File | Size | Purpose |
|------|------|---------|
| `favicon.png` | 32x32px | Web favicon |
| `icon.png` | 192x192px | App icon (iOS/Android) |
| `adaptive-icon.png` | 192x192px | Android adaptive icon |
| `splash.png` | 512x512px | Splash screen |
| `favicon.svg` | Vector | Scalable favicon source |
| `app-icon.svg` | Vector | Main icon source |

### Color Palette
- **Primary Blue**: #3498db (friendly, trustworthy)
- **Dark Blue**: #2980b9 (depth, stability)
- **White**: #ffffff (clarity, simplicity)
- **Dark Gray**: #2c3e50 (text, borders)

### Typography
- Malayalam letter: Custom drawn path based on traditional Malayalam script
- Latin text: Arial/sans-serif for universal readability

## Usage in App

The app.json configuration references these files:
```json
{
  "icon": "./assets/icon.png",
  "splash": {
    "image": "./assets/splash.png"
  },
  "web": {
    "favicon": "./assets/favicon.png"
  }
}
```

## Future Enhancements
- Animated icon variations
- Dark mode versions
- Platform-specific optimizations
- Higher resolution variants for different screen densities