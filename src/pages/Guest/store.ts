import { create } from 'zustand';
import { IUserSpaceState } from '../../types/user-space.types';
import { devtools } from 'zustand/middleware'
import { getVersions } from './helpers/get-versions';
import { getScopeById } from '../../shared/api/scope';

const initialScope = {
  id: 1,
  name: 'Наименование',
  description: '',
  copyright: '',
  showIllustration: false,
  folders: [],
  icon: [],
  images: [],
  distributionAgreement: [],
}

export const useUserSpace = create<IUserSpaceState>()(devtools((set) => ({
  scope: {
    ...initialScope
  },
  folders: [],
  versionsNumbers: [],
  loading: false,
  error: null,
  fetchSpace: async () => {
    const response = await getScopeById(1);
    if (response) {
      set({ folders:  response.folders}, false, 'setFolders');
      
      const allVersions = response.folders && response.folders.map(({versions}) => versions).flat();
      const versionsNumbers = allVersions ? getVersions(allVersions) : [];
      set({ versionsNumbers }, false, 'setVersionsNumbers');
      
      const scope = { ...response };
      delete scope.folders;
      set({ scope }, false, 'setScope');
    }    
  },
})));
