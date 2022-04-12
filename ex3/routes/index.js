const express = require('express');
const router = express.Router();
// const userService = require('../services/')
//import service

const { login } = require('../services/login');
const { register } = require('../services/register');


router.post('/login', async (req, res, next) => {

    const { email, password } = req.body;

    const user = await login(email, password);

    res.json(user);

})


router.post('/register', async (req, res, next) => {

    const createUser = await register(req.body);

    res.json(createUser);
})
module.exports = router;