import { makeTree } from '../services/makeTree.js';

export const getTree = (req, res) => {
  const scope = makeTree(5, 3, 3);
  res.json(scope);
};