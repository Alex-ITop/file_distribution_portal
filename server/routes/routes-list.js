import express from 'express';
import { performLogin, login, logout } from '../controllers/login.js';
import { getAllScopes, getScopeById } from '../controllers/scope.js';
import { getTree } from '../controllers/tree.js';
import { ROOT_URL } from '../config.js';

const defaultRoute = express.Router();

//LoginController
defaultRoute.post(`${ROOT_URL}/login/perform_login`, performLogin);
defaultRoute.get(`${ROOT_URL}/login/login`, login);
defaultRoute.get(`${ROOT_URL}/login/logout`, logout);

//ScopeController
defaultRoute.get(`${ROOT_URL}/scope/all`, getAllScopes);
defaultRoute.get(`${ROOT_URL}/scope/:id`, getScopeById);

//TreeController
defaultRoute.get(`${ROOT_URL}/tree`, getTree);

export default defaultRoute;
