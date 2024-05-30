import { API_AUTH } from "../../constants/routes";
import { ICredentials } from "../../types/credentials.types";

export const submitCredentials = (credentials: ICredentials) => fetch(
  API_AUTH, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(credentials)
  }
).then(response => response.json());
