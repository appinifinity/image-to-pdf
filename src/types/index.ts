export interface ImageItem {
  id: string;
  uri: string;
  width: number;
  height: number;
  fileName?: string;
}

export interface PDFOptions {
  fileName: string;
  quality: 'low' | 'medium' | 'high';
}

export type AppScreen = 'select' | 'preview' | 'convert' | 'share';