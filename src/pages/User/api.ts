import { API_FOLDERS } from "../../constants/routes";
import { IFolder } from "../../types/folders.types";

export const getFolders = (): Promise<IFolder[]> => fetch(API_FOLDERS).then(response => response.json());

