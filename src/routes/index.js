const express = require('express');
const router = express.Router();

const authRoutes = require('./auth/auth');
const publicRoutes = require('./public/public');
const protectedRoutes = require('./protected/protected');
const verifyJWTMiddleware = require('../middlewares/auth/verifyJWTMiddleware');

router.use('/auth', authRoutes);
router.use('', publicRoutes);
router.use('', verifyJWTMiddleware ,protectedRoutes);

module.exports = router;
