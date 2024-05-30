import { NavigateFunction } from "react-router-dom";

export interface ICredentials {
  username: string;
  password: string;
  remember: boolean;
  roles: null | string[]
}

export interface ILoginStore {
  roles: null | string[];
  loading: boolean;
  error: unknown;
  sendCredentials: (credentials: ICredentials, navigate: NavigateFunction) => void;
}
