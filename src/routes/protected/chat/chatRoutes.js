const {Router} = require('express');
const router = Router();
const chatController = require("../../../controllers/chat/chatController");


router.post('/', chatController.createChat);

module.exports = router;