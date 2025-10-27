import { create } from 'zustand';
import { ImageItem, PDFOptions } from '../types';

interface ImageStore {
  selectedImages: ImageItem[];
  isConverting: boolean;
  lastPdfPath: string | null;
  
  // Actions
  addImages: (images: ImageItem[]) => void;
  removeImage: (id: string) => void;
  reorderImages: (images: ImageItem[]) => void;
  clearImages: () => void;
  setConverting: (converting: boolean) => void;
  setLastPdfPath: (path: string | null) => void;
}

export const useImageStore = create<ImageStore>((set) => ({
  selectedImages: [],
  isConverting: false,
  lastPdfPath: null,
  
  addImages: (images) =>
    set((state) => ({
      selectedImages: [...state.selectedImages, ...images],
    })),
    
  removeImage: (id) =>
    set((state) => ({
      selectedImages: state.selectedImages.filter((img) => img.id !== id),
    })),
    
  reorderImages: (images) =>
    set({ selectedImages: images }),
    
  clearImages: () =>
    set({ selectedImages: [], lastPdfPath: null }),
    
  setConverting: (converting) =>
    set({ isConverting: converting }),
    
  setLastPdfPath: (path) =>
    set({ lastPdfPath: path }),
}));