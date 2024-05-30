import { API_GUEST, API_FOLDERS } from "../../constants/routes";
import type { ISpace } from "../../types/user-space.types";

export const getFolders = (): Promise<ISpace> => fetch(API_FOLDERS).then(response => response.json());

export const getScopeMock = (): Promise<ISpace> => fetch(API_GUEST).then(response => response.json());