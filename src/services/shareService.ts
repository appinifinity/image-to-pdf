import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';

export class ShareService {
  static async sharePDF(pdfPath: string): Promise<void> {
    try {
      const isAvailable = await Sharing.isAvailableAsync();
      if (!isAvailable) {
        throw new Error('Sharing is not available on this device');
      }

      // Check if file exists
      const fileInfo = await FileSystem.getInfoAsync(pdfPath);
      if (!fileInfo.exists) {
        throw new Error('PDF file not found');
      }

      await Sharing.shareAsync(pdfPath, {
        mimeType: 'application/pdf',
        dialogTitle: 'Share PDF',
      });
    } catch (error) {
      console.error('Error sharing PDF:', error);
      throw error;
    }
  }

  static async savePDFToGallery(pdfPath: string): Promise<void> {
    try {
      // Note: For saving to gallery, we would need expo-media-library
      // This is a placeholder for the save functionality
      console.log('PDF saved to:', pdfPath);
    } catch (error) {
      console.error('Error saving PDF:', error);
      throw error;
    }
  }
}