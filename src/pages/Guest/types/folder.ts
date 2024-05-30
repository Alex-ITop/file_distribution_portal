import { IFile } from "./file";

// interface IManifestForIOSFile {
//   id: number;
//   name:	string;
//   size:	number;
//   type:	string;
//   dateCreated: Date;
//   location:	string;
// }

export interface IFolder {
  id: number;
  name:	string;
  description?: string;
  files: any[]
}
