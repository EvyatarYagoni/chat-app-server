const {Router} = require('express');
const {login, signup, logout, refreshToken} = require("../../controllers/auth/authController");
const {getUser} = require("../../controllers/auth/authController");
const verifyJWTMiddleware = require("../../middlewares/auth/verifyJWTMiddleware");
const router = Router();

router.post('/login', login);

router.post('/signup', signup);

router.get('/logout', logout);

router.get('/refresh-token', refreshToken);

router.post('/me', verifyJWTMiddleware ,getUser);

module.exports = router;