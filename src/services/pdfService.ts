import { PDFDocument, PageSizes } from 'pdf-lib';
import * as FileSystem from 'expo-file-system';
import { ImageItem, PDFOptions } from '../types';

export class PDFService {
  static async convertImagesToPDF(
    images: ImageItem[],
    options: PDFOptions
  ): Promise<string> {
    try {
      // Create a new PDF document
      const pdfDoc = await PDFDocument.create();

      for (const image of images) {
        // Read image file as base64
        const imageBase64 = await FileSystem.readAsStringAsync(image.uri, {
          encoding: FileSystem.EncodingType.Base64,
        });

        // Embed image in PDF
        let embeddedImage;
        if (image.uri.toLowerCase().includes('.png')) {
          embeddedImage = await pdfDoc.embedPng(`data:image/png;base64,${imageBase64}`);
        } else {
          embeddedImage = await pdfDoc.embedJpg(`data:image/jpeg;base64,${imageBase64}`);
        }

        // Add a page with the image
        const page = pdfDoc.addPage(PageSizes.A4);
        const { width: pageWidth, height: pageHeight } = page.getSize();

        // Calculate image dimensions to fit the page while maintaining aspect ratio
        const imageAspectRatio = image.width / image.height;
        const pageAspectRatio = pageWidth / pageHeight;

        let imageWidth, imageHeight;
        if (imageAspectRatio > pageAspectRatio) {
          // Image is wider than page
          imageWidth = pageWidth - 40; // 20px margin on each side
          imageHeight = imageWidth / imageAspectRatio;
        } else {
          // Image is taller than page
          imageHeight = pageHeight - 40; // 20px margin on top and bottom
          imageWidth = imageHeight * imageAspectRatio;
        }

        // Center the image on the page
        const x = (pageWidth - imageWidth) / 2;
        const y = (pageHeight - imageHeight) / 2;

        page.drawImage(embeddedImage, {
          x,
          y,
          width: imageWidth,
          height: imageHeight,
        });
      }

      // Serialize the PDF document
      const pdfBytes = await pdfDoc.save();

      // Create the PDF file path
      const documentsDir = FileSystem.documentDirectory + 'ImageToPDF/';
      await FileSystem.makeDirectoryAsync(documentsDir, { intermediates: true });
      
      const pdfPath = documentsDir + options.fileName;

      // Convert PDF bytes to base64 string (React Native compatible)
      let binaryString = '';
      for (let i = 0; i < pdfBytes.length; i++) {
        binaryString += String.fromCharCode(pdfBytes[i]);
      }
      const base64String = btoa(binaryString);
      
      // Write PDF to file system
      await FileSystem.writeAsStringAsync(
        pdfPath,
        base64String,
        { encoding: FileSystem.EncodingType.Base64 }
      );

      return pdfPath;
    } catch (error) {
      console.error('Error converting images to PDF:', error);
      throw error;
    }
  }

  static generateFileName(): string {
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0].replace(/-/g, '');
    const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '');
    return `MyPDF_${dateStr}_${timeStr}.pdf`;
  }
}