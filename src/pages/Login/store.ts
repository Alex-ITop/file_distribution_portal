import { NavigateFunction } from 'react-router-dom';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware'
import { submitCredentials } from './api';
import { ICredentials, ILoginStore } from '../../types/credentials.types';

export const useLoginStore = create<ILoginStore>()(devtools((set) => ({
  roles: null,
  loading: false,
  error: null,
  sendCredentials: async (credentials: ICredentials, navigate: NavigateFunction) => {
    const response = await submitCredentials(credentials);
    set({ roles: response }, false, 'setRoles')
    navigate('/guest');
  },
})));