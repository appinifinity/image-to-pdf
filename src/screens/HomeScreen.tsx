import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { Button, Text, Snackbar, ActivityIndicator } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useImageStore } from '../store/imageStore';
import { ImagePreview } from '../components/ImagePreview';
import { ImageService } from '../services/imageService';
import { PDFService } from '../services/pdfService';
import { ShareService } from '../services/shareService';

export const HomeScreen: React.FC = () => {
  const {
    selectedImages,
    isConverting,
    lastPdfPath,
    addImages,
    removeImage,
    reorderImages,
    clearImages,
    setConverting,
    setLastPdfPath,
  } = useImageStore();

  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const showSnackbar = (message: string) => {
    setSnackbarMessage(message);
    setSnackbarVisible(true);
  };

  const handleSelectImages = async () => {
    try {
      const images = await ImageService.pickImages();
      if (images.length > 0) {
        addImages(images);
        showSnackbar(`${images.length} image(s) selected`);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to select images. Please try again.');
    }
  };

  const handleConvertToPDF = async () => {
    if (selectedImages.length === 0) {
      Alert.alert('No Images', 'Please select at least one image to convert.');
      return;
    }

    try {
      setConverting(true);
      const fileName = PDFService.generateFileName();
      const pdfPath = await PDFService.convertImagesToPDF(selectedImages, {
        fileName,
        quality: 'high',
      });
      
      setLastPdfPath(pdfPath);
      showSnackbar('PDF created successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to convert images to PDF. Please try again.');
    } finally {
      setConverting(false);
    }
  };

  const handleSharePDF = async () => {
    if (!lastPdfPath) {
      Alert.alert('No PDF', 'Please convert images to PDF first.');
      return;
    }

    try {
      await ShareService.sharePDF(lastPdfPath);
    } catch (error) {
      Alert.alert('Error', 'Failed to share PDF. Please try again.');
    }
  };

  const handleClearAll = () => {
    Alert.alert(
      'Clear All Images',
      'Are you sure you want to remove all selected images?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Clear', style: 'destructive', onPress: clearImages },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineMedium" style={styles.title}>
          Image to PDF
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Convert your images to PDF offline
        </Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <ImagePreview
          images={selectedImages}
          onReorder={reorderImages}
          onRemove={removeImage}
        />
      </ScrollView>

      <View style={styles.bottomActions}>
        <View style={styles.actionRow}>
          <Button
            mode="outlined"
            onPress={handleSelectImages}
            style={styles.actionButton}
            icon="image-multiple"
          >
            Select Images
          </Button>
          
          {selectedImages.length > 0 && (
            <Button
              mode="outlined"
              onPress={handleClearAll}
              style={styles.clearButton}
              textColor="#ff4444"
            >
              Clear All
            </Button>
          )}
        </View>

        <Button
          mode="contained"
          onPress={handleConvertToPDF}
          disabled={selectedImages.length === 0 || isConverting}
          style={styles.convertButton}
          icon={isConverting ? undefined : "file-pdf-box"}
        >
          {isConverting ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            'Convert to PDF'
          )}
        </Button>

        {lastPdfPath && (
          <Button
            mode="contained-tonal"
            onPress={handleSharePDF}
            style={styles.shareButton}
            icon="share"
          >
            Share PDF
          </Button>
        )}
      </View>

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
      >
        {snackbarMessage}
      </Snackbar>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    paddingBottom: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  title: {
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  subtitle: {
    marginTop: 4,
    color: '#6c757d',
  },
  content: {
    flex: 1,
  },
  bottomActions: {
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
  },
  actionRow: {
    flexDirection: 'row',
    marginBottom: 12,
    gap: 12,
  },
  actionButton: {
    flex: 1,
  },
  clearButton: {
    borderColor: '#ff4444',
  },
  convertButton: {
    marginBottom: 8,
  },
  shareButton: {
    // Additional styling if needed
  },
});