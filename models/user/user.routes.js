const { Router } = require('express');
const { createUser, login } = require('./user.controller');

const userRoutes = Router();

userRoutes.post('/create', createUser);
userRoutes.post('/login', login);







module.exports = { userRoutes };