export interface IFolder {
  label: string;
  date: string;
  description?: string;
  images?: string[];
}

export interface IFoldersState {
  folders: IFolder[] | [];
  loading: boolean;
  error: unknown;
  fetchFolders: () => void;
}