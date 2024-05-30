import { create } from 'zustand';
import { devtools } from 'zustand/middleware'
import { IFoldersState } from '../../types/folders.types';
import { getFolders } from './api';

export const useFolders = create<IFoldersState>()(devtools((set) => ({
  folders: [],
  loading: false,
  error: null,
  fetchFolders: async () => {
    const response = await getFolders();
    set({ folders: response }, false, 'getFolders')
  },
})));