import React from 'react';
import { View, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import { ImageItem } from '../types';

interface ImagePreviewProps {
  images: ImageItem[];
  onReorder: (images: ImageItem[]) => void;
  onRemove: (id: string) => void;
}

const { width: screenWidth } = Dimensions.get('window');
const imageSize = (screenWidth - 60) / 3; // 3 images per row with margins

export const ImagePreview: React.FC<ImagePreviewProps> = ({
  images,
  onReorder,
  onRemove,
}) => {
  const moveImage = (fromIndex: number, toIndex: number) => {
    const newImages = [...images];
    const [movedImage] = newImages.splice(fromIndex, 1);
    newImages.splice(toIndex, 0, movedImage);
    onReorder(newImages);
  };

  const renderImage = (item: ImageItem, index: number) => (
    <View key={item.id} style={styles.imageContainer}>
      <Image source={{ uri: item.uri }} style={styles.image} />
      <IconButton
        icon="close-circle"
        size={24}
        iconColor="#ff4444"
        style={styles.removeButton}
        onPress={() => onRemove(item.id)}
      />
      <View style={styles.reorderButtons}>
        {index > 0 && (
          <IconButton
            icon="chevron-left"
            size={16}
            style={styles.moveButton}
            onPress={() => moveImage(index, index - 1)}
          />
        )}
        {index < images.length - 1 && (
          <IconButton
            icon="chevron-right"
            size={16}
            style={styles.moveButton}
            onPress={() => moveImage(index, index + 1)}
          />
        )}
      </View>
    </View>
  );

  if (images.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text variant="bodyLarge" style={styles.emptyText}>
          No images selected
        </Text>
        <Text variant="bodyMedium" style={styles.emptySubtext}>
          Tap "Select Images" to get started
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text variant="titleMedium" style={styles.title}>
        Selected Images ({images.length})
      </Text>
      <Text variant="bodySmall" style={styles.subtitle}>
        Use arrow buttons to reorder
      </Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {images.map((item, index) => renderImage(item, index))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    marginBottom: 4,
    fontWeight: 'bold',
  },
  subtitle: {
    marginBottom: 16,
    opacity: 0.7,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  imageContainer: {
    margin: 4,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: imageSize,
    height: imageSize,
    backgroundColor: '#f0f0f0',
  },
  removeButton: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  reorderButtons: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  moveButton: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    margin: 2,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  emptyText: {
    marginBottom: 8,
    fontWeight: 'bold',
  },
  emptySubtext: {
    opacity: 0.7,
    textAlign: 'center',
  },
});