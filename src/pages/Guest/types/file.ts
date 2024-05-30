import { ITag } from "./tag";

export interface IFile {
  id: number;
  name:	string;
  type:	string;
  tag: ITag;
}