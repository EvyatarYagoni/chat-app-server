const {Router} = require('express');
const authenticateTokenMiddleware = require("../../middlewares/auth/authMiddleware");
const verifyJWTMiddleware = require("../../middlewares/auth/verifyJWTMiddleware");
const router = Router();

router.get('/', verifyJWTMiddleware,  function(req, res) {
    const user = req.user;
    res.send(user);
});

router.get('/health', function(req, res) {
    res.send('OK');
});

module.exports = router;