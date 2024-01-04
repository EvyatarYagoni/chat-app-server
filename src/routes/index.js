const express = require('express');
const router = express.Router();

const authRoutes = require('./auth/auth');
const publicRoutes = require('./public/public');

// Authentication routes
router.use('/auth', authRoutes);
router.use('', publicRoutes);

module.exports = router;
