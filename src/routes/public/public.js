const {Router} = require('express');
const authenticateTokenMiddleware = require("../../middlewares/auth/authMiddleware");
const router = Router();

router.get('/', authenticateTokenMiddleware,  function(req, res) {
    const user = req.user;
    res.send(user);
});

router.get('/health', function(req, res) {
    res.send('OK');
});

module.exports = router;