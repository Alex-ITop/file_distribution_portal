import { IFile } from "./file";

export interface IVersion {
  id: number;
  versionNumber: string;
  dateOfPublication: Date;
  description: string;
  showIllustration:	boolean;
  publish: boolean;
  images: IFile[];
  files: IFile[];
}
