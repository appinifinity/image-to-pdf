# Image to PDF Converter

A modern React Native app built with Expo that allows users to select multiple images and convert them into a single PDF document offline.

## Features

- 📱 **Image Selection**: Pick multiple images from your device's gallery
- 👀 **Image Preview**: View selected images with drag-and-drop reordering
- 📄 **Offline PDF Conversion**: Convert images to PDF without internet connection
- 💾 **Local Saving**: Save PDFs directly to your device
- 🔗 **Easy Sharing**: Share generated PDFs with other apps
- 🏷️ **Auto-naming**: Automatic filename generation with timestamps
- 🎨 **Minimal UI**: Clean, intuitive interface using Material Design 3

## Tech Stack

- **React Native** with Expo SDK 52
- **TypeScript** for type safety
- **Zustand** for state management
- **React Native Paper** for UI components
- **pdf-lib** for PDF generation
- **Expo Image Picker** for image selection
- **Expo File System** for file operations

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd image-to-pdf
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npx expo start
```

4. Run on your preferred platform:
   - Press `w` for web
   - Press `a` for Android (requires Android Studio)
   - Press `i` for iOS (requires Xcode on macOS)

## Usage

1. **Select Images**: Tap the "Select Images" button to choose photos from your gallery
2. **Preview & Reorder**: View selected images and drag to reorder them as needed
3. **Convert to PDF**: Tap "Convert to PDF" to generate your document
4. **Save & Share**: Use the save or share buttons to store or distribute your PDF

## Permissions

The app requires the following permissions:
- **Media Library Access**: To read images from your device
- **File System Access**: To save PDFs locally

## Project Structure

```
src/
├── components/
│   └── ImagePreview.tsx     # Image preview with drag-and-drop
├── screens/
│   └── HomeScreen.tsx       # Main app interface
├── services/
│   ├── imageService.ts      # Image selection logic
│   ├── pdfService.ts        # PDF generation
│   └── shareService.ts      # Sharing functionality
├── store/
│   └── imageStore.ts        # Global state management
└── types/
    └── index.ts             # TypeScript definitions
```

## Development

### Adding New Features

1. Define types in `src/types/index.ts`
2. Add business logic to appropriate service files
3. Update the store if state management is needed
4. Create or modify components as required

### Building for Production

```bash
# Build for web
npx expo export --platform web

# Build for mobile (requires EAS CLI)
npx eas build --platform android
npx eas build --platform ios
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.# image-to-pdf
