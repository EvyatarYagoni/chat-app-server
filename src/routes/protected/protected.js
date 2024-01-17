const {Router} = require('express');
const router = Router();
const userRoutes = require('./user/user');
const messageRoutes = require('./message/messageRoutes');
const chatRoutes = require('./chat/chatRoutes');


router.use('/users', userRoutes);
router.use('/message', messageRoutes);
router.use('/chat', chatRoutes);


module.exports = router;