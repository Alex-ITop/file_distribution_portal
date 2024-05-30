import { API_GUEST_EMULATOR, API_GUEST_EMULATOR_TREE } from "../../constants/routes";
import type { IScopeDto } from "../../types/user-space.types";

export const getScopeById = (id = 1): Promise<IScopeDto> => {
  return fetch(`${API_GUEST_EMULATOR}${id}`)
    .then(response => response.json())
};

export const getTree = () => fetch(API_GUEST_EMULATOR_TREE).then(response => response.json());