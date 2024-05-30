import path from 'path';
import { getData } from '../utils/file.js';
import { __dirname } from '../utils/dirname.js';

export const performLogin = (req, res) => {
  getData(path.join(__dirname, '../db/users.json')).then((users) => {
    const { username } = req.body;
    const roles = users.find((user) => user.username === username)?.roles;

    if (!roles) {
      res.status(401).send('User not found');
    }

    res.json(roles);
  });
};
export const logout = (req, res) => {
  res.send('Тут будет реализация logout');
};

export const login = (req, res) => {
  res.send('Тут будет реализация login');
};
