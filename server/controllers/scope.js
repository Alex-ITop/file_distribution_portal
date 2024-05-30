import path from 'path';
import { getData } from '../utils/file.js';
import { __dirname } from '../utils/dirname.js';
import { makeScope } from '../services/makeScope.js'

export const getAllScopes = (req, res) => {
  getData(path.join(__dirname, '../db/scopes.json')).then((scopes) => {
    res.json(scopes);
  });
};
export const getScopeById = (req, res) => {
  const { id } = req.params;
  const scope = makeScope(id, 3, 3);
  res.json(scope);
};
