const {Router} = require('express');
const {login, signup, logout} = require("../../controllers/auth/authController");
const router = Router();

router.post('/login', login);

router.post('/signup', signup);

router.get('/logout', logout);

module.exports = router;