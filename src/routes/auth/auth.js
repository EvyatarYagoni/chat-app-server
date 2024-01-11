const {Router} = require('express');
const {login, signup, logout, refreshToken} = require("../../controllers/auth/authController");
const router = Router();

router.post('/login', login);

router.post('/signup', signup);

router.get('/logout', logout);

router.get('/refresh-token', refreshToken);

module.exports = router;