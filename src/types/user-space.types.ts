/*Версия пространства*/
interface IVersion {
  /*Наименование версии*/
  label: string;
  /*Дата создания*/
  date: Date | string;
  /*Описание*/
  description: string;
  /*Скриншоты*/
  images?: string[];
}

/*Пространство*/
export interface ISpace {
  /*Название пространства*/
  name: string;
  /*Иконка*/
  icon: string;
  /*Скриншоты*/
  images: string[];
  /*Описание*/
  description: string;
  /*Разделы пространства*/
  sections: ISection[];
}

export interface IScopeDto {
  id: number;
  name: string;
  description: string;
  copyright: string;
  showIllustration: boolean;
  folders?: IFolderDto[];
  icon: IFileDto[];
  images: IFileDto[];
  distributionAgreement: IFileDto[];
}

export interface IFolderDto {
  id: number;
  name: string;
  publish: boolean;
  manifestForIOS: boolean;
  identifier: string;
  manifestForIOSFile: IFile[];
  versions: IVersionDto[]
}

interface IFileDto {
  id: number;
  name: string;
  type: string;
  tag: ITag[];

}

export interface IVersionDto {
  id: number;
  versionNumber: string;
  dateOfPublication: string;
  description: string;
  showIllustration: boolean;
  publish: boolean;
  images: IFileDto[];
  files: IFileDto[];
}

/*Раздел*/
interface ISection {
  /*Наименование раздела*/
  name: string;
  /*Описание*/
  description: string;
  /*Версии раздела*/
  versions: IVersion[];
  /*Файлы*/
  files: IFile[];
}

interface ITag {
  id: number;
  letter: string;
  backgroundColor: string;
  letterColor: string;
}

/*Фаил*/
interface IFile {
  id: number;
  name: string;
  size: number;
  type: string;
  dateCreated: string;
  location: string;
  tag: ITag[];
}

interface IVersionNumber {
  key: number,
  label: string;
  dateOfPublication: Date | string;
  description: string;
}

export interface IUserSpaceState {
  scope: IScopeDto;
  folders: IFolderDto[] | undefined;
  versionsNumbers: IVersionNumber[];
  loading: boolean;
  error: unknown;
  fetchSpace: () => void;
}

interface IFolder {
  id: "1";
  label: "1.9.10";
  date: "20.08.2022";
}
export interface IUserFolderState {
  folders: IFolder | null;
  loading: boolean;
  error: unknown;
  fetchSpace: () => void;
}