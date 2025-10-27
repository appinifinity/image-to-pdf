import * as ImagePicker from 'expo-image-picker';
import { ImageItem } from '../types';

export class ImageService {
  static async requestPermissions(): Promise<boolean> {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    return status === 'granted';
  }

  static async pickImages(): Promise<ImageItem[]> {
    try {
      const hasPermission = await this.requestPermissions();
      if (!hasPermission) {
        throw new Error('Permission to access media library is required');
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
        quality: 1,
        selectionLimit: 20, // Limit to 20 images
      });

      if (result.canceled) {
        return [];
      }

      return result.assets.map((asset, index) => ({
        id: `${Date.now()}-${index}`,
        uri: asset.uri,
        width: asset.width,
        height: asset.height,
        fileName: asset.fileName || `image_${index + 1}.jpg`,
      }));
    } catch (error) {
      console.error('Error picking images:', error);
      throw error;
    }
  }
}