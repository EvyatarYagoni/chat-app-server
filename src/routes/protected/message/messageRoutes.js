const {Router} = require('express');
const router = Router();
const messageController = require("../../../controllers/message/messageController");


router.post('/', messageController.createMessage);

module.exports = router;