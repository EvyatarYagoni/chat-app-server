const {Router} = require('express');
const router = Router();
const userRoutes = require('./user/user');


router.use('/users', userRoutes);

module.exports = router;