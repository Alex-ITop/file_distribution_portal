import { Dispatch, SetStateAction } from "react";

export interface IVersionTreeProps {
  setEditType: Dispatch<SetStateAction<string>>;
  treeData: any;
}

export interface ITreeState {
  scopes: never[]; 
  fetchTree: () => Promise<void>; 
}
