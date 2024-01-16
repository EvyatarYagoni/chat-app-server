const {Router} = require('express');
const router = Router();
const userController = require("../../../controllers/user/userController");


router.get('/', userController.getAllUsers);

module.exports = router;